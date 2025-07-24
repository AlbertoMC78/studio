'use client';

import { useAuth } from '@/context/auth-context';
import { useLocalStorage } from '@/hooks/use-local-storage';
import { courseData } from '@/lib/course-data';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Progress } from '@/components/ui/progress';
import { Award, Trophy } from 'lucide-react';
import { useMemo, useEffect, useState } from 'react';

type QuizResults = {
  [moduleId: string]: boolean;
};

type ProgressState = {
  [classId: string]: boolean;
};

export default function ProfilePage() {
  const { user } = useAuth();
  const [quizResults] = useLocalStorage<QuizResults>('quiz-results', {});
  const [avatarUrl] = useLocalStorage<string | null>('user-avatar', null);
  const [completedClasses, setCompletedClasses] = useState(0);

  const totalClasses = useMemo(() => courseData.reduce((acc, module) => acc + module.classes.length, 0), []);
  
  const completedModules = useMemo(() => {
    return courseData.filter(module => module.quizId && quizResults[module.id]);
  }, [quizResults]);

  useEffect(() => {
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

    const handleStorageChange = () => {
       setCompletedClasses(calculateCompletedClasses());
    }
    window.addEventListener('storage', handleStorageChange);
    return () => window.removeEventListener('storage', handleStorageChange);

  }, []);

  const overallProgress = totalClasses > 0 ? (completedClasses / totalClasses) * 100 : 0;

  if (!user) {
    return null; // Or a loading spinner
  }

  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row items-center gap-6">
        <Avatar className="h-24 w-24 border-4 border-primary shadow-lg">
          <AvatarImage src={avatarUrl ?? undefined} data-ai-hint="user avatar" />
          <AvatarFallback className="text-4xl">
            {user.email?.[0].toUpperCase()}
          </AvatarFallback>
        </Avatar>
        <div>
          <h1 className="text-4xl font-bold font-headline text-primary">
            {user.email?.split('@')[0]}
          </h1>
          <p className="mt-1 text-lg text-muted-foreground">
            {user.email}
          </p>
        </div>
      </div>

      <Card className="shadow-lg">
        <CardHeader>
          <CardTitle>Mi Progreso</CardTitle>
          <CardDescription>Resumen de tu avance en el Master Web Developer Course.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
            <div className="space-y-2">
                <Progress value={overallProgress} className="h-3" />
                <div className="flex justify-between items-center text-sm">
                    <p className="text-muted-foreground">Has completado <strong>{completedClasses}</strong> de <strong>{totalClasses}</strong> clases.</p>
                    <p className="font-semibold text-primary">{Math.round(overallProgress)}% completado</p>
                </div>
            </div>
            <div className="space-y-2">
                <div className="flex justify-between items-center text-sm">
                     <p className="text-muted-foreground">Has completado <strong>{completedModules.length}</strong> de <strong>{courseData.filter(m => m.quizId).length}</strong> módulos.</p>
                </div>
            </div>
        </CardContent>
      </Card>

      <Card className="shadow-lg">
        <CardHeader>
            <CardTitle className="flex items-center gap-2">
                <Award /> Mis Logros
            </CardTitle>
            <CardDescription>Insignias obtenidas por completar módulos.</CardDescription>
        </CardHeader>
        <CardContent>
            {completedModules.length === 0 ? (
                <p className="text-muted-foreground text-center py-4">
                    Aún no has completado ningún módulo. ¡Sigue adelante!
                </p>
            ) : (
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                    {completedModules.map(module => (
                        <div key={module.id} className="flex flex-col items-center text-center gap-2 p-4 border rounded-lg bg-accent/10">
                            <Trophy className="h-12 w-12 text-accent" />
                            <p className="text-xs font-semibold text-primary leading-tight">{module.title}</p>
                        </div>
                    ))}
                </div>
            )}
        </CardContent>
      </Card>
    </div>
  );
}
