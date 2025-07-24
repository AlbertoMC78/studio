'use server';

/**
 * @fileOverview A flow for a conversational AI tutor.
 *
 * - tutorChat - A function that handles the conversational tutoring.
 * - TutorChatInput - The input type for the tutorChat function.
 * - TutorChatOutput - The return type for the tutorChat function.
 */

import { ai } from '@/ai/genkit';
import { z } from 'zod';

const MessageSchema = z.object({
  role: z.enum(['user', 'model']),
  content: z.string(),
});

const TutorChatInputSchema = z.object({
  lessonContent: z.string().describe('The full content of the current lesson.'),
  chatHistory: z.array(MessageSchema).describe('The history of the conversation so far.'),
  question: z.string().describe('The user\'s latest question.'),
});
export type TutorChatInput = z.infer<typeof TutorChatInputSchema>;

const TutorChatOutputSchema = z.object({
  response: z.string().describe('The AI tutor\'s response to the user\'s question.'),
});
export type TutorChatOutput = z.infer<typeof TutorChatOutputSchema>;


export async function tutorChat(input: TutorChatInput): Promise<TutorChatOutput> {
  return tutorChatFlow(input);
}


const prompt = ai.definePrompt({
  name: 'tutorChatPrompt',
  input: { schema: TutorChatInputSchema },
  output: { schema: TutorChatOutputSchema },
  prompt: `You are an expert, friendly, and encouraging Web Development Tutor. Your name is "WebPro-Tutor".

Your role is to answer student's questions based *only* on the provided lesson content. Do not use any external knowledge. If the answer is not in the lesson content, politely state that the topic is outside the scope of the current lesson and encourage the student to continue with the course material.

Your tone should be pedagogical, clear, and supportive.

START OF LESSON CONTENT
---
{{{lessonContent}}}
---
END OF LESSON CONTENT

Here is the conversation history. The user's latest question is the last message.
{{#each chatHistory}}
{{#if (eq role 'user')}}
Student: {{{content}}}
{{else}}
Tutor: {{{content}}}
{{/if}}
{{/each}}
Student: {{{question}}}

Based on the lesson content and the conversation history, provide a helpful response.
Tutor:`,
});

const tutorChatFlow = ai.defineFlow(
  {
    name: 'tutorChatFlow',
    inputSchema: TutorChatInputSchema,
    outputSchema: TutorChatOutputSchema,
  },
  async input => {
    const { output } = await prompt(input);
    return output!;
  }
);
