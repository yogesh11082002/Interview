
'use client';

import { useState, useRef, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { categories } from '@/lib/categories';
import { startMockInterview, type MockInterviewInput, type MockInterviewOutput } from '@/ai/flows/mock-interview-mode';
import { useToast } from '@/hooks/use-toast';
import { useUser } from '@/firebase';
import { Bot, Loader2, Mic, Play, Square, ChevronsUpDown, ListChecks, Headphones, BookOpen, UserCheck } from 'lucide-react';
import { motion } from 'framer-motion';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';

const containerVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

export default function MockInterviewPage() {
  const [category, setCategory] = useState<string>('');
  const [isLoading, setIsLoading] = useState(false);
  const [interviewData, setInterviewData] = useState<MockInterviewOutput | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isAnswerOpen, setIsAnswerOpen] = useState(false);
  const { toast } = useToast();
  
  const audioRef = useRef<HTMLAudioElement | null>(null);
  
  const { user, isUserLoading } = useUser();
  const router = useRouter();

  useEffect(() => {
    if (!isUserLoading && !user) {
      router.push('/login');
    }
  }, [user, isUserLoading, router]);

  useEffect(() => {
    // Cleanup audio element on component unmount
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  const handleStartInterview = async () => {
    if (!category) {
      toast({ title: 'Please select a category.', variant: 'destructive' });
      return;
    }

    setIsLoading(true);
    setInterviewData(null);
    setIsPlaying(false);
    setIsAnswerOpen(false);
    if(audioRef.current) {
      audioRef.current.pause();
    }

    try {
      const input: MockInterviewInput = { category: category as MockInterviewInput['category'] };
      const result = await startMockInterview(input);
      
      setInterviewData(result);
      
      const audio = new Audio(result.audioDataUri);
      audioRef.current = audio;
      audio.play();
      audio.onplay = () => setIsPlaying(true);
      audio.onended = () => setIsPlaying(false);
      audio.onerror = () => {
        setIsPlaying(false);
        toast({ title: 'Error playing audio.', variant: 'destructive' });
      };

    } catch (error) {
      console.error(error);
      toast({ title: 'Failed to start interview.', description: 'The AI model might be unavailable. Please try again later.', variant: 'destructive' });
    } finally {
      setIsLoading(false);
    }
  };

  const togglePlayback = () => {
    const audio = audioRef.current;
    if (audio) {
      if (isPlaying) {
        audio.pause();
      } else {
        audio.play();
      }
    }
  }

  if (isUserLoading || !user) {
    return (
      <div className="flex h-screen items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin" />
      </div>
    );
  }


  return (
    <div className="container mx-auto py-12 px-4 md:px-6">
      <motion.div 
        className="max-w-xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <Card className="shadow-lg">
          <CardHeader className="text-center">
            <motion.div 
              variants={itemVariants} 
              className="mx-auto bg-primary text-primary-foreground rounded-full h-16 w-16 flex items-center justify-center mb-4"
            >
                <Bot size={32} />
            </motion.div>
            <motion.div variants={itemVariants}>
              <CardTitle className="text-3xl font-headline">AI Mock Interview</CardTitle>
            </motion.div>
            <motion.div variants={itemVariants}>
              <CardDescription className="pt-2">
                Practice your speaking skills with an AI interviewer. Select a category and press start.
              </CardDescription>
            </motion.div>
          </CardHeader>
          <CardContent className="space-y-6">
            <motion.div variants={itemVariants}>
              <Select onValueChange={setCategory} value={category}>
                <SelectTrigger>
                  <SelectValue placeholder="Select a category..." />
                </SelectTrigger>
                <SelectContent>
                  {categories.map((cat) => (
                    <SelectItem key={cat.slug} value={cat.name}>
                      {cat.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </motion.div>

            <motion.div variants={itemVariants}>
              <Button onClick={handleStartInterview} disabled={isLoading || !category} className="w-full" size="lg">
                {isLoading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Generating Question...
                  </>
                ) : (
                  <>
                    <Mic className="mr-2 h-4 w-4" />
                    Start / Next Question
                  </>
                )}
              </Button>
            </motion.div>
            
            {interviewData && (
              <motion.div 
                className="space-y-4"
                initial={{opacity: 0, y:10}}
                animate={{opacity: 1, y: 0}}
              >
                <div className="flex items-center justify-center p-4 border rounded-lg bg-muted/50">
                  <Button onClick={togglePlayback} size="icon" variant="ghost" disabled={isLoading}>
                      {isPlaying ? <Square className="h-6 w-6 text-accent" /> : <Play className="h-6 w-6" />}
                  </Button>
                  <div className="ml-4 text-sm text-muted-foreground">
                      {isPlaying ? "AI is speaking..." : audioRef.current?.ended ? "Question finished." : "Ready to play question."}
                  </div>
                </div>
                
                <Collapsible open={isAnswerOpen} onOpenChange={setIsAnswerOpen}>
                  <CollapsibleTrigger asChild>
                    <Button variant="outline" className="w-full">
                      <ChevronsUpDown className="mr-2 h-4 w-4" />
                      {isAnswerOpen ? 'Hide Answer' : 'Show Answer'}
                    </Button>
                  </CollapsibleTrigger>
                  <CollapsibleContent>
                    <div className="p-4 mt-2 border rounded-lg bg-background">
                      <h4 className="font-semibold mb-2">Question:</h4>
                      <p className="text-muted-foreground mb-4">{interviewData.question}</p>
                      <h4 className="font-semibold mb-2">Answer:</h4>
                      <p className="text-muted-foreground whitespace-pre-wrap">{interviewData.answer}</p>
                    </div>
                  </CollapsibleContent>
                </Collapsible>

              </motion.div>
            )}
          </CardContent>
        </Card>
      </motion.div>

      <motion.section 
        className="max-w-4xl mx-auto mt-20"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-headline">How It Works</h2>
            <p className="text-md md:text-lg text-muted-foreground mt-2">A simple guide to get you started.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <motion.div variants={itemVariants}>
                <div className="mx-auto bg-accent text-accent-foreground rounded-full h-12 w-12 flex items-center justify-center mb-4">
                    <ListChecks size={24} />
                </div>
                <h3 className="font-headline text-lg font-semibold">1. Select Category</h3>
                <p className="text-sm text-muted-foreground">Choose the topic you want to practice from the dropdown menu.</p>
            </motion.div>
            <motion.div variants={itemVariants}>
                <div className="mx-auto bg-accent text-accent-foreground rounded-full h-12 w-12 flex items-center justify-center mb-4">
                    <Mic size={24} />
                </div>
                <h3 className="font-headline text-lg font-semibold">2. Start Interview</h3>
                <p className="text-sm text-muted-foreground">Click the "Start" button to have our AI generate and ask you a question.</p>
            </motion.div>
            <motion.div variants={itemVariants}>
                <div className="mx-auto bg-accent text-accent-foreground rounded-full h-12 w-12 flex items-center justify-center mb-4">
                    <Headphones size={24} />
                </div>
                <h3 className="font-headline text-lg font-semibold">3. Listen & Respond</h3>
                <p className="text-sm text-muted-foreground">Listen to the question carefully. Think about your answer before responding.</p>
            </motion.div>
            <motion.div variants={itemVariants}>
                <div className="mx-auto bg-accent text-accent-foreground rounded-full h-12 w-12 flex items-center justify-center mb-4">
                    <BookOpen size={24} />
                </div>
                <h3 className="font-headline text-lg font-semibold">4. Review Answer</h3>
                <p className="text-sm text-muted-foreground">After the question, click "Show Answer" to compare your response with the correct one.</p>
            </motion.div>
        </div>
      </motion.section>
    </div>
  );
}
