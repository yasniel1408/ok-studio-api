import type { PrismaClient, User } from '@prisma/client';

type ResolverContext = {
  orm: PrismaClient;
};

export const findAllUsers = (
  parent: unknown,
  args: unknown,
  context: ResolverContext
): Promise<User[]> => {
  return context.orm.user.findMany();
};

export async function createUser(
  parent: unknown,
  args: any,
  context: ResolverContext
): Promise<User> {
  const user = await context.orm.user.create({ data: args?.input });
  return user;
}

export const userResolver: Record<keyof User, (parent: User) => unknown> = {
  id: (parent) => parent.id,
  name: (parent) => parent.name,
  email: (parent) => parent.email,
  password: (parent) => parent.password,
  createdAt: (parent) => parent.createdAt,
  updatedAt: (parent) => parent.updatedAt,
  roleId: (parent) => parent.roleId
};

export default {
  Query: {
    findAllUsers
  },
  Mutation: {
    createUser
  },
  User: userResolver
};
