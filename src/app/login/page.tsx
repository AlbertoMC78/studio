'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  AuthError,
} from 'firebase/auth';
import { auth } from '@/lib/firebase';
import { useRouter } from 'next/navigation';

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
import { BookOpen, Loader2 } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { useToast } from '@/hooks/use-toast';

const formSchema = z.object({
  email: z.string().email('Invalid email address.'),
  password: z.string().min(6, 'Password must be at least 6 characters.'),
});

type Action = 'login' | 'signup';

export default function LoginPage() {
  const [action, setAction] = useState<Action>('login');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true);
    setError(null);

    const { email, password } = values;

    try {
      if (action === 'login') {
        await signInWithEmailAndPassword(auth, email, password);
      } else {
        // For the first user, we can just create an account.
        // In a multi-user scenario, this would be a protected admin action.
        await createUserWithEmailAndPassword(auth, email, password);
      }
      toast({
        title: 'Success!',
        description: "You've successfully logged in.",
      });
      router.push('/');
    } catch (e) {
      const authError = e as AuthError;
      let errorMessage = 'An unexpected error occurred. Please try again.';
      if (authError.code === 'auth/user-not-found') {
        errorMessage = 'No user found with this email. You can sign up instead.';
      } else if (authError.code === 'auth/wrong-password') {
        errorMessage = 'Incorrect password. Please try again.';
      } else if (authError.code === 'auth/email-already-in-use') {
        errorMessage = 'This email is already in use. Please log in.';
      }
      setError(errorMessage);
      console.error(authError);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background px-4">
       <Card className="w-full max-w-md shadow-2xl">
        <CardHeader className="text-center">
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
                <BookOpen className="h-8 w-8" />
            </div>
          <CardTitle className="font-headline text-3xl text-primary">
            Master Web Developer
          </CardTitle>
          <CardDescription>
            {action === 'login'
              ? 'Sign in to access your course'
              : 'Create an account to begin your journey'}
          </CardDescription>
        </CardHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <CardContent className="space-y-4">
              {error && (
                  <Alert variant="destructive">
                      <AlertDescription>{error}</AlertDescription>
                  </Alert>
              )}
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input
                        type="email"
                        placeholder="alberto.montero@example.com"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <Input type="password" placeholder="••••••••" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </CardContent>
            <CardFooter className="flex flex-col gap-4">
              <Button type="submit" disabled={isLoading} className="w-full" size="lg">
                {isLoading ? (
                  <Loader2 className="mr-2 animate-spin" />
                ) : (
                  action === 'login' ? 'Login' : 'Sign Up'
                )}
              </Button>
               <p className="text-sm text-muted-foreground">
                {action === 'login' ? "Don't have an account? " : "Already have an account? "}
                <button
                  type="button"
                  onClick={() => {
                    setAction(action === 'login' ? 'signup' : 'login');
                    setError(null);
                    form.reset();
                  }}
                  className="font-medium text-primary hover:underline"
                >
                  {action === 'login' ? 'Sign up' : 'Login'}
                </button>
              </p>
            </CardFooter>
          </form>
        </Form>
      </Card>
    </div>
  );
}
