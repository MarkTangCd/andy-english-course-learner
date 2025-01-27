"use client";
import { useRouter } from "next/navigation";
import { BsArrowRightCircle } from "react-icons/bs";
import list from "@/data/index";

export default function Home() {
  const router = useRouter();

  return (
    <div className="w-full flex justify-between">
      <div className="w-[45%] bg-[#decaaf] flex flex-col p-3 box-border">
        <div className="text-xl font-bold text-[#ce282b]">Lessons</div>
        <ul className="w-full flex justify-around flex-wrap gap-x-4 mt-3">
          {list.map((item) => (
            <li
              key={item.id}
              className="flex-1 p-5 bg-[#0d262c] text-[#decaaf] text-base flex justify-between cursor-pointer"
              onClick={() => router.push(`/lesson/${item.id}`)}
            >
              <div>{item.name}</div>
              <BsArrowRightCircle />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
