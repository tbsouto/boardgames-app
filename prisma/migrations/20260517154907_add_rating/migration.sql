-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Game" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "minAge" INTEGER NOT NULL,
    "players" TEXT NOT NULL,
    "time" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "favorite" BOOLEAN NOT NULL DEFAULT false,
    "category" TEXT NOT NULL DEFAULT 'General',
    "rating" INTEGER NOT NULL DEFAULT 0
);
INSERT INTO "new_Game" ("category", "description", "favorite", "id", "image", "minAge", "name", "players", "time") SELECT "category", "description", "favorite", "id", "image", "minAge", "name", "players", "time" FROM "Game";
DROP TABLE "Game";
ALTER TABLE "new_Game" RENAME TO "Game";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
