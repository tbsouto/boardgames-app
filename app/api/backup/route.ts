import { auth } from "@/auth";
import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {

  const session = await auth();

  if (!session) {

    return NextResponse.json(
      { error: "Unauthorized" },
      { status: 401 }
    );

  }

  try {

    const games =
      await prisma.game.findMany({
        include: {
          sessions: true,
          expansions: true,
        },
        orderBy: {
          name: "asc",
        },
      });

    return NextResponse.json({
      exportedAt: new Date(),
      games,
    });

  } catch (error) {

    console.error(error);

    return NextResponse.json(
      {
        error:
          "Error generando backup",
      },
      {
        status: 500,
      }
    );

  }

}