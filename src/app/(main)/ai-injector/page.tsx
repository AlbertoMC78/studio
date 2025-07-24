'use client';

import { useState } from 'react';
import { useForm, useForm as useQuizForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { injectAiContent } from '@/ai/flows/content-injection';
import { generateQuiz, GenerateQuizOutput } from '@/ai/flows/generate-quiz';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Loader2, Sparkles, FileQuestion } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const contentFormSchema = z.object({
  moduleName: z.string().min(1, 'Module name is required.'),
  className: z.string().min(1, 'Class name is required.'),
  contentPrompt: z.string().min(10, 'Prompt must be at least 10 characters.'),
});

const quizFormSchema = z.object({
  moduleContent: z.string().min(50, 'Lesson content must be at least 50 characters.'),
});


function ContentGenerator() {
  const [generatedContent, setGeneratedContent] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<z.infer<typeof contentFormSchema>>({
    resolver: zodResolver(contentFormSchema),
    defaultValues: {
      moduleName: '',
      className: '',
      contentPrompt: '',
    },
  });

  async function onSubmit(values: z.infer<typeof contentFormSchema>) {
    setIsLoading(true);
    setGeneratedContent('');
    try {
      const result = await injectAiContent(values);
      setGeneratedContent(result);
    } catch (error) {
      console.error('Failed to inject content:', error);
      setGeneratedContent('Error: Could not generate content.');
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-6">
      <Card className="shadow-lg">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <CardContent className="space-y-4 pt-6">
              <FormField
                control={form.control}
                name="moduleName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Module Name</FormLabel>
                    <FormControl>
                      <Input placeholder="e.g., MÓDULO 1" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="className"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Class Name</FormLabel>
                    <FormControl>
                      <Input placeholder="e.g., ¿Cómo funciona la Web?" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="contentPrompt"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Content Prompt</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="e.g., Explain the client-server model with an analogy..."
                        className="min-h-[120px]"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </CardContent>
            <CardFooter>
              <Button type="submit" disabled={isLoading} size="lg">
                {isLoading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Generating...
                  </>
                ) : (
                  'Generate Content'
                )}
              </Button>
            </CardFooter>
          </form>
        </Form>
      </Card>
      <Card className="shadow-lg">
        <CardHeader>
          <CardTitle className="font-headline text-2xl text-primary">
            Generated Content
          </CardTitle>
          <CardDescription>
            Review the AI-generated content below.
          </CardDescription>
        </CardHeader>
        <CardContent>
          {isLoading ? (
             <div className="flex items-center justify-center h-48">
                 <Loader2 className="h-8 w-8 animate-spin text-primary" />
             </div>
          ) : generatedContent ? (
            <div
              className="prose max-w-none text-foreground prose-pre:bg-primary/5 prose-code:font-code"
              dangerouslySetInnerHTML={{ __html: generatedContent }}
            />
          ) : (
            <p className="text-muted-foreground text-center py-10">
              Your generated content will appear here.
            </p>
          )}
        </CardContent>
      </Card>
    </div>
  );
}

function QuizGenerator() {
  const [generatedQuiz, setGeneratedQuiz] = useState<GenerateQuizOutput['quiz'] | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const form = useQuizForm<z.infer<typeof quizFormSchema>>({
    resolver: zodResolver(quizFormSchema),
    defaultValues: {
      moduleContent: '',
    },
  });

  async function onSubmit(values: z.infer<typeof quizFormSchema>) {
    setIsLoading(true);
    setGeneratedQuiz(null);
    try {
      const result = await generateQuiz({ moduleContent: values.moduleContent, numQuestions: 5 });
      setGeneratedQuiz(result.quiz);
    } catch (error) {
      console.error('Failed to generate quiz:', error);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-6">
      <Card className="shadow-lg">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <CardContent className="space-y-4 pt-6">
              <FormField
                control={form.control}
                name="moduleContent"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Lesson Content</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Paste the full HTML content of the lesson here..."
                        className="min-h-[250px] font-mono text-xs"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </CardContent>
            <CardFooter>
              <Button type="submit" disabled={isLoading} size="lg">
                {isLoading ? (
                  <><Loader2 className="mr-2 h-4 w-4 animate-spin" /> Generating Quiz...</>
                ) : (
                  'Generate Quiz'
                )}
              </Button>
            </CardFooter>
          </form>
        </Form>
      </Card>
      <Card className="shadow-lg">
        <CardHeader>
          <CardTitle className="font-headline text-2xl text-primary">
            Generated Quiz
          </CardTitle>
          <CardDescription>
            Review the AI-generated quiz below.
          </CardDescription>
        </CardHeader>
        <CardContent>
          {isLoading && (
            <div className="flex items-center justify-center h-48">
              <Loader2 className="h-8 w-8 animate-spin text-primary" />
            </div>
          )}
          {generatedQuiz && (
            <div className="space-y-4">
              {generatedQuiz.map((q, index) => (
                <div key={index} className="p-4 border rounded-lg">
                  <p className="font-semibold">{index + 1}. {q.question}</p>
                  <ul className="mt-2 list-disc pl-5 space-y-1">
                    {q.answers.map((ans, ansIndex) => (
                      <li key={ansIndex} className={ansIndex === q.correctAnswerIndex ? 'font-bold text-green-600' : ''}>
                        {ans}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          )}
          {!isLoading && !generatedQuiz && (
            <p className="text-muted-foreground text-center py-10">
              Your generated quiz will appear here.
            </p>
          )}
        </CardContent>
      </Card>
    </div>
  );
}


export default function AiInjectorPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold font-headline text-primary flex items-center gap-3">
            <Sparkles className="h-10 w-10" /> AI Content Tools
        </h1>
        <p className="mt-2 text-lg text-muted-foreground">
            Use AI to accelerate course creation and generate learning materials.
        </p>
      </div>

       <Tabs defaultValue="content-generator" className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="content-generator">
            <Sparkles className="mr-2" /> Content Generator
          </TabsTrigger>
          <TabsTrigger value="quiz-generator">
            <FileQuestion className="mr-2" /> Quiz Generator
          </TabsTrigger>
        </TabsList>
        <TabsContent value="content-generator">
          <ContentGenerator />
        </TabsContent>
        <TabsContent value="quiz-generator">
           <QuizGenerator />
        </TabsContent>
      </Tabs>
    </div>
  );
}
