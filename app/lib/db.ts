import { PrismaClient } from "@prisma/client";

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined;
};

// Pass the datasourceUrl directly using the modern, correct Prisma configuration property
export const db =
  globalForPrisma.prisma ??
  new PrismaClient({
    datasourceUrl: process.env.DATABASE_URL || "postgresql://dummy_url_for_build_purposes",
  });

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = db;