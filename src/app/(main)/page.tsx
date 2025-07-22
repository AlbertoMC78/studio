'use client';

import { courseData } from '@/lib/course-data';
import { Accordion } from '@/components/ui/accordion';
import { CourseModuleItem } from '@/components/course-module';
import { useLocalStorage } from '@/hooks/use-local-storage';

type QuizResults = {
  [moduleId: string]: boolean;
};

export default function DashboardPage() {
  const [quizResults] = useLocalStorage<QuizResults>('quiz-results', {});

  const isModuleLocked = (moduleId: string): boolean => {
    const numericModuleId = parseInt(moduleId, 10);
    if (numericModuleId === 0) {
      return false; // Module 0 is always unlocked
    }
    const previousModuleId = String(numericModuleId - 1);
    return !quizResults[previousModuleId];
  };

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold font-headline text-primary">
          Master Web Developer Course
        </h1>
        <p className="mt-2 text-lg text-muted-foreground">
          De Cero a Full Stack + IA & Web3. Your complete learning journey.
        </p>
      </div>

      <Accordion type="single" collapsible className="w-full space-y-4">
        {courseData.map((module) => (
          <CourseModuleItem 
            key={module.id} 
            module={module}
            isLocked={isModuleLocked(module.id)}
          />
        ))}
      </Accordion>
    </div>
  );
}
