/*
  Warnings:

  - You are about to drop the `Productroduct` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "Productroduct";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "Product" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "price" TEXT DEFAULT '100$',
    "stock" INTEGER DEFAULT 1,
    "description" TEXT,
    "available" BOOLEAN DEFAULT true,
    "img" TEXT DEFAULT 'https://i.pinimg.com/564x/37/08/99/3708994bdca38cd8dbea509f233f3cf4.jpg'
);
