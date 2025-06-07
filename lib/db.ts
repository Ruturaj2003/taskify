import { PrismaClient } from '@prisma/client';

declare global {
  var prisma: PrismaClient | undefined;
}

// This is done because of HOT reload in NEXT , since it hot relaods there will be multiple times when the PrismaClient is initailzed which gives warnings , so this method is to prevent it
// Note : Global is Excluded from hot reload
export const db = globalThis.prisma || new PrismaClient();

if (process.env.NODE_ENV !== 'production') globalThis.prisma = db;
