import { courseData } from '@/lib/course-data';
import { Accordion } from '@/components/ui/accordion';
import { CourseModuleItem } from '@/components/course-module';

export default function DashboardPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold font-headline text-primary">
          Master Web Developer Course
        </h1>
        <p className="mt-2 text-lg text-muted-foreground">
          De Cero a Full Stack + IA & Web3. Your complete learning journey.
        </p>
      </div>

      <Accordion type="single" collapsible className="w-full space-y-4">
        {courseData.map((module) => (
          <CourseModuleItem key={module.id} module={module} />
        ))}
      </Accordion>
    </div>
  );
}
