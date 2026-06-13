import { NextResponse } from "next/server";

export async function POST(
  req: Request
) {
  const { name } =
    await req.json();

  const response =
    await fetch(
      `https://boardgamegeek.com/xmlapi2/search?query=${encodeURIComponent(
        name
      )}&type=boardgame`
    );

  const text =
    await response.text();

  return NextResponse.json({
    success: true,
    result: text.substring(
      0,
      500
    ),
  });
}