'use server';

/**
 * @fileOverview A flow for generating a unique user avatar image.
 *
 * - generateAvatar - A function that handles the avatar generation process.
 * - GenerateAvatarInput - The input type for the generateAvatar function.
 * - GenerateAvatarOutput - The return type for the generateAvatar function.
 */

import { ai } from '@/ai/genkit';
import { z } from 'zod';
import { googleAI } from '@genkit-ai/googleai';

const GenerateAvatarInputSchema = z.object({
  userEmail: z.string().describe('The email of the user to generate an avatar for. Used as a seed for uniqueness.'),
});
export type GenerateAvatarInput = z.infer<typeof GenerateAvatarInputSchema>;

const GenerateAvatarOutputSchema = z.object({
  avatarImage: z.string().describe('The generated avatar image as a data URI.'),
});
export type GenerateAvatarOutput = z.infer<typeof GenerateAvatarOutputSchema>;


export async function generateAvatar(input: GenerateAvatarInput): Promise<GenerateAvatarOutput> {
  return generateAvatarFlow(input);
}

const generateAvatarFlow = ai.defineFlow(
  {
    name: 'generateAvatarFlow',
    inputSchema: GenerateAvatarInputSchema,
    outputSchema: GenerateAvatarOutputSchema,
  },
  async ({ userEmail }) => {
    // We use the user's email as part of the prompt to encourage a unique generation for each user.
    const prompt = `Generate a minimalist, abstract, and modern geometric logo for a web developer's avatar. The logo should be tech-inspired. Use the primary colors of the application's theme: a sophisticated deep navy blue (#0A2342) and a vibrant gold accent (#FFD700), on a clean, light grey background (#F5F7F9). The design should be suitable for a small circular avatar format. Uniqueness seed: ${userEmail}.`;

    const { media } = await ai.generate({
      model: googleAI.model('gemini-2.0-flash-preview-image-generation'),
      prompt,
      config: {
        responseModalities: ['TEXT', 'IMAGE'],
      },
    });

    if (!media || !media.url) {
      throw new Error('Image generation failed to return a valid image.');
    }
    
    return { avatarImage: media.url };
  }
);
