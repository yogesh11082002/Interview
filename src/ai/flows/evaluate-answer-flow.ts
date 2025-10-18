
'use server';

/**
 * @fileOverview Defines a Genkit flow for evaluating a user's subjective interview answer
 * against the correct answer and providing constructive feedback.
 */

import { ai } from '@/ai/genkit';
import { z } from 'zod';

// Define the input schema for the evaluation flow
const EvaluateAnswerInputSchema = z.object({
  userAnswer: z.string().describe("The user's submitted answer to the subjective question."),
  correctAnswer: z.string().describe('The model or correct answer for the subjective question.'),
});
export type EvaluateAnswerInput = z.infer<typeof EvaluateAnswerInputSchema>;

// Define the output schema for the evaluation flow
const EvaluateAnswerOutputSchema = z.object({
  grade: z.number().min(0).max(10).describe('A numerical grade from 0 to 10 for the user\'s answer.'),
  feedback: z.string().describe('Constructive feedback explaining the grade and suggesting improvements.'),
  keyPointsCovered: z.string().describe('A summary of the key concepts the user correctly identified.'),
  areasForImprovement: z.string().describe('A summary of key concepts the user missed or explained incorrectly.'),
});
export type EvaluateAnswerOutput = z.infer<typeof EvaluateAnswerOutputSchema>;

// Define the prompt for the AI model
const evaluateAnswerPrompt = ai.definePrompt({
  name: 'evaluateAnswerPrompt',
  input: { schema: EvaluateAnswerInputSchema },
  output: { schema: EvaluateAnswerOutputSchema },
  prompt: `You are an expert technical interviewer. Your task is to evaluate a user's answer to a subjective interview question based on the provided correct answer.

Analyze the user's answer for accuracy, completeness, and clarity.

- **Grade**: Provide a numerical grade from 0 (completely wrong) to 10 (perfect).
- **Key Points Covered**: Concisely list the key concepts from the correct answer that the user successfully mentioned.
- **Areas for Improvement**: Concisely list the key concepts the user missed or got wrong.
- **Feedback**: Provide detailed, constructive feedback. Explain why the grade was given. If the user's answer is good, praise them and suggest how it could be even better. If it's incorrect, gently guide them toward the right concepts without being discouraging.

Correct Answer:
"""
{{{correctAnswer}}}
"""

User's Answer:
"""
{{{userAnswer}}}
"""
`,
});

// Define the Genkit flow
const evaluateAnswerFlow = ai.defineFlow(
  {
    name: 'evaluateAnswerFlow',
    inputSchema: EvaluateAnswerInputSchema,
    outputSchema: EvaluateAnswerOutputSchema,
  },
  async (input) => {
    const { output } = await evaluateAnswerPrompt(input);
    if (!output) {
      throw new Error('The AI model did not return an evaluation.');
    }
    return output;
  }
);

// Export a wrapper function to be called from the client
export async function evaluateAnswer(input: EvaluateAnswerInput): Promise<EvaluateAnswerOutput> {
  return evaluateAnswerFlow(input);
}
