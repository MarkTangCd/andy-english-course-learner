import { redirect } from "next/navigation";
import Link from "next/link";

import { getAudioUrl } from "@/utils";
import WordList from "@/components/WordList";

import "./styles.css";
import { prisma } from "@/context/PrismaProvider";

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  // Modified database query to include words
  const res = await prisma.course.findUnique({
    where: {
      id: parseInt(id),
    },
    include: {
      word: true, // Include related words
    },
  });

  if (!res) {
    redirect("/");
  }

  // Merge course data with words list
  const lesson = {
    ...res,
    list: res.word || [], // Use the included words as list
  };

  return (
    <div className="lesson-container">
      <div className="lesson-header">
        <div>Lesson: {lesson.name}</div>
        <Link href={`review/${id}`}>
          <button className="btn btn-active btn-accent">Review</button>
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
      <WordList words={lesson.list} />
    </div>
  );
}
