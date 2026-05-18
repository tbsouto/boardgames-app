import "dotenv/config";
import { prisma } from "@/lib/prisma";

async function main() {
  await prisma.game.createMany({
    data: [
      {
        name: "Catan",
        description:
          "Juego de comercio y estrategia.",
        minAge: 10,
        players: "3-4",
        time: "60-120 min",
        image: "/images/catan.jpg",
      },
      {
        name: "Wingspan",
        description:
          "Colecciona aves y crea hábitats.",
        minAge: 10,
        players: "1-5",
        time: "40-70 min",
        image: "/images/wingspan.jpg",
      },
    ],
  });

  console.log("🌱 Seed completado");
}

main();