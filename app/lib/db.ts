import { PrismaClient } from "@prisma/client";

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined;
};

// This safely instantiates Prisma and prevents crashes if the URL is temporarily missing during a build phase
export const db =
  globalForPrisma.prisma ??
  new PrismaClient({
    datasources: {
      db: {
        url: process.env.DATABASE_URL || "postgresql://dummy_url_for_build_purposes",
      },
    },
  });

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = db;