'use client';

import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Users, Target, Lightbulb } from 'lucide-react';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      stiffness: 100,
    },
  },
};

export default function AboutPage() {
  return (
    <motion.div
      className="container mx-auto py-12 px-4 md:px-6"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <motion.div className="text-center mb-12" variants={itemVariants}>
        <h1 className="text-4xl md:text-5xl font-bold font-headline">About NextStep</h1>
        <p className="text-lg md:text-xl text-muted-foreground mt-4 max-w-3xl mx-auto">
          We are dedicated to helping aspiring developers bridge the gap between learning and landing their dream job in the tech industry.
        </p>
      </motion.div>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center"
        variants={containerVariants}
      >
        <motion.div variants={itemVariants}>
          <Card className="h-full">
            <CardHeader>
              <div className="mx-auto bg-primary text-primary-foreground rounded-full h-16 w-16 flex items-center justify-center mb-4">
                <Target size={32} />
              </div>
              <CardTitle className="font-headline">Our Mission</CardTitle>
            </CardHeader>
            <CardContent className="text-muted-foreground">
              Our mission is to provide the most effective and realistic interview preparation tools. We leverage AI to create a personalized practice environment that builds confidence and sharpens skills.
            </CardContent>
          </Card>
        </motion.div>

        <motion.div variants={itemVariants}>
          <Card className="h-full">
            <CardHeader>
              <div className="mx-auto bg-primary text-primary-foreground rounded-full h-16 w-16 flex items-center justify-center mb-4">
                <Lightbulb size={32} />
              </div>
              <CardTitle className="font-headline">Our Vision</CardTitle>
            </CardHeader>
            <CardContent className="text-muted-foreground">
              We envision a world where every developer has the opportunity to showcase their true potential in interviews, regardless of their background. We aim to level the playing field with accessible, high-quality prep tools.
            </CardContent>
          </Card>
        </motion.div>

        <motion.div variants={itemVariants}>
          <Card className="h-full">
            <CardHeader>
              <div className="mx-auto bg-primary text-primary-foreground rounded-full h-16 w-16 flex items-center justify-center mb-4">
                <Users size={32} />
              </div>
              <CardTitle className="font-headline">Our Team</CardTitle>
            </CardHeader>
            <CardContent className="text-muted-foreground">
              NextStep was built by a passionate team of engineers, designers, and career coaches who have experienced the highs and lows of tech interviews firsthand. We're here to share what we've learned.
            </CardContent>
          </Card>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
