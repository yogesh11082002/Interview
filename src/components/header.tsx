'use client';

import Link from 'next/link';
import { StepForward, LogOut, Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useUser, useAuth } from '@/firebase';
import { signOut } from 'firebase/auth';
import { useRouter } from 'next/navigation';
import { Sheet, SheetContent, SheetTrigger, SheetClose } from '@/components/ui/sheet';
import { useState, useEffect } from 'react';
import { Skeleton } from '@/components/ui/skeleton';

export function Header() {
  const { user, isUserLoading } = useUser();
  const auth = useAuth();
  const router = useRouter();
  const [isSheetOpen, setIsSheetOpen] = useState(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      router.push('/');
    } catch (error) {
      console.error('Logout failed:', error);
    }
  };

  const navLinks = (
    <>
      {user && (
        <>
          <Link href="/prepare" className="transition-colors hover:text-foreground/80 text-foreground/60" onClick={() => setIsSheetOpen(false)}>
            Prepare
          </Link>
          <Link href="/mock-interview" className="transition-colors hover:text-foreground/80 text-foreground/60" onClick={() => setIsSheetOpen(false)}>
            Mock Interview
          </Link>
          <Link href="/review" className="transition-colors hover:text-foreground/80 text-foreground/60" onClick={() => setIsSheetOpen(false)}>
            Review
          </Link>
        </>
      )}
    </>
  );

  const authButtons = (
    <>
      {isUserLoading || !isClient ? (
        <Skeleton className="h-10 w-24" />
      ) : user ? (
        <Button onClick={handleLogout} variant="ghost">
          <LogOut className="mr-2 h-4 w-4" />
          Logout
        </Button>
      ) : (
        <div className="flex items-center space-x-2">
          <Button variant="ghost" asChild>
            <Link href="/login">Login</Link>
          </Button>
          <Button asChild>
            <Link href="/signup">Sign Up</Link>
          </Button>
        </div>
      )}
    </>
  );

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <Link href="/" className="mr-6 flex items-center space-x-2">
          <StepForward className="h-6 w-6 text-accent" />
          <span className="font-bold font-headline text-lg">NextStep</span>
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
          {isClient && navLinks}
        </nav>

        <div className="flex flex-1 items-center justify-end space-x-2">
          {/* Desktop Auth Buttons */}
          <div className="hidden md:flex">
            {authButtons}
          </div>

          {/* Mobile Navigation & Auth */}
          <div className="md:hidden">
            {isClient && (
              <div className="flex items-center gap-2">
                {!user && !isUserLoading && (
                    <Button asChild size="sm">
                        <Link href="/login">Get Started</Link>
                    </Button>
                )}
                <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
                  <SheetTrigger asChild>
                    <Button variant="ghost" size="icon">
                      <Menu />
                      <span className="sr-only">Open menu</span>
                    </Button>
                  </SheetTrigger>
                  <SheetContent side="right">
                    <nav className="flex flex-col space-y-4 mt-8">
                      {navLinks}
                      <div className="border-t pt-4">
                        {user ? (
                            <Button onClick={() => { handleLogout(); setIsSheetOpen(false); }} variant="ghost" className="w-full justify-start">
                              <LogOut className="mr-2 h-4 w-4" />
                              Logout
                            </Button>
                        ) : (
                          <div className="space-y-2">
                            <SheetClose asChild>
                              <Link href="/login" className="w-full">
                                <Button variant="ghost" className="w-full justify-start">Login</Button>
                              </Link>
                            </SheetClose>
                            <SheetClose asChild>
                              <Link href="/signup" className="w-full">
                                <Button className="w-full justify-start">Sign Up</Button>
                              </Link>
                            </SheetClose>
                          </div>
                        )}
                      </div>
                    </nav>
                  </SheetContent>
                </Sheet>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
