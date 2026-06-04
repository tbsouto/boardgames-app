import { auth } from "@/auth";
import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST(
    req: Request
) {
    const session = await auth();

    if (!session) {

        return NextResponse.json(
            { error: "Unauthorized" },
            { status: 401 }
        );

    }
    try {

        const body =
            await req.json();
        const games =
            body.games || [];
        if (
            !Array.isArray(games)
        ) {

            return NextResponse.json(
                {
                    error:
                        "Backup inválido",
                },
                {
                    status: 400,
                }
            );

        }

        for (const game of games) {
            const existingGame =
                await prisma.game.findFirst({
                    where: {
                        name: game.name,
                    },
                });

            if (existingGame) {
                continue;
            }
            const createdGame =
                await prisma.game.create({

                    data: {

                        name: game.name,

                        description:
                            game.description,

                        minAge:
                            game.minAge,

                        players:
                            game.players,

                        time:
                            game.time,

                        image:
                            game.image,

                        favorite:
                            game.favorite,

                        category:
                            game.category,

                        rating:
                            game.rating,

                        notes:
                            game.notes,

                    },

                });

            if (
                game.expansions?.length
            ) {

                await prisma.expansion.createMany({

                    data:
                        game.expansions.map(
                            (
                                expansion: any
                            ) => ({

                                name:
                                    expansion.name,

                                gameId:
                                    createdGame.id,

                            })
                        ),

                });

            }

            if (
                game.sessions?.length
            ) {

                await prisma.playSession.createMany({

                    data:
                        game.sessions.map(
                            (
                                session: any
                            ) => ({

                                date:
                                    new Date(
                                        session.date
                                    ),

                                players:
                                    session.players,

                                notes:
                                    session.notes,

                                gameId:
                                    createdGame.id,

                            })
                        ),

                });

            }

        }

        return NextResponse.json({
            success: true,
        });

    } catch (error) {

        console.error(error);

        return NextResponse.json(
            {
                error:
                    "Error restaurando backup",
            },
            {
                status: 500,
            }
        );

    }

}