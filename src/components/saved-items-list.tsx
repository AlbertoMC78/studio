'use client';

import { useLocalStorage } from '@/hooks/use-local-storage';
import { courseData } from '@/lib/course-data';
import { Card, CardContent } from '@/components/ui/card';
import Link from 'next/link';
import { Button } from './ui/button';
import { ArrowRight } from 'lucide-react';

export function SavedItemsList() {
  const [savedItems] = useLocalStorage<string[]>('saved-items', []);

  const savedLessons = courseData
    .flatMap((module) =>
      module.classes.map((lesson) => ({ ...lesson, moduleId: module.id }))
    )
    .filter((lesson) => savedItems.includes(lesson.id));

  if (savedLessons.length === 0) {
    return (
      <Card className="text-center py-12">
        <CardContent>
          <h2 className="text-2xl font-semibold text-muted-foreground">
            No Saved Items Yet
          </h2>
          <p className="mt-2 text-muted-foreground">
            Browse the course and save lessons for later review.
          </p>
          <Button asChild className="mt-4">
             <Link href="/">Browse Course</Link>
          </Button>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="shadow-lg">
      <CardContent className="p-6">
        <ul className="space-y-3">
          {savedLessons.map((lesson) => (
            <li key={lesson.id}>
              <Link
                href={`/course/${lesson.moduleId}/${lesson.id}`}
                className="flex justify-between items-center p-4 rounded-lg hover:bg-accent/20 transition-colors border"
              >
                <div>
                  <p className="font-semibold text-primary">{lesson.title}</p>
                  <p className="text-sm text-muted-foreground">
                    From: {courseData.find(m => m.id === lesson.moduleId)?.title}
                  </p>
                </div>
                <ArrowRight className="h-5 w-5 text-muted-foreground" />
              </Link>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}
