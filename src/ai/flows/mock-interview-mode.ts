
'use server';

/**
 * @fileOverview This file defines a Genkit flow for simulating a mock interview experience.
 *
 * The flow uses an AI-generated voice to ask interview questions, providing users with a realistic practice environment.
 * It exports the `startMockInterview` function to initiate the mock interview, along with its input and output types.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';
import wav from 'wav';
import { categories } from '@/lib/categories';

// Dynamically create the enum from the categories library
const categoryNames = categories.map(c => c.name) as [string, ...string[]];
const InterviewCategorySchema = z.enum(categoryNames);

const MockInterviewInputSchema = z.object({
  category: InterviewCategorySchema.describe('The category of interview questions.'),
});

export type MockInterviewInput = z.infer<typeof MockInterviewInputSchema>;

const MockInterviewOutputSchema = z.object({
  question: z.string().describe('The interview question that was generated and spoken.'),
  answer: z.string().describe('The correct answer to the generated question.'),
  audioDataUri: z.string().describe('The audio data URI containing the interview question.'),
});

export type MockInterviewOutput = z.infer<typeof MockInterviewOutputSchema>;

const toWav = async (pcmData: Buffer, channels = 1, rate = 24000, sampleWidth = 2): Promise<string> => {
  return new Promise((resolve, reject) => {
    const writer = new wav.Writer({
      channels,
      sampleRate: rate,
      bitDepth: sampleWidth * 8,
    });

    const bufs: any[] = [];
    writer.on('error', reject);
    writer.on('data', function (d) {
      bufs.push(d);
    });
    writer.on('end', function () {
      resolve(Buffer.concat(bufs).toString('base64'));
    });

    writer.write(pcmData);
    writer.end();
  });
};

const GeneratedQuestionSchema = z.object({
    question: z.string().describe('The generated interview question.'),
    answer: z.string().describe('A detailed, correct answer to the generated question.'),
});

const generateQuestionAndAnswerTool = ai.defineTool({
    name: 'generateQuestionAndAnswer',
    description: 'Generates a single interview question and its corresponding answer for a given category.',
    inputSchema: z.object({
      category: InterviewCategorySchema.describe('The category of interview questions to generate.'),
    }),
    outputSchema: GeneratedQuestionSchema,
  }, async (input) => {
    const { category } = input;
    const { output } = await ai.generate({
      prompt: `Generate a single, relevant interview question and a detailed, correct answer for the technical category: ${category}.`,
      output: { schema: GeneratedQuestionSchema },
    });
    return output!;
  });
  

const mockInterviewPrompt = ai.definePrompt({
  name: 'mockInterviewPrompt',
  tools: [generateQuestionAndAnswerTool],
  input: {schema: MockInterviewInputSchema},
  prompt: `You are an AI interviewer. Use the generateQuestionAndAnswerTool to generate a question and answer based on the specified category.

Category: {{{category}}}

Once you have the question, convert it into audio using the tts model, and present the audio data URI.
`,
});

const mockInterviewFlow = ai.defineFlow(
  {
    name: 'mockInterviewFlow',
    inputSchema: MockInterviewInputSchema,
    outputSchema: MockInterviewOutputSchema,
  },
  async input => {
    const {category} = input;

    // Call the tool to get a question and answer.
    const { question, answer } = await generateQuestionAndAnswerTool({
      category: category,
    });

    const {media} = await ai.generate({
      model: 'googleai/gemini-2.5-flash-preview-tts',
      config: {
        responseModalities: ['AUDIO'],
        speechConfig: {
          voiceConfig: {
            prebuiltVoiceConfig: {voiceName: 'Algenib'},
          },
        },
      },
      prompt: `Read the following question aloud: ${question}`,
    });

    if (!media) {
      throw new Error('No media returned from TTS model.');
    }

    const audioBuffer = Buffer.from(
      media.url.substring(media.url.indexOf(',') + 1),
      'base64'
    );

    const audioDataUri = 'data:audio/wav;base64,' + (await toWav(audioBuffer));

    return { question, answer, audioDataUri };
  }
);

export async function startMockInterview(input: MockInterviewInput): Promise<MockInterviewOutput> {
  return mockInterviewFlow(input);
}
