import { PrismaClient } from "@prisma/client";

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined;
};

// Make sure a string exists in the environment before Prisma tries to read it during builds
if (!process.env.DATABASE_URL) {
  process.env.DATABASE_URL = "postgresql://dummy_url_for_build_purposes";
}

export const db = globalForPrisma.prisma ?? new PrismaClient();

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = db;