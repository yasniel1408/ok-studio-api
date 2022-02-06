import type { FavoriteObjectsUser, PrismaClient, User } from '@prisma/client';
import verifyIfItIsAdmin from '../common/middlewares/verifyIfItIsAdmin';

type ResolverContext = {
  orm: PrismaClient;
  user: User;
};

export const findAllFavoriteObjectsUser = (
  parent: any,
  args: any,
  context: ResolverContext
): Promise<FavoriteObjectsUser[]> => {
  return verifyIfItIsAdmin({ context }) && context.orm.favoriteObjectsUser.findMany();
};

export const createFavoriteObjectsUser = async (
  parent: any,
  args: any,
  context: ResolverContext
): Promise<FavoriteObjectsUser> => {
  const data = args.input;
  const favoriteObjectsUser =
    verifyIfItIsAdmin({ context }) &&
    (await context.orm.favoriteObjectsUser.create({
      data
    }));
  return favoriteObjectsUser;
};

export const favoriteObjectsUserResolver: Record<
  keyof FavoriteObjectsUser,
  (parent: FavoriteObjectsUser) => unknown
> = {
  id: (parent) => parent.id,
  objectId: (parent) => parent.objectId,
  userId: (parent) => parent.userId,
  createdAt: (parent) => parent.createdAt,
  updatedAt: (parent) => parent.updatedAt
};

export default {
  Query: {
    findAllFavoriteObjectsUser
  },
  Mutation: {
    createFavoriteObjectsUser
  },
  FavoriteObjectsUser: favoriteObjectsUserResolver
};
