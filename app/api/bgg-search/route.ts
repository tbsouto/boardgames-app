import { NextResponse }
from "next/server";

import {
  parseStringPromise
} from "xml2js";

export async function GET(
  req: Request
) {

  try {

    const {
      searchParams
    } = new URL(req.url);

    const query =
      searchParams.get("q");

    if (!query) {

      return NextResponse.json([]);

    }

    const response =
      await fetch(

        `https://boardgamegeek.com/xmlapi2/search?query=${encodeURIComponent(query)}&type=boardgame`,

        {
          headers: {
            "User-Agent":
              "Mozilla/5.0",
          },
        }

      );

    const xml =
      await response.text();

    console.log(xml);

    const parsed =
      await parseStringPromise(xml);

    const items =
      parsed?.items?.item || [];

    const results =
      items.slice(0, 10).map(
        (item: any) => ({

          id:
            item.$.id,

          name:
            item.name?.[0]?.$
              ?.value || "Unknown",

        })
      );

    return NextResponse.json(
      results
    );

  } catch (error) {

    console.error(
        "BGG ERROR FULL:",
        error
      );

    return NextResponse.json(
      [],
      { status: 500 }
    );

  }

}