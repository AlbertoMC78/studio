'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { searchCourse } from '@/ai/flows/search-course';
import type { SearchCourseOutput } from '@/ai/flows/search-course';
import { courseData } from '@/lib/course-data';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Form, FormControl, FormField, FormItem, FormLabel } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Loader2, Search, FileText } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

const formSchema = z.object({
  query: z.string().min(3, 'Search query must be at least 3 characters.'),
});

// Pre-process course data into a single string for the AI
const courseContentString = courseData
  .map(
    (module) => `
Module ID: ${module.id}
Module Title: ${module.title}
${module.classes
  .map(
    (lesson) => `
  Class ID: ${lesson.id}
  Class Title: ${lesson.title}
  Class Content: ${lesson.content}
`
  )
  .join('')}
`
  )
  .join('---\n');


export default function SearchPage() {
  const [searchResults, setSearchResults] = useState<SearchCourseOutput['results']>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      query: '',
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true);
    setError(null);
    setSearchResults([]);

    try {
      const result = await searchCourse({
        query: values.query,
        courseContent: courseContentString,
      });
      setSearchResults(result.results);
    } catch (e) {
      console.error('Search failed:', e);
      setError('An error occurred during the search. Please try again.');
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="space-y-8">
       <div>
        <h1 className="text-4xl font-bold font-headline text-primary flex items-center gap-3">
          <Search className="h-10 w-10" /> Buscador del Curso
        </h1>
        <p className="mt-2 text-lg text-muted-foreground">
          Encuentra rápidamente cualquier tema o concepto dentro del material del curso.
        </p>
      </div>
      
      <Card className="shadow-lg">
        <CardHeader>
            <CardTitle>Realizar una consulta</CardTitle>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="flex items-end gap-4">
              <FormField
                control={form.control}
                name="query"
                render={({ field }) => (
                  <FormItem className="flex-grow">
                    <FormLabel>¿Qué quieres encontrar?</FormLabel>
                    <FormControl>
                      <Input placeholder="e.g., ¿Qué es el box model en CSS?" {...field} />
                    </FormControl>
                  </FormItem>
                )}
              />
              <Button type="submit" disabled={isLoading} size="lg">
                {isLoading ? (
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                ) : (
                  <Search className="mr-2 h-4 w-4" />
                )}
                Buscar
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>
      
      <div className="mt-8">
        {isLoading && (
            <div className="flex items-center justify-center py-10">
                <Loader2 className="h-12 w-12 animate-spin text-primary" />
            </div>
        )}
        
        {error && (
            <Alert variant="destructive">
                <AlertTitle>Error</AlertTitle>
                <AlertDescription>{error}</AlertDescription>
            </Alert>
        )}

        {!isLoading && searchResults.length > 0 && (
            <div className="space-y-4">
                <h2 className="text-2xl font-bold font-headline text-primary">Resultados de la Búsqueda</h2>
                {searchResults.map((result, index) => (
                    <Card key={index} className="shadow-md">
                        <CardHeader>
                            <Link href={`/course/${result.moduleId}/${result.classId}`} className="hover:underline">
                                <CardTitle className="flex items-center gap-2 text-accent">
                                    <FileText /> {result.classTitle}
                                </CardTitle>
                            </Link>
                        </CardHeader>
                        <CardContent>
                            <blockquote className="border-l-4 border-primary pl-4 italic">
                                "{result.snippet}"
                            </blockquote>
                        </CardContent>
                    </Card>
                ))}
            </div>
        )}

        {!isLoading && !error && searchResults.length === 0 && form.formState.isSubmitted && (
             <Card className="text-center py-12">
                <CardContent>
                <h2 className="text-2xl font-semibold text-muted-foreground">
                    No se encontraron resultados
                </h2>
                <p className="mt-2 text-muted-foreground">
                    Intenta con otra consulta o revisa si hay errores de tipeo.
                </p>
                </CardContent>
            </Card>
        )}
      </div>
    </div>
  );
}
