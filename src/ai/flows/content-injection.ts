// src/ai/flows/content-injection.ts
'use server';
/**
 * @fileOverview A flow for injecting AI-generated educational content into the platform's database.
 *
 * - injectAiContent - A function that handles the content injection process.
 * - ContentInjectionInput - The input type for the injectAiContent function.
 * - ContentInjectionOutput - The return type for the injectAiContent function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const ContentInjectionInputSchema = z.object({
  moduleName: z.string().describe('The name of the module to inject content into.'),
  className: z.string().describe('The name of the class to inject content into.'),
  contentPrompt: z.string().describe('The prompt to use for generating the educational content.'),
});
export type ContentInjectionInput = z.infer<typeof ContentInjectionInputSchema>;

const ContentInjectionOutputSchema = z.object({
  content: z.string().describe('The AI-generated educational content.'),
});
export type ContentInjectionOutput = z.infer<typeof ContentInjectionOutputSchema>;

export async function injectAiContent(input: ContentInjectionInput): Promise<ContentInjectionOutput> {
  return contentInjectionFlow(input);
}

const contentInjectionPrompt = ai.definePrompt({
  name: 'contentInjectionPrompt',
  input: {schema: ContentInjectionInputSchema},
  output: {schema: ContentInjectionOutputSchema},
  prompt: `You are an expert in generating educational content for web development courses.

  Generate content for the following module and class, based on the provided prompt.

  Module: {{{moduleName}}}
  Class: {{{className}}}
  Prompt: {{{contentPrompt}}}

  Content:`, // No output schema since the prompt is directly returning text.
});

const contentInjectionFlow = ai.defineFlow(
  {
    name: 'contentInjectionFlow',
    inputSchema: ContentInjectionInputSchema,
    outputSchema: ContentInjectionOutputSchema,
  },
  async input => {
    const {output} = await contentInjectionPrompt(input);
    return {
      content: output!.text,
    };
  }
);
