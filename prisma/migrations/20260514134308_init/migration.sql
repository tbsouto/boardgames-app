-- CreateTable
CREATE TABLE "Game" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "minAge" INTEGER NOT NULL,
    "players" TEXT NOT NULL,
    "time" TEXT NOT NULL,
    "image" TEXT NOT NULL
);
