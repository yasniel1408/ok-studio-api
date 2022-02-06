import type { Prisma, User } from '@prisma/client';
import { AuthenticationError } from 'apollo-server-core';
import { ResolverContext } from '../@types/ResolverContext';
import newToken from '../common/jwt/newToken';
import verifyIfItIsAdmin from '../common/middlewares/verifyIfItIsAdmin';
import comparePasswords from '../common/password/comparePasswords';
import encryptPassword from '../common/password/encryptPassword';

export const findAllUsers = (
  parent: any,
  args: { skip?: number; take?: number; where?: Prisma.UserWhereInput },
  context: ResolverContext
): Promise<User[]> => {
  return (
    verifyIfItIsAdmin({ context }) &&
    context.orm.user.findMany({
      skip: args?.skip,
      take: args?.take,
      where: args?.where
    })
  );
};

export const signup = async (parent: any, args: any, context: ResolverContext): Promise<User> => {
  const data = args.input;
  const { password } = data;
  const user = await context.orm.user.create({
    data: {
      ...data,
      password: await encryptPassword(password)
    }
  });
  return user;
};

export async function login(parent: any, args: any, context: ResolverContext): Promise<string> {
  const data = args.input;
  const { email, password } = data;
  const user = await context.orm.user.findFirst({
    where: {
      email
    }
  });
  if (!user) {
    throw new AuthenticationError('No user with that email');
  }
  const valid = await comparePasswords(password, user.password);
  if (!valid) {
    throw new AuthenticationError('Incorrect password');
  }
  return newToken(user);
}

export const userResolver: Record<keyof User, (parent: User) => unknown> = {
  id: (parent) => parent.id,
  name: (parent) => parent.name,
  email: (parent) => parent.email,
  password: (parent) => parent.password,
  createdAt: (parent) => parent.createdAt,
  updatedAt: (parent) => parent.updatedAt,
  role: (parent) => parent.role
};

export default {
  Query: {
    findAllUsers
  },
  Mutation: {
    signup,
    login
  },
  User: userResolver
};
