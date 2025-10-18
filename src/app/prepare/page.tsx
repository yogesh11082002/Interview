'use client';

import Link from 'next/link';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { categories, type Category } from '@/lib/categories';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, Loader2 } from 'lucide-react';
import { motion } from 'framer-motion';
import { useUser } from '@/firebase';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

const cardHover = {
  hover: {
    y: -8,
    scale: 1.02,
    boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
    transition: {
      type: 'spring',
      stiffness: 300,
    },
  },
};

export default function PreparePage() {
  const { user, isUserLoading } = useUser();
  const router = useRouter();

  useEffect(() => {
    if (!isUserLoading && !user) {
      router.push('/login');
    }
  }, [user, isUserLoading, router]);

  if (isUserLoading || !user) {
    return (
      <div className="flex h-screen items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin" />
      </div>
    );
  }
  
  return (
    <div className="container mx-auto px-4 md:px-6 py-12">
      <motion.div 
        className="text-center mb-12"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl md:text-5xl font-bold font-headline">Preparation Tracks</h1>
        <p className="text-lg md:text-xl text-muted-foreground mt-4 max-w-2xl mx-auto">
          Select a category to start your targeted practice session. Each track is designed to test your knowledge on key concepts.
        </p>
      </motion.div>
      <motion.div 
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {categories.map((category) => (
          <motion.div key={category.slug} variants={itemVariants}>
            <CategoryCard category={category} />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

function CategoryCard({ category }: { category: Category }) {
  const image = PlaceHolderImages.find((img) => img.id === category.image);

  return (
    <motion.div whileHover="hover" variants={cardHover} className="h-full">
      <Link href={`/prepare/${category.slug}`} className="group block h-full">
        <Card className="h-full overflow-hidden transition-all duration-300 ease-in-out border-transparent group-hover:border-accent group-hover:shadow-xl">
          <CardHeader className="p-0">
            {image && (
              <div className="aspect-video relative overflow-hidden">
                <Image
                  src={image.imageUrl}
                  alt={category.name}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  data-ai-hint={image.imageHint}
                />
              </div>
            )}
          </CardHeader>
          <CardContent className="p-6">
            <CardTitle className="font-headline text-2xl mb-2">{category.name}</CardTitle>
            <CardDescription>{category.description}</CardDescription>
            <div className="flex items-center text-accent font-semibold mt-4">
              Start Practice <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </div>
          </CardContent>
        </Card>
      </Link>
    </motion.div>
  );
}
