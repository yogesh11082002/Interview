
'use client';

import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Shield, Info, Database, Server, FileText } from 'lucide-react';

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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

const PolicySection = ({ icon, title, children }: { icon: React.ReactNode, title: string, children: React.ReactNode }) => (
    <motion.div variants={itemVariants} className="flex items-start space-x-4">
        <div className="flex-shrink-0 mt-1 text-accent">{icon}</div>
        <div className="space-y-2">
            <h2 className="text-xl font-semibold text-foreground font-headline">{title}</h2>
            <div className="text-muted-foreground">{children}</div>
        </div>
    </motion.div>
)

export default function PrivacyPolicyPage() {
  return (
    <motion.div 
        className="container mx-auto py-12 px-4 md:px-6"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
    >
      <motion.div className="max-w-3xl mx-auto" variants={itemVariants}>
        <Card className="shadow-lg">
          <CardHeader className="text-center border-b pb-6">
            <motion.div 
                className="mx-auto bg-primary text-primary-foreground rounded-full h-16 w-16 flex items-center justify-center mb-4"
                initial={{scale: 0}}
                animate={{scale: 1}}
                transition={{delay: 0.2, type: 'spring'}}
            >
                <Shield size={32} />
            </motion.div>
            <CardTitle className="text-3xl font-headline">Privacy Policy</CardTitle>
            <p className="text-muted-foreground pt-2">
              Last Updated: {new Date().toLocaleDateString()}
            </p>
          </CardHeader>
          <CardContent className="space-y-8 p-6 md:p-8">
            <motion.p variants={itemVariants} className="text-center text-muted-foreground">
              Welcome to NextStep. We are committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our application.
            </motion.p>
            
            <PolicySection icon={<Info size={24} />} title="1. Information We Collect">
              <p>
                We may collect personal information such as your name, email address, and performance data from mock interviews and practice sessions. We also collect non-personal information, such as browser type and usage patterns, to improve our services.
              </p>
            </PolicySection>

            <PolicySection icon={<Server size={24} />} title="2. How We Use Your Information">
              <p>
                The information we collect is used to:
              </p>
              <ul className="list-disc list-inside pl-4 space-y-1 mt-2">
                <li>Provide, operate, and maintain our services.</li>
                <li>Improve, personalize, and expand our services.</li>
                <li>Understand and analyze how you use our services.</li>
                <li>Communicate with you, either directly or through one of our partners.</li>
                <li>Process your transactions and manage your results.</li>
              </ul>
            </PolicySection>

            <PolicySection icon={<Database size={24} />} title="3. Data Storage and Security">
              <p>
                Your practice session results are stored locally on your device using browser `localStorage`. We do not transmit this data to our servers unless you are logged into an account. We take reasonable measures to protect your information, but no security system is impenetrable.
              </p>
            </PolicySection>
            
            <PolicySection icon={<FileText size={24} />} title="4. Third-Party Services">
              <p>
                Our AI features are powered by third-party services like Google's Gemini. Your interactions with these features may be subject to their respective privacy policies. We are not responsible for the privacy practices of these third parties.
              </p>
            </PolicySection>

             <PolicySection icon={<FileText size={24} />} title="5. Changes to This Policy">
              <p>
                We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new policy on this page. You are advised to review this Privacy Policy periodically for any changes.
              </p>
            </PolicySection>
          </CardContent>
        </Card>
      </motion.div>
    </motion.div>
  );
}
