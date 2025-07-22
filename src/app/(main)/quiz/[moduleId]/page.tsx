import { courseData } from '@/lib/course-data';
import { notFound } from 'next/navigation';
import { QuizClient } from '@/components/quiz-client';

export default function QuizPage({ params }: { params: { moduleId: string } }) {
  const module = courseData.find((m) => m.id === params.moduleId);

  if (!module) {
    notFound();
  }

  const moduleContent = module.classes.map(c => `Class: ${c.title}\nContent: ${c.content}`).join('\n\n');

  return (
    <div>
      <QuizClient moduleContent={moduleContent} moduleTitle={module.title} />
    </div>
  );
}
