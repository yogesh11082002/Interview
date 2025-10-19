'use client';

import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { categories, type Category } from '@/lib/categories';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, Check, Bot, Zap, Star } from 'lucide-react';
import { motion } from 'framer-motion';
import { useUser } from '@/firebase';

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
    scale: 1.05,
    boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
    transition: {
      type: 'spring',
      stiffness: 300,
    },
  },
};

export default function Home() {
  const { user, isUserLoading } = useUser();
  const heroImage = PlaceHolderImages.find((img) => img.id === 'hero-image');
  const featuredCategories = categories.slice(0, 8);
  const ctaLink = user ? '/prepare' : '/login';
  const ctaText = user ? 'Start Preparing Now' : 'Get Started';

  return (
    <div className="flex flex-col">
      <motion.section
        className="relative w-full py-20 md:py-32 lg:py-40"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        {heroImage && (
          <Image
            src={heroImage.imageUrl}
            alt={heroImage.description}
            fill
            priority
            className="object-cover -z-10 opacity-20 blur-sm"
            data-ai-hint={heroImage.imageHint}
          />
        )}
        <div className="container mx-auto px-4 md:px-6 text-center">
          <motion.div
            className="max-w-3xl mx-auto"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.h1
              variants={itemVariants}
              className="text-4xl md:text-5xl lg:text-6xl font-bold font-headline tracking-tighter mb-4"
            >
              Unlock Your Dream Tech Job
            </motion.h1>
            <motion.p
              variants={itemVariants}
              className="text-lg md:text-xl text-muted-foreground mb-8"
            >
              AI-powered interview prep for developers. Practice with real questions, get instant feedback, and ace your next interview.
            </motion.p>
            <motion.div variants={itemVariants}>
              <Link href={ctaLink}>
                <Button size="lg" className="font-bold">
                  {ctaText} <ArrowRight className="ml-2" />
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      <motion.section
        className="py-16 bg-background"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariants}
      >
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-bold font-headline">Features</motion.h2>
            <motion.p variants={itemVariants} className="text-md md:text-lg text-muted-foreground mt-2">
              Everything you need to be prepared for your next tech interview.
            </motion.p>
          </div>
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
          >
            <motion.div variants={itemVariants}>
              <FeatureCard
                icon={<Bot size={24} className="text-accent" />}
                title="AI Mock Interviews"
                description="Practice your speaking skills with a voice-based AI that asks you relevant questions."
              />
            </motion.div>
            <motion.div variants={itemVariants}>
              <FeatureCard
                icon={<Zap size={24} className="text-accent" />}
                title="Instant Feedback"
                description="Get immediate scores for MCQ questions and review your answers for subjective ones."
              />
            </motion.div>
            <motion.div variants={itemVariants}>
              <FeatureCard
                icon={<Check size={24} className="text-accent" />}
                title="Targeted Practice"
                description="Focus on specific roles and technologies with curated question sets for various categories."
              />
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      <motion.section
        className="py-16 bg-card/50"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={containerVariants}
      >
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-bold font-headline">Choose Your Path</motion.h2>
            <motion.p variants={itemVariants} className="text-md md:text-lg text-muted-foreground mt-2">
              Focus your preparation on specific roles and technologies.
            </motion.p>
          </div>
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
            variants={containerVariants}
          >
            {featuredCategories.map((category) => (
              <motion.div key={category.slug} variants={itemVariants}>
                <CategoryCard category={category} />
              </motion.div>
            ))}
          </motion.div>
          <motion.div
            className="text-center mt-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Link href={ctaLink}>
              <Button variant="outline" size="lg">Show All Categories</Button>
            </Link>
          </motion.div>
        </div>
      </motion.section>

      <section className="py-16">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={itemVariants}
          >
            <Star className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
            <h2 className="text-2xl font-bold font-headline mb-2">Loved by creators</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Join thousands of developers who have landed their dream jobs with NextStep.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <Card className="text-center p-6 h-full">
      <div className="mb-4 inline-block">{icon}</div>
      <CardTitle className="font-headline text-xl mb-2">{title}</CardTitle>
      <CardDescription>{description}</CardDescription>
    </Card>
  );
}

function CategoryCard({ category }: { category: Category }) {
  const { user } = useUser();
  const image = PlaceHolderImages.find((img) => img.id === category.image);
  const categoryLink = user ? `/prepare/${category.slug}` : '/login';

  return (
    <motion.div whileHover="hover" variants={cardHover} className="h-full">
      <Link href={categoryLink} className="group">
        <Card className="h-full overflow-hidden transition-shadow duration-300 ease-in-out border-transparent">
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
          </CardContent>
        </Card>
      </Link>
    </motion.div>
  );
}
