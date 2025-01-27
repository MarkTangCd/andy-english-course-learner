import { redirect } from "next/navigation";
import Link from "next/link";
import { getLessonByID } from "@/data";

import { getAudioUrl } from "@/utils";

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const id = (await params).id;
  const list = getLessonByID(Number(id));

  if (list.length === 0) {
    // doesn't have the lesson about the id
    redirect("/");
  }

  const lesson = list[0];

  return (
    <div className="w-full bg-[#decaaf] flex flex-col p-10">
      <div className="flex items-center gap-x-8 text-2xl font-bold text-[#ce282b]">
        <div>Lesson: {lesson.name}</div>
        <Link href={`review/${id}`}>
          <button className="btn">Review</button>
        </Link>
      </div>
      <div className="w-full flex gap-5 flex-wrap mt-8">
        {lesson.audio.map((item) => (
          <div key={item} className="w-[22%]">
            <div className="flex flex-col gap-2">
              <div className="text-sm text-[#0d262c]">{item}</div>
              <audio
                controls
                className="w-full"
                src={getAudioUrl(lesson.id, lesson.name, item)}
              ></audio>
            </div>
          </div>
        ))}
      </div>
      <ul className="w-full flex justify-around gap-5 flex-wrap mt-8">
        {lesson.list.slice(0, 16).map((item) => (
          <li
            key={item.id}
            className="w-[22%] p-2 bg-[#0d262c] flex flex-col gap-y-3 text-sm text-[#decaaf]"
          >
            <div className="text-lg font-bold">{item.chinese}</div>
            <div>{item.english}</div>
          </li>
        ))}
      </ul>
    </div>
  );
}
