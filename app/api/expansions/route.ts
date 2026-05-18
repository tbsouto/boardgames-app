import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(req: Request) {

    const { searchParams } =
        new URL(req.url);

    const gameId =
        searchParams.get("gameId");

    const expansions =

        await prisma.expansion.findMany({

            where: {
                gameId: Number(
                    gameId
                )
            }

        });

    return NextResponse.json(
        expansions
    );

}


export async function POST(req: Request) {

    const body =
        await req.json();

    const expansion =

        await prisma.expansion.create({

            data: {

                name:
                    body.name,

                gameId:
                    Number(
                        body.gameId
                    )

            }

        });

    return NextResponse.json(
        expansion
    );

}


export async function DELETE(req: Request) {

    const { searchParams } =
        new URL(req.url);

    const id =
        searchParams.get("id");

    await prisma.expansion.delete({

        where: {
            id: Number(id)
        }

    });

    return NextResponse.json({
        success: true
    });

}