
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
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const loginSchema = z.object({
  email: z.string().email('Invalid email address.'),
  password: z.string().min(6, 'Password must be at least 6 characters.'),
});

const signupSchema = z.object({
  email: z.string().email('Invalid email address.'),
  password: z.string().min(6, 'Password must be at least 6 characters.'),
  invitationCode: z.string().min(1, 'Invitation code is required.'),
});

const INVITATION_CODE = process.env.NEXT_PUBLIC_INVITATION_CODE;

function LoginForm() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();
  const { toast } = useToast();

  const form = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
    defaultValues: { email: '', password: '' },
  });

  async function onSubmit(values: z.infer<typeof loginSchema>) {
    setIsLoading(true);
    setError(null);
    try {
      await signInWithEmailAndPassword(auth, values.email, values.password);
      toast({ title: 'Success!', description: "You've successfully logged in." });
      router.push('/');
    } catch (e) {
      const authError = e as AuthError;
      setError('Invalid email or password. Please try again.');
      console.error(authError);
    } finally {
      setIsLoading(false);
    }
  }
  
  return (
      <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <CardContent className="space-y-4 pt-6">
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
                {isLoading ? <Loader2 className="mr-2 animate-spin" /> : 'Login'}
              </Button>
            </CardFooter>
          </form>
        </Form>
  );
}

function SignUpForm() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();
  const { toast } = useToast();

  const form = useForm<z.infer<typeof signupSchema>>({
    resolver: zodResolver(signupSchema),
    defaultValues: { email: '', password: '', invitationCode: '' },
  });

  if (!INVITATION_CODE || INVITATION_CODE === 'SET_YOUR_CODE_IN_FIREBASE') {
    return (
        <CardContent>
            <Alert variant="destructive">
                <AlertTitle>Registration Disabled</AlertTitle>
                <AlertDescription>
                    New user registration is not configured. Please contact the administrator.
                </AlertDescription>
            </Alert>
        </CardContent>
    )
  }

  async function onSubmit(values: z.infer<typeof signupSchema>) {
    setIsLoading(true);
    setError(null);

    if (values.invitationCode !== INVITATION_CODE) {
      setError('Invalid invitation code.');
      setIsLoading(false);
      return;
    }

    try {
      await createUserWithEmailAndPassword(auth, values.email, values.password);
      toast({ title: 'Welcome!', description: 'Your account has been created.' });
      router.push('/');
    } catch (e) {
      const authError = e as AuthError;
      if (authError.code === 'auth/email-already-in-use') {
        setError('This email is already in use. Please log in.');
      } else {
        setError('An unexpected error occurred. Please try again.');
      }
      console.error(authError);
    } finally {
      setIsLoading(false);
    }
  }

  return (
      <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <CardContent className="space-y-4 pt-6">
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
                      <Input type="email" placeholder="student@example.com" {...field} />
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
              <FormField
                control={form.control}
                name="invitationCode"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Invitation Code</FormLabel>
                    <FormControl>
                      <Input type="text" placeholder="Enter your invitation code" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </CardContent>
            <CardFooter className="flex flex-col gap-4">
              <Button type="submit" disabled={isLoading} className="w-full" size="lg">
                {isLoading ? <Loader2 className="mr-2 animate-spin" /> : 'Sign Up'}
              </Button>
            </CardFooter>
          </form>
        </Form>
  );
}

export default function LoginPage() {
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
            Access your course or sign up with an invitation code.
          </CardDescription>
        </CardHeader>
        <Tabs defaultValue="login" className="w-full">
            <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="login">Login</TabsTrigger>
                <TabsTrigger value="signup">Sign Up</TabsTrigger>
            </TabsList>
            <TabsContent value="login">
                <LoginForm />
            </TabsContent>
            <TabsContent value="signup">
                <SignUpForm />
            </TabsContent>
        </Tabs>
      </Card>
    </div>
  );
}
