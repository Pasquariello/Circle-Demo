import { fetchSingleSpace } from "@/app/lib/data";
import CourseSections from "@/app/ui/spaces/course-accordian/sections-container";
import { CourseProgressBar } from "@/app/ui/spaces/progress-bar";
import { CheckCircleIcon } from "@heroicons/react/24/outline";

export default async function Page({params}: {
    params: Promise<{ course_id: number }>
  }) {

    const course_id = (await params).course_id;

    const course = await fetchSingleSpace(course_id);

    if (!course) {
        return (
            <div>No Course data</div>
        )
    }

    const percent_complete = Number((course?.course_percent_completed * 100).toFixed(0));
    const { name, total_lesson_count, total_lessons_completed } = course;
    const total_section_count = course.course_sections.length;
    
    return (
        <div>
            <h3 className="text-3xl md:text-3xl mb-4">{name}</h3>
            
            <div className="my-8 p-8">
                <CourseProgressBar value={percent_complete} complete={total_lessons_completed} total={total_lesson_count} />
            </div>

                <div className="mb-6">
                <h4 className="text-xl md:text-xl mb-2"> Course Content </h4>
                <p className="text-md md:text-md text-gray-500">{total_section_count} Sections - {total_lesson_count} Lessons</p>
                </div>

                <CourseSections course_id={course_id} course_sections={course.course_sections} />
  
        </div>
    );
}