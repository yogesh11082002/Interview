
'use client';

import { useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { FileText, Trash2, Loader2 } from 'lucide-react';
import Link from 'next/link';
import { useUser, useFirestore, useCollection, useMemoFirebase } from '@/firebase';
import { useRouter } from 'next/navigation';
import { collection, query, orderBy, getDocs, writeBatch } from 'firebase/firestore';
import { addDocumentNonBlocking } from '@/firebase/non-blocking-updates';

type Result = {
  id: string;
  categorySlug: string;
  categoryName?: string;
  testId: string;
  date: string;
};

export default function ReviewPage() {
  const { user, isUserLoading } = useUser();
  const firestore = useFirestore();
  const router = useRouter();

  const progressCollRef = useMemoFirebase(() => {
    if (!user) return null;
    return collection(firestore, `users/${user.uid}/progress`);
  }, [firestore, user]);

  const progressQuery = useMemoFirebase(() => {
    if (!progressCollRef) return null;
    return query(progressCollRef, orderBy('createdAt', 'desc'));
  }, [progressCollRef]);

  const { data: results, isLoading: isResultsLoading } = useCollection<Result>(progressQuery);

  const clearHistory = async () => {
    if (!progressCollRef) return;
    const batch = writeBatch(firestore);
    const snapshot = await getDocs(progressCollRef);
    snapshot.docs.forEach(doc => {
        batch.delete(doc.ref);
    });
    // This is a destructive action, so we use await here to ensure it completes.
    // In a real app, you might want to show a loading state.
    await batch.commit();
  };
  
  useEffect(() => {
    if (!isUserLoading && !user) {
      router.push('/login');
    }
  }, [user, isUserLoading, router]);

  if (isUserLoading || isResultsLoading) {
    return (
      <div className="flex h-screen items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin" />
      </div>
    );
  }

  if (!results || results.length === 0) {
    return (
      <div className="container mx-auto py-12 px-4 md:px-6 text-center">
        <FileText className="mx-auto h-12 w-12 text-muted-foreground" />
        <h1 className="text-2xl font-bold mt-4">No History Found</h1>
        <p className="text-muted-foreground mt-2">You haven't completed any practice sessions yet.</p>
        <Link href="/prepare" className="mt-6">
          <Button>Start Preparing</Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto py-12 px-4 md:px-6">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-headline font-bold">Your Review History</h1>
          <p className="text-muted-foreground">Review your past practice sessions and track your progress.</p>
        </div>
        <Button variant="destructive" onClick={clearHistory}>
          <Trash2 className="mr-2 h-4 w-4" /> Clear History
        </Button>
      </div>

      <div className="space-y-4">
        {results.map((result) => (
          <Card key={result.id}>
            <div className="flex justify-between items-center p-6">
              <div>
                <h2 className="text-xl font-headline">{result.categoryName || result.categorySlug} - Test {result.testId}</h2>
                <p className="text-sm text-muted-foreground">
                  Completed on: {new Date(result.date).toLocaleDateString()}
                </p>
              </div>
              <Link href={`/prepare/${result.categorySlug}/result?session=${result.id}`}>
                <Button variant="outline" size="sm">
                  View Details
                </Button>
              </Link>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}

    