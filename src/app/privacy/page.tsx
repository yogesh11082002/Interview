'use client';

import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

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
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

export default function PrivacyPolicyPage() {
  return (
    <motion.div 
        className="container mx-auto py-12 px-4 md:px-6"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
    >
      <motion.div className="max-w-3xl mx-auto" variants={itemVariants}>
        <Card>
          <CardHeader>
            <CardTitle className="text-3xl font-headline">Privacy Policy</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6 text-muted-foreground">
            <p><strong>Last Updated: {new Date().toLocaleDateString()}</strong></p>
            
            <p>
              Welcome to NextStep. We are committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our application.
            </p>

            <div className="space-y-2">
              <h2 className="text-xl font-semibold text-foreground font-headline">1. Information We Collect</h2>
              <p>
                We may collect personal information such as your name, email address, and performance data from mock interviews and practice sessions. We also collect non-personal information, such as browser type and usage patterns, to improve our services.
              </p>
            </div>

            <div className="space-y-2">
              <h2 className="text-xl font-semibold text-foreground font-headline">2. How We Use Your Information</h2>
              <p>
                The information we collect is used to:
              </p>
              <ul className="list-disc list-inside pl-4">
                <li>Provide, operate, and maintain our services.</li>
                <li>Improve, personalize, and expand our services.</li>
                <li>Understand and analyze how you use our services.</li>
                <li>Communicate with you, either directly or through one of our partners.</li>
                <li>Process your transactions and manage your results.</li>
              </ul>
            </div>

            <div className="space-y-2">
              <h2 className="text-xl font-semibold text-foreground font-headline">3. Data Storage and Security</h2>
              <p>
                Your practice session results are stored locally on your device using browser `localStorage`. We do not transmit this data to our servers unless you are logged into an account. We take reasonable measures to protect your information, but no security system is impenetrable.
              </p>
            </div>
            
            <div className="space-y-2">
              <h2 className="text-xl font-semibold text-foreground font-headline">4. Third-Party Services</h2>
              <p>
                Our AI features are powered by third-party services like Google's Gemini. Your interactions with these features may be subject to their respective privacy policies. We are not responsible for the privacy practices of these third parties.
              </p>
            </div>

            <div className="space-y-2">
              <h2 className="text-xl font-semibold text-foreground font-headline">5. Changes to This Policy</h2>
              <p>
                We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new policy on this page. You are advised to review this Privacy Policy periodically for any changes.
              </p>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </motion.div>
  );
}
