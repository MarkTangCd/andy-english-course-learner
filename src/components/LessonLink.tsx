"use client";
import { useRouter } from "next/navigation";
import { BsArrowRightCircle } from "react-icons/bs";
import Link from "next/link";

export default function LessonLink({
  course,
  badgeText,
}: {
  course: Course;
  badgeText?: string;
}) {
  const router = useRouter();
  return (
    <Link
      href={`/lesson/${course.id}`}
      className="card w-96 bg-base-100 shadow-xl hover:shadow-2xl transition-shadow"
    >
      <div className="card-body">
        <h2 className="card-title">
          {course.name}
          {badgeText && <div className="badge badge-accent">{badgeText}</div>}
        </h2>
      </div>
    </Link>
  );
}
