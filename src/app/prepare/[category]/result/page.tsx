
'use client';

import { useEffect, useState, Suspense } from 'react';
import { useRouter, useSearchParams, useParams } from 'next/navigation';
import { type Question } from '@/lib/questions';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { CheckCircle, XCircle, Loader2, Sparkles } from 'lucide-react';
import Link from 'next/link';
import { useUser, useFirestore, useMemoFirebase } from '@/firebase';
import { doc, getDoc } from 'firebase/firestore';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogClose,
} from "@/components/ui/dialog"
import { evaluateAnswer, type EvaluateAnswerOutput } from '@/ai/flows/evaluate-answer-flow';
import { useToast } from '@/hooks/use-toast';

type Result = {
  id: string;
  categorySlug: string;
  categoryName?: string;
  testId: string;
  userAnswers: { questionId: number; answer: string }[];
  questions: Question[];
  date: string;
};

function ResultPageComponent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const params = useParams();
  const { user, isUserLoading } = useUser();
  const firestore = useFirestore();
  const { toast } = useToast();
  
  const [result, setResult] = useState<Result | null>(null);
  const [score, setScore] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [isEvaluating, setIsEvaluating] = useState(false);
  const [evaluationResult, setEvaluationResult] = useState<EvaluateAnswerOutput | null>(null);
  const [isFeedbackModalOpen, setIsFeedbackModalOpen] = useState(false);

  const sessionId = searchParams.get('session');
  
  const resultDocRef = useMemoFirebase(() => {
    if (!user || !sessionId) return null;
    return doc(firestore, `users/${user.uid}/progress`, sessionId);
  }, [firestore, user, sessionId]);

  useEffect(() => {
    if (isUserLoading) return;
    if (!user) {
      router.push('/login');
      return;
    }
    if (!sessionId) {
      router.push('/review');
      return;
    }

    const fetchResult = async () => {
      setIsLoading(true);
      if (!resultDocRef) return;
      
      try {
        const docSnap = await getDoc(resultDocRef);

        if (docSnap.exists()) {
          const data = docSnap.data() as any;
          const parsedResult: Result = {
              id: docSnap.id,
              categorySlug: data.categorySlug,
              categoryName: data.categoryName,
              testId: data.testId,
              userAnswers: data.userAnswers,
              questions: data.questions,
              date: data.date,
          };
          setResult(parsedResult);

          let correctAnswers = 0;
          const mcqQuestions = parsedResult.questions.filter(q => q.type === 'mcq');
          mcqQuestions.forEach(q => {
            const userAnswer = parsedResult.userAnswers.find(ua => ua.questionId === q.id)?.answer || "";
            if (userAnswer.toLowerCase() === q.answer.toLowerCase()) {
              correctAnswers++;
            }
          });
          
          setScore(mcqQuestions.length > 0 ? (correctAnswers / mcqQuestions.length) * 100 : 0);
        } else {
          console.error("No such document!");
          toast({ title: 'Result not found', description: 'Could not find the specified session.', variant: 'destructive' });
          router.push('/review');
        }
      } catch (error) {
        console.error("Error fetching result: ", error);
        toast({ title: 'Error loading result', description: 'There was a problem fetching your session data.', variant: 'destructive' });
        router.push('/review');
      } finally {
        setIsLoading(false);
      }
    };

    fetchResult();
  }, [resultDocRef, user, isUserLoading, sessionId, router, toast]);

  const handleEvaluateAnswer = async (userAnswer: string, correctAnswer: string) => {
    setIsEvaluating(true);
    setEvaluationResult(null);
    setIsFeedbackModalOpen(true);
    try {
      const evaluation = await evaluateAnswer({ userAnswer, correctAnswer });
      setEvaluationResult(evaluation);
    } catch (error) {
      console.error("Evaluation error:", error);
      toast({
        title: "Evaluation Failed",
        description: "Could not get feedback from the AI. Please try again.",
        variant: "destructive",
      });
      setIsFeedbackModalOpen(false);
    } finally {
      setIsEvaluating(false);
    }
  };


  if (isLoading || isUserLoading) {
    return (
        <div className="flex h-screen items-center justify-center">
            <Loader2 className="h-8 w-8 animate-spin" />
        </div>
    );
  }

  if (!result) {
    return <div className="container mx-auto py-12">Could not load results. Please return to the review page.</div>;
  }

  const mcqQuestionsCount = result.questions.filter(q => q.type === 'mcq').length;
  const subjectiveQuestions = result.questions.filter(q => q.type === 'subjective');
  const correctAnswersCount = result.userAnswers.filter((ua) => {
      const question = result.questions.find(q => q.id === ua.questionId);
      return question && question.type === 'mcq' && (ua.answer || "").toLowerCase() === question.answer.toLowerCase();
  }).length;

  return (
    <>
    <div className="container mx-auto py-12 px-4 md:px-6">
      <div className="max-w-3xl mx-auto">
        <Card className="text-center shadow-lg">
          <CardHeader>
            <CardTitle className="text-3xl font-headline">Results for {result.categoryName} - Test {result.testId}</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6 pt-6">
            <div className="flex justify-around items-center">
                <div>
                    <p className="text-5xl font-bold font-headline">{Math.round(score)}%</p>
                    <p className="text-muted-foreground">MCQ Score</p>
                </div>
                 <div>
                    <p className="text-5xl font-bold font-headline">{correctAnswersCount}<span className="text-2xl text-muted-foreground">/{mcqQuestionsCount}</span></p>
                    <p className="text-muted-foreground">Correct MCQs</p>
                </div>
                 <div>
                    <p className="text-5xl font-bold font-headline">{result.questions.length}</p>
                    <p className="text-muted-foreground">Total Questions</p>
                </div>
            </div>
            <p className="text-muted-foreground pt-4">For subjective questions, use the AI assistant to get feedback on your answer.</p>
            <div className="flex flex-wrap gap-4 justify-center">
                <Link href={`/prepare/${result.categorySlug}/${result.testId}`}>
                    <Button variant="outline">Try Again</Button>
                </Link>
                <Link href={`/prepare/${result.categorySlug}`}>
                    <Button>More Tests</Button>
                </Link>
                <Link href="/review">
                    <Button variant="outline">Review History</Button>
                </Link>
            </div>
          </CardContent>
        </Card>

        {subjectiveQuestions.length > 0 && (
            <Card className="mt-8">
                <CardHeader>
                    <CardTitle className="font-headline text-2xl">Subjective Questions Review</CardTitle>
                    <CardDescription>Get AI-powered feedback on your written answers.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                    {subjectiveQuestions.map((question) => {
                        const userAnswer = result.userAnswers.find(ua => ua.questionId === question.id)?.answer || 'No answer provided.';
                        return (
                            <div key={question.id} className="p-4 border rounded-lg">
                                <p className="font-semibold">{question.question}</p>
                                <p className="text-muted-foreground mt-2 italic">Your answer: "{userAnswer}"</p>
                                <Button 
                                    variant="outline" 
                                    size="sm" 
                                    className="mt-4"
                                    onClick={() => handleEvaluateAnswer(userAnswer, question.answer)}
                                >
                                    <Sparkles className="mr-2 h-4 w-4" />
                                    Get AI Feedback
                                </Button>
                            </div>
                        )
                    })}
                </CardContent>
            </Card>
        )}


        <h2 className="text-2xl font-headline mt-12 mb-4">All Answers Review</h2>
        <Accordion type="single" collapsible className="w-full">
            {result.questions.map((question, index) => {
                const userAnswerObj = result.userAnswers.find(ua => ua.questionId === question.id);
                const userAnswer = userAnswerObj?.answer;
                const isCorrect = question.type === 'mcq' ? (userAnswer || "").toLowerCase() === question.answer.toLowerCase() : undefined;
                return (
                    <AccordionItem value={`item-${index}`} key={question.id}>
                        <AccordionTrigger className="text-left hover:no-underline">
                            <div className="flex items-center">
                                {isCorrect === true && <CheckCircle className="h-5 w-5 text-green-500 mr-3 shrink-0" />}
                                {isCorrect === false && <XCircle className="h-5 w-5 text-destructive mr-3 shrink-0" />}
                                {isCorrect === undefined && <div className="h-5 w-5 mr-3 shrink-0" />}
                                <span>{index + 1}. {question.question}</span>
                            </div>
                        </AccordionTrigger>
                        <AccordionContent className="space-y-4 pl-8 border-l-2 ml-2">
                           <div>
                                <h4 className="font-semibold text-foreground/80">Your Answer:</h4>
                                <p className="text-muted-foreground">{userAnswer || 'No answer provided.'}</p>
                           </div>
                           <div>
                                <h4 className="font-semibold text-foreground/80">Correct Answer:</h4>
                                <p className="text-muted-foreground">{question.answer}</p>
                           </div>
                           {question.explanation && (
                            <div>
                                <h4 className="font-semibold text-foreground/80">Explanation:</h4>
                                <p className="text-muted-foreground">{question.explanation}</p>
                           </div>
                           )}
                           {question.type === 'subjective' && userAnswer && (
                            <Button variant="outline" size="sm" onClick={() => handleEvaluateAnswer(userAnswer, question.answer)}>
                                <Sparkles className="mr-2 h-4 w-4" />
                                Get AI Feedback
                            </Button>
                           )}
                        </AccordionContent>
                    </AccordionItem>
                )
            })}
        </Accordion>
      </div>
    </div>
    <Dialog open={isFeedbackModalOpen} onOpenChange={setIsFeedbackModalOpen}>
        <DialogContent className="sm:max-w-lg">
            <DialogHeader>
                <DialogTitle className="flex items-center">
                    <Sparkles className="mr-2 h-5 w-5 text-accent" />
                    AI Feedback
                </DialogTitle>
                <DialogDescription>
                    Here's an evaluation of your answer based on the correct one.
                </DialogDescription>
            </DialogHeader>
            <div className="py-4 space-y-4 max-h-[60vh] overflow-y-auto">
                {isEvaluating && (
                    <div className="flex items-center justify-center p-8">
                        <Loader2 className="h-8 w-8 animate-spin text-accent"/>
                        <p className="ml-4 text-muted-foreground">Evaluating...</p>
                    </div>
                )}
                {evaluationResult && (
                    <div className="space-y-4">
                         <div>
                            <h3 className="font-semibold text-lg">Your Answer Grade: {evaluationResult.grade}/10</h3>
                         </div>
                         <div>
                            <h4 className="font-semibold">Key Points Covered:</h4>
                            <p className="text-muted-foreground">{evaluationResult.keyPointsCovered}</p>
                         </div>
                         <div>
                            <h4 className="font-semibold">Areas for Improvement:</h4>
                            <p className="text-muted-foreground">{evaluationResult.areasForImprovement}</p>
                         </div>
                         <div>
                            <h4 className="font-semibold">Detailed Feedback:</h4>
                            <p className="text-muted-foreground whitespace-pre-wrap">{evaluationResult.feedback}</p>
                         </div>
                    </div>
                )}
            </div>
             <DialogClose asChild>
                <Button type="button" variant="secondary">
                    Close
                </Button>
            </DialogClose>
        </DialogContent>
    </Dialog>
    </>
  );
}

export default function ResultPage() {
    return (
        <Suspense fallback={<div className="flex h-screen items-center justify-center"><Loader2 className="h-8 w-8 animate-spin" /></div>}>
            <ResultPageComponent />
        </Suspense>
    )
}
