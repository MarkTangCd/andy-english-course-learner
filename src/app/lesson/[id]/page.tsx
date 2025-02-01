import { redirect } from "next/navigation";
import Link from "next/link";
import { getLessonByID } from "@/data";

import { getAudioUrl } from "@/utils";

import "./styles.css";
import { usePrismaContext } from "@/context/PrismaProvider";

export default async function Page({ params }: { params: { id: string } }) {
  const { id } = params;
  // Fetch lesson data from the database
  const res = await prisma.course.findUnique({
    where: {
      id: parseInt(id),
    },
  });

  // If lesson doesn't exist, redirect to home
  if (!res) {
    redirect("/");
  }

  const list = getLessonByID(Number(id));

  if (list.length === 0) {
    // doesn't have the lesson about the id
    redirect("/");
  }

  const lesson = list[0];

  return (
    <div className="lesson-container">
      <div className="lesson-header">
        <div>Lesson: {lesson.name}</div>
        <Link href={`review/${id}`}>
          <button className="btn">Review</button>
        </Link>
      </div>
      <div className="w-full flex gap-5 flex-wrap mt-8">
        {lesson.audio?.map((item) => (
          <div key={item} className="audio-item">
            <div className="text-sm text-[#0d262c]">{item}</div>
            <audio
              controls
              className="audio-controls"
              src={getAudioUrl(lesson.id, lesson.name, item)}
            ></audio>
          </div>
        ))}
      </div>
      <ul className="lesson-list">
        {lesson.list?.slice(0, 16).map((item) => (
          <li key={item.id} className="lesson-list-item">
            <div className="text-lg font-bold">{item.chinese}</div>
            <div>{item.english}</div>
          </li>
        ))}
      </ul>
    </div>
  );
}
