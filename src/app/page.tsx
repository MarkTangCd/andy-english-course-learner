import LessonLink from "@/components/LessonLink";
import { prisma } from "@/context/PrismaProvider";

export default async function Home() {
  const courses = await prisma.course.findMany({
    orderBy: [
      {
        id: "desc",
      },
    ],
  });
  const reviewCourses = await prisma.review.findMany({
    include: {
      course: true,
    },
  });

  const reviewNeededCourses = reviewCourses
    .map((item) => {
      return {
        ...item.course,
        reviewCount: item.count,
        lastReviewed: item.updated_time,
      };
    })
    .filter((item) => {
      const daysSinceReview = Math.floor(
        (Date.now() - item.lastReviewed.getTime()) / (1000 * 60 * 60 * 24)
      );
      return item.reviewCount > 0 && daysSinceReview > 20;
    });

  return (
    <main className="p-10">
      <h1 className="text-4xl font-bold mb-8 text-[#decaaf]">All Lessons</h1>
      <div className="flex flex-wrap gap-5 mb-12">
        {courses.map((course) => (
          <LessonLink key={course.id} course={course} />
        ))}
      </div>

      <h2 className="text-3xl font-bold mb-8 text-[#decaaf]">Need Review</h2>
      <div className="flex flex-wrap gap-5">
        {reviewNeededCourses.map((course) => (
          <LessonLink
            key={course.id}
            course={course}
            badgeText={`Reviews: ${course.reviewCount}`}
          />
        ))}
      </div>
    </main>
  );
}
