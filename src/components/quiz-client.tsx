'use client';

import { useState } from 'react';
import { generateQuiz } from '@/ai/flows/generate-quiz';
import type { GenerateQuizOutput } from '@/ai/flows/generate-quiz';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { Loader2, CheckCircle, XCircle } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

type QuizState = 'idle' | 'loading' | 'active' | 'submitted';
type AnswersState = { [questionIndex: number]: number };

export function QuizClient({ moduleContent, moduleTitle }: { moduleContent: string, moduleTitle: string }) {
  const [quizState, setQuizState] = useState<QuizState>('idle');
  const [quiz, setQuiz] = useState<GenerateQuizOutput['quiz'] | null>(null);
  const [answers, setAnswers] = useState<AnswersState>({});
  const [score, setScore] = useState<number | null>(null);

  const handleGenerateQuiz = async () => {
    setQuizState('loading');
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
    setScore((correctAnswers / quiz.length) * 100);
    setQuizState('submitted');
  };
  
  if (quizState === 'idle' || quizState === 'loading') {
    return (
      <Card className="max-w-2xl mx-auto text-center shadow-lg">
        <CardHeader>
          <CardTitle className="font-headline text-3xl text-primary">{moduleTitle}</CardTitle>
          <CardDescription>Test your knowledge with a short quiz.</CardDescription>
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
    return (
         <Card className="max-w-2xl mx-auto shadow-lg">
            <CardHeader>
                <CardTitle className="font-headline text-3xl text-primary">Quiz Results</CardTitle>
                <CardDescription>You scored {score.toFixed(0)}%</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
                {quiz.map((q, qIndex) => (
                    <div key={qIndex} className={`p-4 rounded-lg ${answers[qIndex] === q.correctAnswerIndex ? 'bg-green-100' : 'bg-red-100'}`}>
                        <p className="font-semibold">{q.question}</p>
                        <p className="text-sm mt-2">Your answer: {q.answers[answers[qIndex]] || 'Not answered'}</p>
                        <p className="text-sm text-green-700">Correct answer: {q.answers[q.correctAnswerIndex]}</p>
                    </div>
                ))}
            </CardContent>
             <CardFooter>
                 <Button onClick={() => setQuizState('idle')}>Try Again</Button>
            </CardFooter>
         </Card>
    )
  }

  return (
    <Card className="max-w-2xl mx-auto shadow-lg">
      <CardHeader>
        <CardTitle className="font-headline text-3xl text-primary">Quiz Time!</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {quiz?.map((q, qIndex) => (
          <div key={qIndex}>
            <p className="font-semibold mb-2">{qIndex + 1}. {q.question}</p>
            <RadioGroup onValueChange={(value) => handleAnswerChange(qIndex, parseInt(value))}>
              {q.answers.map((ans, aIndex) => (
                <div key={aIndex} className="flex items-center space-x-2">
                  <RadioGroupItem value={String(aIndex)} id={`q${qIndex}a${aIndex}`} />
                  <Label htmlFor={`q${qIndex}a${aIndex}`}>{ans}</Label>
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
