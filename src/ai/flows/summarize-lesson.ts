// src/ai/flows/summarize-lesson.ts
'use server';

/**
 * @fileOverview Generates a summary for a lesson.
 *
 * - summarizeLesson - A function that generates a summary for a lesson.
 * - SummarizeLessonInput - The input type for the summarizeLesson function.
 * - SummarizeLessonOutput - The return type for the summarizeLesson function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SummarizeLessonInputSchema = z.object({
  lessonContent: z
    .string()
    .describe('The content of the lesson to generate a summary for.'),
});
export type SummarizeLessonInput = z.infer<typeof SummarizeLessonInputSchema>;

const SummarizeLessonOutputSchema = z.object({
  summary: z.string().describe('The generated summary of the lesson.'),
});
export type SummarizeLessonOutput = z.infer<typeof SummarizeLessonOutputSchema>;

export async function summarizeLesson(input: SummarizeLessonInput): Promise<SummarizeLessonOutput> {
  return summarizeLessonFlow(input);
}

const prompt = ai.definePrompt({
  name: 'summarizeLessonPrompt',
  input: {schema: SummarizeLessonInputSchema},
  output: {schema: SummarizeLessonOutputSchema},
  prompt: `You are an expert educator and content summarizer. Given the following lesson content (in HTML), generate a concise and engaging summary. The summary should be written as if a teacher is introducing the key topics to a student. It must be plain text, not HTML.

Lesson Content:
{{lessonContent}}`,
});

const summarizeLessonFlow = ai.defineFlow(
  {
    name: 'summarizeLessonFlow',
    inputSchema: SummarizeLessonInputSchema,
    outputSchema: SummarizeLessonOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
