import type { User } from '@prisma/client';
import { AuthenticationError } from 'apollo-server-core';
import { ResolverContext } from '../@types/ResolverContext';
import { ResolverParent } from '../@types/ResolverParent';
import newToken from '../common/jwt/newToken';
import verifyIfItIsAdmin from '../common/middlewares/verifyIfItIsAdmin';
import comparePasswords from '../common/password/comparePasswords';
import encryptPassword from '../common/password/encryptPassword';
import { UserCreateInput } from './@types/UserCreateInput';
import { UserFilterArgs } from './@types/UserFilterArgs';
import { UserLogin } from './@types/UserLogin';

export const findAllUsers = (
  parent: ResolverParent,
  args: UserFilterArgs,
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

export const signup = async (
  parent: ResolverParent,
  args: { input?: UserCreateInput },
  context: ResolverContext
): Promise<User> => {
  const { email, password, name } = args.input;
  const user = await context.orm.user.create({
    data: {
      name,
      email,
      password: await encryptPassword(password)
    }
  });
  return user;
};

export async function login(
  parent: ResolverParent,
  args: { input: UserLogin },
  context: ResolverContext
): Promise<string> {
  const { email, password } = args.input;
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
