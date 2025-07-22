import { SavedItemsList } from '@/components/saved-items-list';
import { Bookmark } from 'lucide-react';

export default function SavedPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold font-headline text-primary flex items-center gap-3">
          <Bookmark className="h-10 w-10" /> Saved Items
        </h1>
        <p className="mt-2 text-lg text-muted-foreground">
          All your bookmarked lessons in one place for easy access.
        </p>
      </div>
      <SavedItemsList />
    </div>
  );
}
