// src/ai/flows/search-course.ts
'use server';

/**
 * @fileOverview A flow for searching through the course content.
 *
 * - searchCourse - A function that handles the course search process.
 * - SearchCourseInput - The input type for the searchCourse function.
 * - SearchCourseOutput - The return type for the searchCourse function.
 */

import { ai } from '@/ai/genkit';
import { z } from 'genkit';

const SearchCourseInputSchema = z.object({
  query: z.string().describe('The user\'s search query.'),
  courseContent: z.string().describe('The entire content of the course.'),
});
export type SearchCourseInput = z.infer<typeof SearchCourseInputSchema>;

const SearchCourseOutputSchema = z.object({
  results: z.array(
    z.object({
      moduleId: z.string().describe('The ID of the module.'),
      classId: z.string().describe('The ID of the class.'),
      classTitle: z.string().describe('The title of the relevant class.'),
      snippet: z.string().describe('A relevant snippet of text from the class content that answers the query.'),
    })
  ).describe('An array of search results.'),
});
export type SearchCourseOutput = z.infer<typeof SearchCourseOutputSchema>;


export async function searchCourse(input: SearchCourseInput): Promise<SearchCourseOutput> {
  return searchCourseFlow(input);
}

const prompt = ai.definePrompt({
  name: 'searchCoursePrompt',
  input: { schema: SearchCourseInputSchema },
  output: { schema: SearchCourseOutputSchema },
  prompt: `You are an expert search engine for an online web development course. Your task is to analyze the user's query and find the most relevant classes and content snippets from the provided course material.

Return a list of the most relevant results. For each result, provide the module ID, class ID, class title, and a concise snippet from the content that directly addresses the user's query.

User Query:
"{{{query}}}"

Full Course Content:
---
{{{courseContent}}}
---
`,
});

const searchCourseFlow = ai.defineFlow(
  {
    name: 'searchCourseFlow',
    inputSchema: SearchCourseInputSchema,
    outputSchema: SearchCourseOutputSchema,
  },
  async input => {
    const { output } = await prompt(input);
    return output!;
  }
);
