"use client";
import { useRouter } from "next/navigation";
import { BsArrowRightCircle } from "react-icons/bs";

export default function LessonLink({ id, name }: { id: number; name: string }) {
  const router = useRouter();
  return (
    <li
      className="flex-1 p-5 bg-[#0d262c] text-[#decaaf] text-base flex justify-between cursor-pointer"
      onClick={() => router.push(`/lesson/${id}`)}
    >
      <div>{name}</div>
      <BsArrowRightCircle />
    </li>
  );
}
