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
    if (
        !body.name?.trim()
    ) {

        return NextResponse.json(
            {
                error:
                    "Nombre requerido"
            },
            {
                status: 400
            }
        );

    }
    const existing =
        await prisma.expansion.findFirst({

            where: {
                gameId:
                    Number(body.gameId),

                name:
                    body.name.trim(),
            },

        });

    if (existing) {
        return NextResponse.json(
            {
                error:
                    "La expansión ya existe"
            },
            {
                status: 400
            }
        );

    }
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