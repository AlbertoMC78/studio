'use server';

/**
 * @fileOverview A flow for generating a course completion certificate image.
 *
 * - generateCertificate - A function that handles the certificate generation process.
 * - GenerateCertificateInput - The input type for the generateCertificate function.
 * - GenerateCertificateOutput - The return type for the generateCertificate function.
 */

import { ai } from '@/ai/genkit';
import { z } from 'zod';
import { googleAI } from '@genkit-ai/googleai';

const GenerateCertificateInputSchema = z.object({
  studentName: z.string().describe('The name of the student to feature on the certificate.'),
});
export type GenerateCertificateInput = z.infer<typeof GenerateCertificateInputSchema>;

const GenerateCertificateOutputSchema = z.object({
  certificateImage: z.string().describe('The generated certificate image as a data URI.'),
});
export type GenerateCertificateOutput = z.infer<typeof GenerateCertificateOutputSchema>;


export async function generateCertificate(input: GenerateCertificateInput): Promise<GenerateCertificateOutput> {
  return generateCertificateFlow(input);
}

const generateCertificateFlow = ai.defineFlow(
  {
    name: 'generateCertificateFlow',
    inputSchema: GenerateCertificateInputSchema,
    outputSchema: GenerateCertificateOutputSchema,
  },
  async ({ studentName }) => {
    const prompt = `A professional, elegant, and modern certificate of completion for a "Master Web Developer: From Zero to Full Stack + AI & Web3" course.

Key elements to include:
- Title: "Certificate of Completion"
- Recipient's Name: "${studentName}"
- Course Name: "Master Web Developer: From Zero to Full Stack + AI & Web3"
- Issuing Authority: "Web Dev Pro AI Academy"
- A decorative, modern, and tech-inspired border.
- Subtle geometric background patterns.
- A sophisticated gold and deep blue color scheme.
- A seal or emblem that looks official, perhaps with a stylized 'WDP' monogram.
- A signature line for "Alberto Montero, Lead Instructor".
- The date of completion (use today's date).
- The text should be clear, readable, and elegantly typeset.

The design should be clean, prestigious, and avoid cliches. It should look like a real, valuable certificate from a modern tech academy. The final output must be a high-resolution image.`;

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
    
    return { certificateImage: media.url };
  }
);
