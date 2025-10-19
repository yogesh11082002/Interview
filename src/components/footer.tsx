import Link from 'next/link';
import { StepForward, Star } from 'lucide-react';
import { motion } from 'framer-motion';

export function Footer() {
  return (
    <footer className="border-t bg-card">
      <div className="container py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4 md:col-span-2">
            <Link href="/" className="flex items-center space-x-2">
              <StepForward className="h-6 w-6 text-accent" />
              <span className="font-bold font-headline text-lg">NextStep</span>
            </Link>
            <p className="text-sm text-muted-foreground max-w-md">AI-powered interview prep for developers. Practice with real questions, get instant feedback, and ace your next interview.</p>
            <div className="flex items-center space-x-1 text-sm text-yellow-400">
              <Star className="w-4 h-4 fill-current" />
              <Star className="w-4 h-4 fill-current" />
              <Star className="w-4 h-4 fill-current" />
              <Star className="w-4 h-4 fill-current" />
              <Star className="w-4 h-4 fill-current" />
              <span className="text-muted-foreground ml-2">Loved by creators</span>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-8 md:col-span-2">
            <div>
              <h3 className="font-headline font-semibold mb-4">Quick Links</h3>
              <nav className="flex flex-col space-y-2">
                <Link href="/prepare" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Prepare</Link>
                <Link href="/mock-interview" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Mock Interview</Link>
                <Link href="/review" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Review History</Link>
              </nav>
            </div>
            <div>
              <h3 className="font-headline font-semibold mb-4">Company</h3>
              <nav className="flex flex-col space-y-2">
                <Link href="/about" className="text-sm text-muted-foreground hover:text-foreground transition-colors">About Us</Link>
                <Link href="/privacy" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Privacy Policy</Link>
                <Link href="/contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Contact</Link>
              </nav>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t pt-4 text-center">
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} NextStep. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
