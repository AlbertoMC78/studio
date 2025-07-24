'use client';

import { useState } from 'react';
import { tutorChat } from '@/ai/flows/tutor-chat';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Loader2, User, Bot, Send } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

type Message = {
  role: 'user' | 'model';
  content: string;
};

export function TutorChat({ lessonContent }: { lessonContent: string }) {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage: Message = { role: 'user', content: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      const result = await tutorChat({
        lessonContent,
        chatHistory: messages,
        question: input,
      });
      const modelMessage: Message = { role: 'model', content: result.response };
      setMessages((prev) => [...prev, modelMessage]);
    } catch (error) {
      console.error('Tutor chat failed:', error);
      const errorMessage: Message = {
        role: 'model',
        content: "I'm sorry, but I'm having trouble connecting right now. Please try again in a moment.",
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Card className="shadow-lg mt-8">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 font-headline text-primary">
          <Bot />
          WebPro-Tutor
        </CardTitle>
        <CardDescription>
          ¿Tienes alguna duda sobre esta lección? ¡Pregúntame!
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col h-[400px]">
          <ScrollArea className="flex-grow p-4 border rounded-md mb-4 bg-muted/20">
            <div className="space-y-4">
              {messages.length === 0 && (
                 <div className="text-center text-muted-foreground py-8">
                    <p>Puedes empezar preguntando algo como:</p>
                    <p className="font-semibold mt-1">"¿Puedes explicarme el box model con una analogía?"</p>
                 </div>
              )}
              {messages.map((msg, index) => (
                <div
                  key={index}
                  className={cn(
                    'flex items-start gap-3',
                    msg.role === 'user' ? 'justify-end' : 'justify-start'
                  )}
                >
                  {msg.role === 'model' && (
                    <Avatar className="w-8 h-8">
                      <AvatarFallback><Bot size={20}/></AvatarFallback>
                    </Avatar>
                  )}
                  <div
                    className={cn(
                      'max-w-[75%] rounded-lg p-3 text-sm',
                      msg.role === 'user'
                        ? 'bg-primary text-primary-foreground'
                        : 'bg-muted text-muted-foreground'
                    )}
                  >
                    {msg.content}
                  </div>
                  {msg.role === 'user' && (
                    <Avatar className="w-8 h-8">
                      <AvatarFallback><User size={20}/></AvatarFallback>
                    </Avatar>
                  )}
                </div>
              ))}
              {isLoading && (
                 <div className="flex items-start gap-3 justify-start">
                    <Avatar className="w-8 h-8">
                      <AvatarFallback><Bot size={20}/></AvatarFallback>
                    </Avatar>
                    <div className="bg-muted text-muted-foreground rounded-lg p-3 text-sm">
                        <Loader2 className="h-5 w-5 animate-spin" />
                    </div>
                </div>
              )}
            </div>
          </ScrollArea>
          <form onSubmit={handleSendMessage} className="flex items-center gap-2">
            <Input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Escribe tu pregunta aquí..."
              disabled={isLoading}
              autoComplete="off"
            />
            <Button type="submit" disabled={isLoading || !input.trim()} size="icon">
              <Send />
            </Button>
          </form>
        </div>
      </CardContent>
    </Card>
  );
}
