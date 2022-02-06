/*
  Warnings:

  - You are about to drop the column `celular` on the `Client` table. All the data in the column will be lost.
  - You are about to drop the column `edad` on the `Client` table. All the data in the column will be lost.
  - You are about to drop the column `fijo` on the `Client` table. All the data in the column will be lost.
  - You are about to drop the column `notas` on the `Client` table. All the data in the column will be lost.
  - Added the required column `age` to the `Client` table without a default value. This is not possible if the table is not empty.
  - Added the required column `homePhone` to the `Client` table without a default value. This is not possible if the table is not empty.
  - Added the required column `mobile` to the `Client` table without a default value. This is not possible if the table is not empty.
  - Added the required column `notes` to the `Client` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Client" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "age" INTEGER NOT NULL,
    "mobile" TEXT NOT NULL,
    "homePhone" TEXT NOT NULL,
    "notes" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);
INSERT INTO "new_Client" ("createdAt", "id", "name", "updatedAt") SELECT "createdAt", "id", "name", "updatedAt" FROM "Client";
DROP TABLE "Client";
ALTER TABLE "new_Client" RENAME TO "Client";
CREATE UNIQUE INDEX "Client_name_key" ON "Client"("name");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
