-- CreateTable
CREATE TABLE "Vendor" (
    "Id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "bankAccountNo" TEXT NOT NULL,
    "bankName" TEXT NOT NULL,
    "addressLine1" TEXT,
    "addressLine2" TEXT,
    "city" TEXT,
    "country" TEXT,
    "zipCode" TEXT,

    CONSTRAINT "Vendor_pkey" PRIMARY KEY ("Id")
);
