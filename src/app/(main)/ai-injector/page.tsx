'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { injectAiContent } from '@/ai/flows/content-injection';
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
import { Loader2, Sparkles } from 'lucide-react';

const formSchema = z.object({
  moduleName: z.string().min(1, 'Module name is required.'),
  className: z.string().min(1, 'Class name is required.'),
  contentPrompt: z.string().min(10, 'Prompt must be at least 10 characters.'),
});

export default function AiInjectorPage() {
  const [generatedContent, setGeneratedContent] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      moduleName: '',
      className: '',
      contentPrompt: '',
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true);
    setGeneratedContent('');
    try {
      const result = await injectAiContent(values);
      setGeneratedContent(result.content);
    } catch (error) {
      console.error('Failed to inject content:', error);
      setGeneratedContent('Error: Could not generate content.');
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <Card className="shadow-lg">
        <CardHeader>
          <CardTitle className="font-headline text-3xl text-primary flex items-center gap-2">
            <Sparkles /> AI Content Injector
          </CardTitle>
          <CardDescription>
            Generate educational content for your course modules.
          </CardDescription>
        </CardHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <CardContent className="space-y-4">
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
