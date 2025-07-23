'use client';

import { useState, useEffect } from 'react';
import { useAuth } from '@/context/auth-context';
import { generateCertificate } from '@/ai/flows/generate-certificate';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Loader2, Download, AlertCircle } from 'lucide-react';
import Image from 'next/image';

export default function CertificatePage() {
  const { user } = useAuth();
  const [certificateUrl, setCertificateUrl] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (user?.email) {
      handleGenerateCertificate();
    }
  }, [user]);

  const handleGenerateCertificate = async () => {
    if (!user?.email) return;
    
    setIsLoading(true);
    setError(null);
    try {
      const result = await generateCertificate({
        // Using email as the name for simplicity, can be changed to a display name if available
        studentName: user.email.split('@')[0] || 'Student',
      });
      setCertificateUrl(result.certificateImage);
    } catch (e) {
      console.error(e);
      setError('Failed to generate certificate. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleDownload = () => {
    if (!certificateUrl) return;
    const link = document.createElement('a');
    link.href = certificateUrl;
    link.download = 'WebDevPro-Certificate.png';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="container mx-auto max-w-4xl py-12">
      <Card className="shadow-2xl">
        <CardHeader className="text-center">
          <CardTitle className="font-headline text-4xl text-primary">Your Certificate of Completion</CardTitle>
          <CardDescription>
            Congratulations on successfully completing the Master Web Developer Course.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="relative aspect-[16/11] w-full overflow-hidden rounded-lg border-4 border-primary/20 bg-muted/50">
            {isLoading && (
              <div className="flex h-full w-full flex-col items-center justify-center gap-4">
                <Loader2 className="h-16 w-16 animate-spin text-primary" />
                <p className="text-muted-foreground">Generating your personalized certificate...</p>
              </div>
            )}
            {error && (
              <div className="flex h-full w-full flex-col items-center justify-center gap-4 text-destructive">
                 <AlertCircle className="h-16 w-16" />
                 <p className="font-semibold">{error}</p>
                 <Button onClick={handleGenerateCertificate}>Try Again</Button>
              </div>
            )}
            {certificateUrl && !isLoading && (
              <Image
                src={certificateUrl}
                alt="Certificate of Completion"
                layout="fill"
                objectFit="contain"
                className="transition-opacity duration-500 ease-in-out"
                onLoadingComplete={(e) => e.classList.remove('opacity-0')}
              />
            )}
          </div>
          {certificateUrl && !isLoading && (
             <div className="mt-6 flex justify-center">
                <Button size="lg" onClick={handleDownload}>
                   <Download className="mr-2 h-5 w-5" />
                   Download Certificate
                </Button>
             </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
