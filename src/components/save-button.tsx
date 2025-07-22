'use client';

import { useLocalStorage } from '@/hooks/use-local-storage';
import { Button } from '@/components/ui/button';
import { Bookmark } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

export function SaveButton({ lessonId, lessonTitle }: { lessonId: string, lessonTitle: string }) {
  const [savedItems, setSavedItems] = useLocalStorage<string[]>('saved-items', []);
  const { toast } = useToast();

  const isSaved = savedItems.includes(lessonId);

  const handleSaveToggle = () => {
    let newSavedItems;
    if (isSaved) {
      newSavedItems = savedItems.filter((id) => id !== lessonId);
      toast({
        title: 'Removed from Saved',
        description: `"${lessonTitle}" has been removed from your saved items.`,
      });
    } else {
      newSavedItems = [...savedItems, lessonId];
      toast({
        title: 'Item Saved!',
        description: `"${lessonTitle}" has been added to your saved items.`,
      });
    }
    setSavedItems(newSavedItems);
  };

  return (
    <Button variant={isSaved ? 'default' : 'outline'} onClick={handleSaveToggle}>
      <Bookmark className={`mr-2 h-4 w-4 ${isSaved ? 'fill-current' : ''}`} />
      {isSaved ? 'Saved' : 'Save for later'}
    </Button>
  );
}
