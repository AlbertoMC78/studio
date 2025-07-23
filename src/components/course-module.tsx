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
import { CheckCircle, Circle, FileQuestion, Lock, Trophy } from 'lucide-react';
import { useLocalStorage } from '@/hooks/use-local-storage';
import { useMemo } from 'react';
import { Card } from '@/components/ui/card';
import { cn } from '@/lib/utils';

type ProgressState = {
  [classId: string]: boolean;
};

type QuizResults = {
  [moduleId: string]: boolean;
};

export function CourseModuleItem({ module, isLocked }: { module: CourseModule; isLocked: boolean }) {
  const [progress, setProgress] = useLocalStorage<ProgressState>(
    `progress-${module.id}`,
    {}
  );
  
  const completedClasses = useMemo(() => Object.values(progress).filter(Boolean).length, [progress]);
  const totalClasses = module.classes.length;
  const progressPercentage = totalClasses > 0 ? (completedClasses / totalClasses) * 100 : 0;

  const toggleCompletion = (classId: string) => {
    if (isLocked) return;
    setProgress(prev => ({
      ...prev,
      [classId]: !prev[classId],
    }));
  };

  const hasProjectAndNoClasses = module.project && module.classes.length === 0;

  return (
    <AccordionItem value={module.id} className="border-b-0" disabled={isLocked}>
      <Card className={cn("overflow-hidden shadow-md", isLocked && "bg-muted/50")}>
        <AccordionTrigger
          className={cn("px-6 py-4 bg-card hover:no-underline", isLocked && "cursor-not-allowed")}
        >
          <div className="flex-1 text-left flex items-center gap-4">
             {isLocked && <Lock className="h-6 w-6 text-muted-foreground" />}
            <div className="flex-1">
              <h3 className={cn("font-headline text-xl font-semibold text-primary", isLocked && "text-muted-foreground")}>
                {module.title}
              </h3>
              <p className={cn("text-sm text-muted-foreground mt-1", isLocked && "text-muted-foreground/80")}>
                {module.objective}
              </p>
              {!hasProjectAndNoClasses && (
                <div className="flex items-center gap-4 mt-3">
                  <Progress value={progressPercentage} className={cn("w-[70%]", isLocked && "bg-muted-foreground/30")} />
                  <span className={cn("text-sm font-medium text-foreground", isLocked && "text-muted-foreground")}>
                    {Math.round(progressPercentage)}%
                  </span>
                  <span className={cn("text-xs text-muted-foreground", isLocked && "text-muted-foreground/80")}>
                    {completedClasses}/{totalClasses} classes
                  </span>
                </div>
              )}
            </div>
          </div>
        </AccordionTrigger>
        <AccordionContent className="p-6 bg-background/50">
          {module.classes.length > 0 && (
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
          )}
          <div className={cn("pt-6 border-t", module.classes.length > 0 && "mt-6")}>
            <div className="flex justify-between items-center">
              <div>
                <h4 className="font-semibold flex items-center gap-2"><Trophy className="h-5 w-5 text-accent"/>{module.project.title}</h4>
                <p className="text-sm text-muted-foreground pl-7">{module.project.description}</p>
              </div>
              {!hasProjectAndNoClasses && (
                <Link href={`/quiz/${module.id}`} passHref>
                  <Button>
                    <FileQuestion className="mr-2 h-4 w-4" />
                    Start Quiz
                  </Button>
                </Link>
              )}
            </div>
          </div>
        </AccordionContent>
      </Card>
    </AccordionItem>
  );
}
