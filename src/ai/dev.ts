import { config } from 'dotenv';
config();

import '@/ai/flows/content-injection.ts';
import '@/ai/flows/generate-quiz.ts';
import '@/ai/flows/tts.ts';
import '@/ai/flows/search-course.ts';
import '@/ai/flows/summarize-lesson.ts';
import '@/ai/flows/generate-certificate.ts';
import '@/ai/flows/tutor-chat.ts';
import '@/ai/flows/generate-avatar.ts';
