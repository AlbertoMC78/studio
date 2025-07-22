'use client';

import { useLocalStorage } from '@/hooks/use-local-storage';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';
import { NotebookText } from 'lucide-react';

export function NoteTaking({ lessonId }: { lessonId: string }) {
  const [note, setNote] = useLocalStorage(`note-${lessonId}`, '');

  return (
    <Card className="shadow-lg">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 font-headline text-primary">
          <NotebookText />
          My Notes
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Textarea
          placeholder="Write your notes for this lesson here..."
          value={note}
          onChange={(e) => setNote(e.target.value)}
          className="min-h-[200px] text-base"
        />
      </CardContent>
    </Card>
  );
}
