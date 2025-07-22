'use client';

import { useState, useEffect } from 'react';
import { generateQuiz } from '@/ai/flows/generate-quiz';
import type { GenerateQuizOutput } from '@/ai/flows/generate-quiz';
import { useLocalStorage } from '@/hooks/use-local-storage';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { Loader2, CheckCircle, XCircle } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

type QuizState = 'idle' | 'loading' | 'active' | 'submitted';
type AnswersState = { [questionIndex: number]: number };
type QuizResults = { [moduleId: string]: boolean };

export function QuizClient({ moduleContent, moduleTitle, moduleId }: { moduleContent: string, moduleTitle: string, moduleId: string }) {
  const [quizState, setQuizState] = useState<QuizState>('idle');
  const [quiz, setQuiz] = useState<GenerateQuizOutput['quiz'] | null>(null);
  const [answers, setAnswers] = useState<AnswersState>({});
  const [score, setScore] = useState<number | null>(null);
  const [quizResults, setQuizResults] = useLocalStorage<QuizResults>('quiz-results', {});

  const handleGenerateQuiz = async () => {
    setQuizState('loading');
    setAnswers({});
    setScore(null);
    try {
      const result = await generateQuiz({ moduleContent, numQuestions: 5 });
      setQuiz(result.quiz);
      setQuizState('active');
    } catch (error) {
      console.error('Failed to generate quiz:', error);
      setQuizState('idle');
    }
  };
  
  const handleAnswerChange = (questionIndex: number, answerIndex: number) => {
    setAnswers(prev => ({ ...prev, [questionIndex]: answerIndex }));
  };

  const handleSubmitQuiz = () => {
    if (!quiz) return;
    let correctAnswers = 0;
    quiz.forEach((q, index) => {
      if (answers[index] === q.correctAnswerIndex) {
        correctAnswers++;
      }
    });
    const finalScore = (correctAnswers / quiz.length) * 100;
    setScore(finalScore);

    if (finalScore >= 80) {
      setQuizResults(prev => ({ ...prev, [moduleId]: true }));
    }

    setQuizState('submitted');
  };
  
  const resetQuiz = () => {
    setQuizState('idle');
    setQuiz(null);
  }

  if (quizState === 'idle' || quizState === 'loading') {
    return (
      <Card className="max-w-2xl mx-auto text-center shadow-lg">
        <CardHeader>
          <CardTitle className="font-headline text-3xl text-primary">{moduleTitle}</CardTitle>
          <CardDescription>Test your knowledge with a short quiz. You need to score at least 80% to unlock the next module.</CardDescription>
        </CardHeader>
        <CardContent>
          <Button onClick={handleGenerateQuiz} disabled={quizState === 'loading'} size="lg">
            {quizState === 'loading' ? (
              <><Loader2 className="mr-2 h-4 w-4 animate-spin" /> Generating Quiz...</>
            ) : (
              'Start Quiz'
            )}
          </Button>
        </CardContent>
      </Card>
    );
  }

  if (quizState === 'submitted' && score !== null && quiz) {
    const isPassed = score >= 80;
    return (
         <Card className="max-w-2xl mx-auto shadow-lg">
            <CardHeader className="text-center">
                <CardTitle className="font-headline text-3xl text-primary">Quiz Results</CardTitle>
                <CardDescription>You scored {score.toFixed(0)}%</CardDescription>
                <Alert variant={isPassed ? 'default' : 'destructive'} className="mt-4 bg-opacity-20">
                  <AlertTitle className="font-bold">{isPassed ? "Congratulations! You've passed!" : "Keep Trying!"}</AlertTitle>
                  <AlertDescription>
                    {isPassed ? `You have successfully unlocked the next module.` : `You need a score of 80% or higher to pass. Feel free to try again!`}
                  </AlertDescription>
                </Alert>
            </CardHeader>
            <CardContent className="space-y-4">
                {quiz.map((q, qIndex) => (
                    <div key={qIndex} className={`p-4 rounded-lg ${answers[qIndex] === q.correctAnswerIndex ? 'bg-green-100 dark:bg-green-900/30' : 'bg-red-100 dark:bg-red-900/30'}`}>
                        <p className="font-semibold">{qIndex + 1}. {q.question}</p>
                        <p className={`text-sm mt-2 ${answers[qIndex] === q.correctAnswerIndex ? 'text-green-800 dark:text-green-200' : 'text-red-800 dark:text-red-200'}`}>
                          Your answer: {q.answers[answers[qIndex]] || 'Not answered'}
                          {answers[qIndex] !== q.correctAnswerIndex && <XCircle className="inline-block ml-2 h-4 w-4"/>}
                        </p>
                        <p className="text-sm text-green-800 dark:text-green-200 font-semibold">
                          Correct answer: {q.answers[q.correctAnswerIndex]}
                          <CheckCircle className="inline-block ml-2 h-4 w-4"/>
                          </p>
                    </div>
                ))}
            </CardContent>
             <CardFooter>
                 <Button onClick={resetQuiz}>Try Again</Button>
            </CardFooter>
         </Card>
    );
  }

  return (
    <Card className="max-w-2xl mx-auto shadow-lg">
      <CardHeader>
        <CardTitle className="font-headline text-3xl text-primary">Quiz Time!</CardTitle>
        <CardDescription>Select the correct answer for each question.</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        {quiz?.map((q, qIndex) => (
          <div key={qIndex}>
            <p className="font-semibold mb-2">{qIndex + 1}. {q.question}</p>
            <RadioGroup onValueChange={(value) => handleAnswerChange(qIndex, parseInt(value))}>
              {q.answers.map((ans, aIndex) => (
                <div key={aIndex} className="flex items-center space-x-2 p-2 rounded-md hover:bg-muted">
                  <RadioGroupItem value={String(aIndex)} id={`q${qIndex}a${aIndex}`} />
                  <Label htmlFor={`q${qIndex}a${aIndex}`} className="flex-1 cursor-pointer">{ans}</Label>
                </div>
              ))}
            </RadioGroup>
          </div>
        ))}
      </CardContent>
      <CardFooter>
        <Button onClick={handleSubmitQuiz} size="lg" disabled={Object.keys(answers).length !== quiz?.length}>
          Submit Quiz
        </Button>
      </CardFooter>
    </Card>
  );
}
