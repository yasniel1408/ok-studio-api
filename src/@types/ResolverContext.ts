import { PrismaClient, User } from '@prisma/client';

export type ResolverContext = {
  orm: PrismaClient;
  user: User;
};
