/*
  Warnings:

  - A unique constraint covering the columns `[EMAIL]` on the table `USUARIOS` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `EMAIL` to the `USUARIOS` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "USUARIOS" ADD COLUMN     "EMAIL" VARCHAR(150) NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "USUARIOS_EMAIL_key" ON "USUARIOS"("EMAIL");
