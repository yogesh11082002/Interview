
'use client';

import { useState, useEffect } from 'react';
import { useRouter, useParams } from 'next/navigation';
import { questions, type Question } from '@/lib/questions';
import { categories } from '@/lib/categories';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { ArrowLeft, ArrowRight, Mic, Speaker, Volume2, Loader2, PlayCircle } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { useUser, useFirestore } from '@/firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog"
import { motion } from 'framer-motion';

type UserAnswer = {
  questionId: number;
  answer: string;
};

type TestState = 'not-started' | 'in-progress' | 'completed';

export default function TestPage() {
  const router = useRouter();
  const params = useParams();
  const { toast } = useToast();
  const { user, isUserLoading } = useUser();
  const firestore = useFirestore();

  const categorySlug = Array.isArray(params.category) ? params.category[0] : params.category;
  const testId = Array.isArray(params.testId) ? parseInt(params.testId[0]) : parseInt(params.testId);

  const [questionSet, setQuestionSet] = useState<Question[]>([]);
  const [category, setCategory] = useState<{ name: string } | null>(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState<UserAnswer[]>([]);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [isRecognizing, setIsRecognizing] = useState(false);
  const [showExitConfirm, setShowExitConfirm] = useState(false);
  const [testState, setTestState] = useState<TestState>('not-started');

  useEffect(() => {
    if (!isUserLoading && !user) {
      router.push('/login');
    }
  }, [user, isUserLoading, router]);

  useEffect(() => {
    if (categorySlug && testId) {
      const foundCategory = categories.find((c) => c.slug === categorySlug);
      if (foundCategory) {
        setCategory(foundCategory);
      } else {
        router.push('/prepare');
      }
    }
  }, [categorySlug, testId, router]);
  
  useEffect(() => {
    return () => {
      if (isSpeaking) {
        window.speechSynthesis.cancel();
      }
    };
  }, [isSpeaking]);

  const startTest = () => {
    const allQuestionsForCategory = questions[categorySlug];
    if (allQuestionsForCategory) {
      const questionsForTest = allQuestionsForCategory.filter(q => q.testId === testId);
      const shuffledQuestions = questionsForTest.sort(() => Math.random() - 0.5);
      
      setQuestionSet(shuffledQuestions);
      setUserAnswers(
        shuffledQuestions.map((q) => ({ questionId: q.id, answer: '' }))
      );
      setTestState('in-progress');
    } else {
        toast({ title: 'Could not load questions.', variant: 'destructive'})
    }
  }

  const handleGoBack = () => {
    setShowExitConfirm(true);
  };

  const confirmGoBack = () => {
    router.push(`/prepare/${categorySlug}`);
  };


  const handleAnswerChange = (answer: string) => {
    const newAnswers = [...userAnswers];
    const currentQuestionId = questionSet[currentQuestionIndex].id;
    const answerIndex = newAnswers.findIndex(a => a.questionId === currentQuestionId);

    if (answerIndex > -1) {
      newAnswers[answerIndex] = {
        ...newAnswers[answerIndex],
        answer,
      };
    }
    setUserAnswers(newAnswers);
  };
  
  const currentQuestion = questionSet[currentQuestionIndex];
  const progress = ((currentQuestionIndex + 1) / questionSet.length) * 100;
  const currentAnswer = userAnswers.find(a => a.questionId === currentQuestion?.id)?.answer || '';


  const goToNext = () => {
    if (currentQuestionIndex < questionSet.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  const goToPrev = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  const handleFinish = async () => {
    if (!user || !firestore) {
        toast({ title: "You must be logged in to save your results.", variant: "destructive" });
        return;
    }
    
    try {
        const resultPayload = {
          userId: user.uid,
          categorySlug,
          categoryName: category?.name,
          testId: testId.toString(),
          userAnswers,
          questions: questionSet,
          createdAt: serverTimestamp(),
          date: new Date().toISOString(),
        };
        const docRef = await addDoc(collection(firestore, `users/${user.uid}/progress`), resultPayload);
        router.push(`/prepare/${categorySlug}/result?session=${docRef.id}`);
    } catch (error) {
        console.error("Error saving results: ", error);
        toast({ title: "Failed to save results.", description: "Please try again.", variant: "destructive" });
    }
  };

  const handleTextToSpeech = () => {
    if (!currentQuestion || isSpeaking) return;
    
    if (!window.speechSynthesis) {
        toast({ title: "Text-to-speech not supported", description: "Your browser does not support this feature.", variant: "destructive" });
        return;
    }

    const utterance = new SpeechSynthesisUtterance(currentQuestion.question);
    utterance.onstart = () => setIsSpeaking(true);
    utterance.onend = () => setIsSpeaking(false);
    utterance.onerror = (event) => {
        setIsSpeaking(false);
        toast({ title: "Text-to-speech error", description: `An error occurred: ${event.error}`, variant: "destructive" });
    }
    window.speechSynthesis.speak(utterance);
  };

  const handleSpeechToText = () => {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (isRecognizing) return;
    
    if (!SpeechRecognition) {
        toast({ title: "Speech recognition not supported", description: "Please try a different browser like Chrome or Safari.", variant: "destructive" });
        return;
    }
    
    const recognition = new SpeechRecognition();
    recognition.continuous = false;
    recognition.interimResults = false;
    recognition.lang = 'en-US';

    recognition.onstart = () => setIsRecognizing(true);
    recognition.onend = () => setIsRecognizing(false);
    
    recognition.onerror = (event) => {
        setIsRecognizing(false);
        let errorDescription = 'An unknown error occurred.';
        if (event.error === 'no-speech') {
            errorDescription = 'No speech was detected. Please try again.';
        } else if (event.error === 'not-allowed') {
            errorDescription = 'Microphone access was denied. Please enable it in your browser settings.';
        } else if (event.error === 'network') {
            errorDescription = 'A network error occurred with the speech recognition service. Please check your connection and try again.';
        }
        toast({ title: "Speech recognition error", description: errorDescription, variant: "destructive" });
    }

    recognition.onresult = (event) => {
        const transcript = event.results[0][0].transcript;
        handleAnswerChange(transcript);
    };
    recognition.start();
  };

  if (isUserLoading || !user) {
    return (
      <div className="flex h-screen items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin" />
      </div>
    );
  }

  if (testState === 'not-started') {
      const allQuestionsForCategory = questions[categorySlug];
      const questionsForTest = allQuestionsForCategory?.filter(q => q.testId === testId).length || 0;
      return (
          <div className="container mx-auto flex items-center justify-center py-20">
               <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                >
                <Card className="max-w-xl text-center shadow-lg">
                    <CardHeader>
                        <CardTitle className="text-3xl font-headline">
                            {category?.name} - Test {testId}
                        </CardTitle>
                        <CardDescription>
                            This test contains {questionsForTest} questions.
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <p className="text-muted-foreground">Are you ready to begin?</p>
                    </CardContent>
                    <CardFooter>
                        <Button className="w-full" size="lg" onClick={startTest}>
                            <PlayCircle className="mr-2" />
                            Start Test
                        </Button>
                    </CardFooter>
                </Card>
              </motion.div>
          </div>
      );
  }


  if (testState === 'in-progress' && (!category || questionSet.length === 0 || !currentQuestion)) {
    return (
      <div className="container mx-auto flex items-center justify-center py-20">
        <Loader2 className="h-8 w-8 animate-spin" />
      </div>
    );
  }

  return (
    <div className="container mx-auto py-12 px-4 md:px-6">
       <div className="mb-4">
        <Button variant="ghost" onClick={handleGoBack}>
          <ArrowLeft className="mr-2 h-4 w-4" /> Back to Tests
        </Button>
      </div>

      <div className="max-w-3xl mx-auto">
        <Progress value={progress} className="mb-4" />
        <Card className="shadow-lg">
          <CardHeader>
            <div className="flex justify-between items-start">
              <div>
                <p className="text-sm text-muted-foreground font-headline">{category?.name} / Test {testId} / Question {currentQuestionIndex + 1} of {questionSet.length}</p>
                <CardTitle className="text-2xl mt-2 font-body">{currentQuestion.question}</CardTitle>
              </div>
              <Button variant="ghost" size="icon" onClick={handleTextToSpeech} disabled={isSpeaking}>
                {isSpeaking ? <Volume2 className="animate-pulse text-accent" /> : <Speaker />}
                <span className="sr-only">Read question</span>
              </Button>
            </div>
          </CardHeader>
          <CardContent className="min-h-[15rem]">
            {currentQuestion.type === 'mcq' && currentQuestion.options && (
              <RadioGroup value={currentAnswer} onValueChange={handleAnswerChange} className="space-y-4">
                {currentQuestion.options.map((option, index) => (
                  <div key={index} className="flex items-center space-x-3 p-3 rounded-lg border border-transparent has-[:checked]:border-accent has-[:checked]:bg-accent/10 transition-colors">
                    <RadioGroupItem value={option} id={`option-${index}`} />
                    <Label htmlFor={`option-${index}`} className="text-base font-normal cursor-pointer flex-grow">{option}</Label>
                  </div>
                ))}
              </RadioGroup>
            )}
            {currentQuestion.type === 'subjective' && (
              <div className="relative">
                <Textarea
                  value={currentAnswer}
                  onChange={(e) => handleAnswerChange(e.target.value)}
                  placeholder="Type or speak your answer..."
                  rows={6}
                  className="pr-12"
                />
                <Button variant="ghost" size="icon" className="absolute bottom-2 right-2" onClick={handleSpeechToText} disabled={isRecognizing}>
                  {isRecognizing ? <Mic className="text-destructive animate-pulse" /> : <Mic />}
                  <span className="sr-only">Record answer</span>
                </Button>
              </div>
            )}
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button variant="outline" onClick={goToPrev} disabled={currentQuestionIndex === 0}>
              <ArrowLeft className="mr-2 h-4 w-4" /> Previous
            </Button>
            {currentQuestionIndex === questionSet.length - 1 ? (
              <Button onClick={handleFinish} className="bg-accent hover:bg-accent/90 text-accent-foreground">
                Finish
              </Button>
            ) : (
              <Button onClick={goToNext}>
                Next <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            )}
          </CardFooter>
        </Card>
      </div>

       <AlertDialog open={showExitConfirm} onOpenChange={setShowExitConfirm}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you sure you want to exit?</AlertDialogTitle>
            <AlertDialogDescription>
              Your progress for this test will not be saved if you exit now.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <Button variant="ghost" onClick={() => setShowExitConfirm(false)}>Cancel</Button>
            <Button variant="destructive" onClick={confirmGoBack}>Exit Test</Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}
