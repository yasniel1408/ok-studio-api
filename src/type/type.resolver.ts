import type { PrismaClient, Type, User } from '@prisma/client';

type ResolverContext = {
  orm: PrismaClient;
  user: User;
};

export const findAllTypes = (parent: any, args: any, context: ResolverContext): Promise<Type[]> => {
  const types = context.orm.type.findMany({
    include: { objects: true, contracts: true, sample_images: true }
  });
  return types;
};

export const createType = async (
  parent: any,
  args: any,
  context: ResolverContext
): Promise<Type> => {
  const data = args.input;
  const user = await context.orm.type.create({
    data
  });
  return user;
};

export const typeResolver: Record<keyof Type, (parent: Type) => unknown> = {
  id: (parent) => parent.id,
  name: (parent) => parent.name,
  createdAt: (parent) => parent.createdAt,
  updatedAt: (parent) => parent.updatedAt
};

export default {
  Query: {
    findAllTypes
  },
  Mutation: {
    createType
  },
  User: typeResolver
};
