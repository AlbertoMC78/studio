'use client';

import { useState } from 'react';
import { textToSpeech } from '@/ai/flows/tts';
import { summarizeLesson } from '@/ai/flows/summarize-lesson';
import { Button } from '@/components/ui/button';
import { Volume2, Loader2, AlertCircle } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

export function AudioPlayer({ lessonContent }: { lessonContent: string }) {
  const [audioSrc, setAudioSrc] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleGenerateAudio = async () => {
    setIsLoading(true);
    setAudioSrc(null);

    try {
      // Step 1: Generate a summary of the lesson content.
      const summaryResult = await summarizeLesson({ lessonContent });
      const summary = summaryResult.summary;
      
      // Step 2: Convert the summary to speech.
      const ttsResult = await textToSpeech({ summary });
      setAudioSrc(ttsResult.audio);

    } catch (error) {
      console.error('Failed to generate audio:', error);
      toast({
        variant: 'destructive',
        title: 'Audio Generation Failed',
        description: 'Could not generate the audio for this lesson. Please try again later.',
      });
    } finally {
      setIsLoading(false);
    }
  };

  if (audioSrc) {
    return (
      <audio controls autoPlay className="max-w-[250px]">
        <source src={audioSrc} type="audio/wav" />
        Your browser does not support the audio element.
      </audio>
    );
  }

  return (
    <Button onClick={handleGenerateAudio} disabled={isLoading}>
      {isLoading ? (
        <>
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          Generating...
        </>
      ) : (
        <>
          <Volume2 className="mr-2 h-4 w-4" />
          Listen
        </>
      )}
    </Button>
  );
}
