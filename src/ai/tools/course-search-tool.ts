'use server';

/**
 * @fileOverview A tool for searching the entire course content.
 *
 * - searchCourseTool - A Genkit tool that allows the AI to search for content across all modules.
 */

import { ai } from '@/ai/genkit';
import { z } from 'zod';
import { courseData } from '@/lib/course-data';

// Pre-process course data into a single string for the AI, similar to the search page.
const courseContentString = courseData
  .map(
    (module) => `
Module ID: ${module.id} - ${module.title}
${module.classes
  .map(
    (lesson) => `
  Class ID: ${lesson.id}
  Class Title: ${lesson.title}
  Class Content: ${lesson.content}
`
  )
  .join('')}
`
  )
  .join('---\n');


const SearchCourseToolInputSchema = z.object({
    query: z.string().describe("The search query to find relevant content in the course."),
});

const SearchCourseToolOutputSchema = z.object({
    results: z.array(z.object({
        classTitle: z.string(),
        snippet: z.string(),
    })),
});

export const searchCourseTool = ai.defineTool(
  {
    name: 'searchCourseTool',
    description: 'Searches the entire course content to find answers to user questions that are not available in the current lesson context.',
    inputSchema: SearchCourseToolInputSchema,
    outputSchema: SearchCourseToolOutputSchema,
  },
  async ({ query }) => {
    // For this implementation, we will use another LLM call to perform the search.
    // This is a simple approach. A more advanced one would use a vector database.
    const searchPrompt = ai.definePrompt({
        name: 'searchCourseToolPrompt',
        input: { schema: z.object({ query: z.string(), courseContent: z.string() }) },
        output: { schema: SearchCourseToolOutputSchema },
        prompt: `You are an expert search engine. Find the most relevant snippets from the course content for the given query. Return only the most relevant results.

        Query: {{{query}}}
        
        Course Content:
        {{{courseContent}}}
        `,
    });

    const { output } = await searchPrompt({ query, courseContent: courseContentString });
    return output || { results: [] };
  }
);
