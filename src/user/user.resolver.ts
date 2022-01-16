import type { PrismaClient, User } from '@prisma/client';
import bcrypt from 'bcrypt';
import jsonwebtoken from 'jsonwebtoken';

type ResolverContext = {
  orm: PrismaClient;
};

export const findAllUsers = (parent: any, args: any, context: ResolverContext): Promise<User[]> => {
  return context.orm.user.findMany();
};

export const signup = async (parent: any, args: any, context: ResolverContext): Promise<User> => {
  const data = args.input;
  const { password } = data;
  const user = await context.orm.user.create({
    data: {
      ...data,
      password: await bcrypt.hash(password, 10)
      // roleId: '1'
    }
  });
  return user;
};

export async function login(parent: any, args: any, context: ResolverContext): Promise<User> {
  const data = args.input;
  const { email, password } = data;
  const user = await context.orm.user.findFirst({
    where: {
      email
    }
  });
  if (!user) {
    throw new Error('No user with that email');
  }
  const valid = await bcrypt.compare(password, user.password);
  if (!valid) {
    throw new Error('Incorrect password');
  }
  return jsonwebtoken.sign({ user }, process.env.JWT_SECRET, {
    expiresIn: '1d'
  });
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
    signup,
    login
  },
  User: userResolver
};
