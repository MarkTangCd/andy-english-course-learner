import Review from "./Review";
import { prisma } from "@/context/PrismaProvider";

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const words = await prisma.word.findMany({
    where: {
      course_id: Number(id),
    },
  });

  return (
    <div className="w-full h-[80vh] bg-[#decaaf] flex items-center p-10">
      <Review words={words} courseId={id} />
    </div>
  );
}
