'use client';

import Link from 'next/link';
import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { CourseModule } from '@/lib/course-data';
import { CheckCircle, Circle, FileQuestion } from 'lucide-react';
import { useLocalStorage } from '@/hooks/use-local-storage';
import { useEffect, useMemo } from 'react';

type ProgressState = {
  [classId: string]: boolean;
};

export function CourseModuleItem({ module }: { module: CourseModule }) {
  const [progress, setProgress] = useLocalStorage<ProgressState>(
    `progress-${module.id}`,
    {}
  );
  
  const completedClasses = useMemo(() => Object.values(progress).filter(Boolean).length, [progress]);
  const totalClasses = module.classes.length;
  const progressPercentage = totalClasses > 0 ? (completedClasses / totalClasses) * 100 : 0;

  const toggleCompletion = (classId: string) => {
    setProgress(prev => ({
      ...prev,
      [classId]: !prev[classId],
    }));
  };

  return (
    <AccordionItem value={module.id} className="border-b-0">
      <Card className="overflow-hidden shadow-md">
        <AccordionTrigger className="px-6 py-4 bg-card hover:no-underline">
          <div className="flex-1 text-left">
            <h3 className="font-headline text-xl font-semibold text-primary">
              {module.title}
            </h3>
            <p className="text-sm text-muted-foreground mt-1">
              {module.objective}
            </p>
            <div className="flex items-center gap-4 mt-3">
              <Progress value={progressPercentage} className="w-[70%]" />
              <span className="text-sm font-medium text-foreground">
                {Math.round(progressPercentage)}%
              </span>
              <span className="text-xs text-muted-foreground">
                {completedClasses}/{totalClasses} classes
              </span>
            </div>
          </div>
        </AccordionTrigger>
        <AccordionContent className="p-6 bg-background/50">
          <ul className="space-y-4">
            {module.classes.map((cls) => (
              <li
                key={cls.id}
                className="flex items-center justify-between p-3 rounded-lg hover:bg-accent/20 transition-colors"
              >
                <div className="flex items-center gap-4">
                  <button onClick={() => toggleCompletion(cls.id)} aria-label={`Mark ${cls.title} as ${progress[cls.id] ? 'incomplete' : 'complete'}`}>
                    {progress[cls.id] ? (
                      <CheckCircle className="h-6 w-6 text-accent" />
                    ) : (
                      <Circle className="h-6 w-6 text-muted-foreground/50" />
                    )}
                  </button>
                  <Link href={`/course/${module.id}/${cls.id}`} className="flex-1">
                    <span className="font-medium hover:underline">{cls.title}</span>
                  </Link>
                </div>
                <span className="text-sm text-muted-foreground">{cls.duration} min</span>
              </li>
            ))}
          </ul>
          <div className="mt-6 pt-6 border-t flex justify-between items-center">
            <div>
              <h4 className="font-semibold">{module.project.title}</h4>
              <p className="text-sm text-muted-foreground">{module.project.description}</p>
            </div>
            <Link href={`/quiz/${module.id}`} passHref>
              <Button>
                <FileQuestion className="mr-2 h-4 w-4" />
                Start Quiz
              </Button>
            </Link>
          </div>
        </AccordionContent>
      </Card>
    </AccordionItem>
  );
}

// Dummy Card component to avoid breaking changes if not present
const Card = ({ className, children }: { className?: string; children: React.ReactNode }) => (
    <div className={className}>{children}</div>
)
