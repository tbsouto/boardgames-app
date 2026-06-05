import { auth } from "@/auth";
import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET(req: Request) {
  const session = await auth();

  if (!session) {

    return Response.json(
      { error: "Unauthorized" },
      { status: 401 }
    );

  }
  const { searchParams } = new URL(req.url);

  const query =
    searchParams.get("q") || "";

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
          mode: "insensitive",
        },
      }
      : undefined,
    orderBy: {
      name: "asc",
    },
  });

  return NextResponse.json(games);
}