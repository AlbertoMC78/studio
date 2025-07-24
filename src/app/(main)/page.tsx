'use client';

import { courseData } from '@/lib/course-data';
import { Accordion } from '@/components/ui/accordion';
import { CourseModuleItem } from '@/components/course-module';
import { useLocalStorage } from '@/hooks/use-local-storage';
import { useAuth } from '@/context/auth-context';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Award, Target } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { useMemo } from 'react';

type QuizResults = {
  [moduleId: string]: boolean;
};

type ProgressState = {
  [classId: string]: boolean;
};

export default function DashboardPage() {
  const [quizResults] = useLocalStorage<QuizResults>('quiz-results', {});
  const { user } = useAuth();
  
  const totalClasses = useMemo(() => courseData.reduce((acc, module) => acc + module.classes.length, 0), []);
  
  const completedClasses = useMemo(() => {
    let count = 0;
    courseData.forEach(module => {
      // Since useLocalStorage is a hook, we can't call it in a loop.
      // This is a limitation we accept for this implementation. A more robust solution might use a global state manager.
      // For now, we read from localStorage directly, which is not ideal but works for this scenario.
      if (typeof window !== 'undefined') {
        try {
          const progressItem = window.localStorage.getItem(`progress-${module.id}`);
          if (progressItem) {
            const progress: ProgressState = JSON.parse(progressItem);
            count += Object.values(progress).filter(Boolean).length;
          }
        } catch (error) {
          console.warn(`Could not read progress for module ${module.id}`, error);
        }
      }
    });
    return count;
  }, [courseData]);

  const overallProgress = totalClasses > 0 ? (completedClasses / totalClasses) * 100 : 0;

  const isModuleLocked = (moduleId: string): boolean => {
    const numericModuleId = parseInt(moduleId, 10);
    if (numericModuleId === 1) {
      return false; // Module 1 is never locked
    }
    const previousModuleId = String(numericModuleId - 1);
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

      <Card className="shadow-lg">
        <CardHeader>
            <CardTitle className="flex items-center gap-2 font-headline text-2xl text-primary">
                <Target />
                Tu Progreso General
            </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
            <Progress value={overallProgress} className="h-4" />
            <div className="flex justify-between items-center text-sm">
                <p className="text-muted-foreground">Has completado <strong>{completedClasses}</strong> de <strong>{totalClasses}</strong> clases.</p>
                <p className="font-semibold text-primary">{Math.round(overallProgress)}% completado</p>
            </div>
        </CardContent>
      </Card>

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
