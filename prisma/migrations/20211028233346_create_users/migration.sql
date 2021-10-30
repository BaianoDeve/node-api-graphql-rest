-- CreateTable
CREATE TABLE "users" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "username" TEXT NOT NULL,
    "discord_id" INTEGER NOT NULL,
    "avatar_url" TEXT NOT NULL,
    "email" TEXT
);
