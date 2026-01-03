/*
  Warnings:

  - Made the column `species` on table `pet` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "pet" ALTER COLUMN "species" SET NOT NULL,
ALTER COLUMN "breed" DROP DEFAULT,
ALTER COLUMN "breed" SET DATA TYPE TEXT;
