import LessonLink from "@/components/LessonLink";
import { prisma } from "@/context/PrismaProvider";

export default async function Home() {
  const list = await prisma.course.findMany();

  return (
    <div className="w-full flex justify-between">
      <div className="w-[45%] bg-[#decaaf] flex flex-col p-3 box-border">
        <div className="text-xl font-bold text-[#ce282b]">Lessons</div>
        <ul className="w-full flex justify-around flex-wrap gap-x-4 mt-3">
          {list.map((item) => (
            <LessonLink key={item.id} id={item.id} name={item.name} />
          ))}
        </ul>
      </div>
    </div>
  );
}
