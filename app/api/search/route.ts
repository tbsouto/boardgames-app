import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);

  const query =
    searchParams.get("q") || "";
  console.log(
    process.env.DATABASE_URL
  );
  const games = await prisma.game.findMany({
    include: {
      sessions: {
        orderBy: {
          date: "desc",
        },
      },
      expansions: true
    },
    where: query?.trim()
      ? {
        name: {
          contains: query,
        },
      }
      : undefined,
    orderBy: {
      name: "asc",
    },
  });

  return NextResponse.json(games);
}