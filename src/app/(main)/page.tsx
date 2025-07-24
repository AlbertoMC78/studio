
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
import { useMemo, useEffect, useState } from 'react';

type QuizResults = {
  [moduleId: string]: boolean;
};

type ProgressState = {
  [classId: string]: boolean;
};

export default function DashboardPage() {
  const [quizResults] = useLocalStorage<QuizResults>('quiz-results', {});
  const { user } = useAuth();
  const [completedClasses, setCompletedClasses] = useState(0);

  const totalClasses = useMemo(() => courseData.reduce((acc, module) => acc + module.classes.length, 0), []);

  useEffect(() => {
    // This function will run on the client side after hydration
    // and can safely access localStorage.
    const calculateCompletedClasses = () => {
      let count = 0;
      courseData.forEach(module => {
        try {
          const progressItem = window.localStorage.getItem(`progress-${module.id}`);
          if (progressItem) {
            const progress: ProgressState = JSON.parse(progressItem);
            count += Object.values(progress).filter(Boolean).length;
          }
        } catch (error) {
          console.warn(`Could not read progress for module ${module.id}`, error);
        }
      });
      return count;
    };
    
    setCompletedClasses(calculateCompletedClasses());

    // A simple way to re-calculate when storage changes.
    // A more robust solution might use a custom event.
    const handleStorageChange = () => {
       setCompletedClasses(calculateCompletedClasses());
    }
    window.addEventListener('storage', handleStorageChange);
    return () => window.removeEventListener('storage', handleStorageChange);

  }, [quizResults]); // Reruns when quiz results change, which is a good proxy for progress changes.

  const overallProgress = totalClasses > 0 ? (completedClasses / totalClasses) * 100 : 0;

  const isModuleLocked = (moduleId: string): boolean => {
    const numericModuleId = parseInt(moduleId, 10);
    if (numericModuleId === 1) {
      return false; // Module 1 is never locked
    }
    const previousModuleId = String(numericModuleId - 1);
    const previousModule = courseData.find(m => m.id === previousModuleId);
    
    // If the previous module doesn't exist or doesn't have a quiz, it's not locked.
    if (!previousModule || !previousModule.quizId) {
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
        <div className="p-6 bg-accent/20 rounded-lg text-center shadow-lg border border-accent">
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
