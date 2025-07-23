'use client';

import { courseData } from '@/lib/course-data';
import { Accordion } from '@/components/ui/accordion';
import { CourseModuleItem } from '@/components/course-module';
import { useLocalStorage } from '@/hooks/use-local-storage';
import { useAuth } from '@/context/auth-context';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Award } from 'lucide-react';

type QuizResults = {
  [moduleId: string]: boolean;
};

export default function DashboardPage() {
  const [quizResults] = useLocalStorage<QuizResults>('quiz-results', {});
  const { user } = useAuth();

  const isModuleLocked = (moduleId: string): boolean => {
    const numericModuleId = parseInt(moduleId, 10);
    if (numericModuleId === 1) {
      return false; // Module 1 is never locked
    }
    const previousModuleId = String(numericModuleId - 1);
    // If the previous module doesn't have a quiz, it's considered "passed" for unlocking purposes
    const previousModuleHasQuiz = courseData.find(m => m.id === previousModuleId)?.quizId;
    if (!previousModuleHasQuiz) {
        return false;
    }
    return !quizResults[previousModuleId];
  };

  const allModulesCompleted = courseData.every(module => !module.quizId || quizResults[module.id]);

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

      {allModulesCompleted && user && (
        <div className="p-6 bg-accent/20 rounded-lg text-center shadow-lg">
          <h2 className="text-2xl font-bold font-headline text-primary">¡Felicidades, {user.email?.split('@')[0]}!</h2>
          <p className="mt-2 text-muted-foreground">Has completado todos los módulos del curso. ¡Estás listo para reclamar tu certificado!</p>
          <Button asChild size="lg" className="mt-4">
            <Link href="/certificate">
              <Award className="mr-2 h-5 w-5" />
              Generar mi Certificado
            </Link>
          </Button>
        </div>
      )}

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
