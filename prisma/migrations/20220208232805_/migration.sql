/*
  Warnings:

  - You are about to drop the column `aceptado` on the `Appointment` table. All the data in the column will be lost.
  - You are about to drop the column `notas` on the `Appointment` table. All the data in the column will be lost.
  - Added the required column `accepted` to the `Appointment` table without a default value. This is not possible if the table is not empty.
  - Added the required column `notes` to the `Appointment` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Appointment" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "clientId" TEXT NOT NULL,
    "contractId" TEXT,
    "accepted" TEXT NOT NULL,
    "notes" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "Appointment_clientId_fkey" FOREIGN KEY ("clientId") REFERENCES "Client" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Appointment_contractId_fkey" FOREIGN KEY ("contractId") REFERENCES "Contract" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_Appointment" ("clientId", "contractId", "createdAt", "id", "updatedAt") SELECT "clientId", "contractId", "createdAt", "id", "updatedAt" FROM "Appointment";
DROP TABLE "Appointment";
ALTER TABLE "new_Appointment" RENAME TO "Appointment";
CREATE UNIQUE INDEX "Appointment_contractId_key" ON "Appointment"("contractId");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
