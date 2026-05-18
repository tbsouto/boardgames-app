import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function POST(req: Request) {

    const body = await req.json();

    const session = await prisma.playSession.create({

        data: {

            gameId: Number(
                body.gameId
            ),

            players:
                body.players,

            notes:
                body.notes

        }

    });

    return NextResponse.json(
        session
    );

}
export async function GET(req: Request) {

    const { searchParams } =
      new URL(req.url);
  
    const gameId =
      searchParams.get("gameId");
  
    const sessions =
      await prisma.playSession.findMany({
  
        where:{
          gameId:Number(gameId)
        },
  
        orderBy:{
          date:"desc"
        }
  
      });
  
    return NextResponse.json(
      sessions
    );
  
  }
  export async function DELETE(req:Request){

    const {searchParams}=
    new URL(req.url);
    
    const id=
    searchParams.get("id");
    
    await prisma.playSession.delete({
    
    where:{
    id:Number(id)
    }
    
    });
    
    return NextResponse.json({
    success:true
    });
    
    }