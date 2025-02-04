import { prisma } from "@/context/PrismaProvider";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const { courseId } = await request.json();

  try {
    const review = await prisma.review.upsert({
      where: { course_id: courseId },
      create: {
        course_id: courseId,
        count: 1,
      },
      update: {
        count: {
          increment: 1,
        },
        updated_time: new Date(),
      },
    });

    return NextResponse.json(review);
  } catch (error) {
    console.error("Error updating review:", error);
    return NextResponse.json(
      { error: "Failed to update review" },
      { status: 500 }
    );
  }
}
