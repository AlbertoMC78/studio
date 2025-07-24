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
import { searchCourseTool } from '@/ai/tools/course-search-tool';

const MessageSchema = z.object({
  role: z.enum(['user', 'model', 'tool']),
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
  tools: [searchCourseTool],
  input: { schema: TutorChatInputSchema },
  output: { schema: TutorChatOutputSchema },
  prompt: `You are an expert, friendly, and encouraging Web Development Tutor. Your name is "WebPro-Tutor".

Your role is to answer student's questions.

First, try to answer based *only* on the provided lesson content for the current lesson. 

If the answer is not in the current lesson's content, you MUST use the 'searchCourseTool' to find relevant information from the entire course to answer the student's question. Inform the user that you are looking in other parts of the course.

If after searching you still can't find the answer, politely state that the topic seems to be outside the scope of the course material and encourage the student to focus on the curriculum.

Your tone should be pedagogical, clear, and supportive.

START OF CURRENT LESSON CONTENT
---
{{{lessonContent}}}
---
END OF CURRENT LESSON CONTENT

Here is the conversation history. The user's latest question is the last message.
{{#each chatHistory}}
{{#if (eq role 'user')}}
Student: {{{content}}}
{{else if (eq role 'model')}}
Tutor: {{{content}}}
{{/if}}
{{/each}}
Student: {{{question}}}

Based on the lesson content, conversation history, and your tools, provide a helpful response.
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
