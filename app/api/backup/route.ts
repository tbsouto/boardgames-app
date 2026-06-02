import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {

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

}