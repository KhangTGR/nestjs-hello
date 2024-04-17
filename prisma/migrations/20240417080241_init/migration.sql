-- CreateEnum
CREATE TYPE "Theme" AS ENUM ('RED', 'BLUE', 'GREEN');

-- CreateTable
CREATE TABLE "School" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "theme" "Theme" NOT NULL,
    "logo" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "School_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "School_name_key" ON "School"("name");

-- CreateIndex
CREATE UNIQUE INDEX "School_email_key" ON "School"("email");

-- CreateIndex
CREATE UNIQUE INDEX "School_address_key" ON "School"("address");

-- CreateIndex
CREATE UNIQUE INDEX "School_phone_key" ON "School"("phone");

-- CreateIndex
CREATE UNIQUE INDEX "School_logo_key" ON "School"("logo");
