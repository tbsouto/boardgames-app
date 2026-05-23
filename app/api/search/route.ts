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
    include:{
      sessions:true,
      expansions:true
    },
    where: {
      name: {
        contains: query,
      },
    },
  });

  return NextResponse.json(games);
}