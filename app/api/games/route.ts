import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const existing =
    await prisma.game.findMany({
      where: {
        name: {
          contains: body.name.trim(),
        },
      },
    });
  
  const duplicate =
    existing.find(
      game =>
        game.name.trim().toLowerCase() ===
        body.name.trim().toLowerCase()
    );
  
  if (duplicate) {
  
    return Response.json(
      {
        error:
          "Ese juego ya existe",
      },
      {
        status: 400,
      }
    );
  
  }
  
    const game = await prisma.game.create({
      data: {
        name: body.name,
        description: body.description,
        minAge: Number(body.minAge),
        players: body.players,
        time: body.time,
        image: body.image,
      },
    });

    return NextResponse.json(game);
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      { error: "Error creando juego" },
      { status: 500 }
    );
  }
}

export async function DELETE(req: Request) {
  try {
    const { searchParams } = new URL(req.url);

    const id = searchParams.get("id");

    if (!id) {
      return NextResponse.json(
        { error: "ID requerido" },
        { status: 400 }
      );
    }

    await prisma.game.delete({
      where: {
        id: Number(id),
      },
    });

    return NextResponse.json({
      success: true,
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      { error: "Error eliminando juego" },
      { status: 500 }
    );
  }
}

export async function PUT(req: Request) {
  try {
    const body = await req.json();

    const updatedGame =
      await prisma.game.update({
        where: {
          id: Number(body.id),
        },
        data: {
          name: body.name,
          description: body.description,
          minAge: Number(body.minAge),
          players: body.players,
          time: body.time,
          image: body.image,
        },
      });

    return NextResponse.json(updatedGame);
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      { error: "Error actualizando juego" },
      { status: 500 }
    );
  }
}

export async function PATCH(req: Request) {
  try {
    const body = await req.json();

    const game = await prisma.game.update({
      where: {
        id: Number(body.id),
      },
      data: {
        ...(body.favorite !== undefined && {
          favorite: body.favorite,
        }),
      
        ...(body.rating !== undefined && {
          rating: Number(body.rating),
        }),
      
        ...(body.notes !== undefined && {
          notes: body.notes,
        }),
      }
    });

    return NextResponse.json(game);
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      { error: "Error actualizando favorito" },
      { status: 500 }
    );
  }
}