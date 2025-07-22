import { courseData, CourseModule, CourseClass } from '@/lib/course-data';
import { notFound } from 'next/navigation';
import { NoteTaking } from '@/components/note-taking';
import { SaveButton } from '@/components/save-button';
import { Card, CardContent } from '@/components/ui/card';
import { AudioPlayer } from '@/components/audio-player';

export default function ClassPage({
  params,
}: {
  params: { moduleId: string; classId: string };
}) {
  const module = courseData.find((m) => m.id === params.moduleId);
  const lesson = module?.classes.find((c) => c.id === params.classId);

  if (!module || !lesson) {
    notFound();
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      <div className="lg:col-span-2 space-y-6">
        <div className="flex justify-between items-start gap-4">
          <div>
            <p className="text-sm font-semibold text-accent">{module.title}</p>
            <h1 className="text-4xl font-bold font-headline text-primary mt-1">
              {lesson.title}
            </h1>
          </div>
          <div className="flex gap-2 flex-shrink-0">
             <AudioPlayer lessonContent={lesson.content} />
             <SaveButton lessonId={lesson.id} lessonTitle={lesson.title} />
          </div>
        </div>

        <Card className="shadow-lg">
          <CardContent className="p-6">
            <div
              className="prose prose-lg max-w-none text-foreground prose-h1:font-headline prose-h1:text-primary prose-h2:font-headline prose-h2:text-primary/90 prose-pre:bg-primary/5 prose-pre:text-foreground prose-code:font-code"
              dangerouslySetInnerHTML={{ __html: lesson.content }}
            />
          </CardContent>
        </Card>
      </div>

      <div className="lg:col-span-1">
        <NoteTaking lessonId={lesson.id} />
      </div>
    </div>
  );
}
