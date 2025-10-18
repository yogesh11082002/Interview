
'use client';

import { useState, useEffect } from 'react';
import { useRouter, useParams } from 'next/navigation';
import { categories } from '@/lib/categories';
import { useUser } from '@/firebase';
import { Loader2, BookOpen } from 'lucide-react';
import Link from 'next/link';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

interface TestInfo {
  id: number;
  difficulty: string;
  questionCount: number;
}

const testTiers: TestInfo[] = [
  { id: 1, difficulty: 'Easy', questionCount: 5 },
  { id: 2, difficulty: 'Easy-Medium', questionCount: 10 },
  { id: 3, difficulty: 'Medium', questionCount: 15 },
  { id: 4, difficulty: 'Medium', questionCount: 20 },
  { id: 5, difficulty: 'Medium-Hard', questionCount: 25 },
  { id: 6, difficulty: 'Hard', questionCount: 30 },
  { id: 7, difficulty: 'Hard', questionCount: 35 },
  { id: 8, difficulty: 'Very Hard', questionCount: 40 },
  { id: 9, difficulty: 'Expert', questionCount: 45 },
  { id: 10, difficulty: 'Expert', questionCount: 50 },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
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

export default function CategoryTestsPage() {
  const router = useRouter();
  const params = useParams();
  const categorySlug = Array.isArray(params.category) ? params.category[0] : params.category;
  const { user, isUserLoading } = useUser();
  const [category, setCategory] = useState<{ name: string; slug: string } | null>(null);

  useEffect(() => {
    if (!isUserLoading && !user) {
      router.push('/login');
    }
  }, [user, isUserLoading, router]);

  useEffect(() => {
    if (categorySlug) {
      const foundCategory = categories.find((c) => c.slug === categorySlug);
      if (foundCategory) {
        setCategory(foundCategory);
      } else {
        router.push('/prepare');
      }
    }
  }, [categorySlug, router]);

  if (isUserLoading || !user || !category) {
    return (
      <div className="flex h-screen items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin" />
      </div>
    );
  }

  return (
    <div className="container mx-auto py-12 px-4 md:px-6">
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h1 className="text-4xl md:text-5xl font-bold font-headline">{category.name} Tests</h1>
        <p className="text-lg md:text-xl text-muted-foreground mt-4 max-w-3xl mx-auto">
          Select a test to begin. The difficulty and number of questions increase with each test level.
        </p>
      </motion.div>

      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {testTiers.map((test) => (
          <motion.div key={test.id} variants={itemVariants}>
            <Card className="h-full flex flex-col">
              <CardHeader>
                <div className="flex justify-between items-center">
                  <CardTitle className="font-headline text-2xl">Test {test.id}</CardTitle>
                  <BookOpen className="h-6 w-6 text-accent" />
                </div>
                <CardDescription>{test.difficulty}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-muted-foreground">{test.questionCount} Questions</p>
              </CardContent>
              <div className="p-6 pt-0">
                <Link href={`/prepare/${category.slug}/${test.id}`}>
                  <Button className="w-full">Start Test</Button>
                </Link>
              </div>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

    