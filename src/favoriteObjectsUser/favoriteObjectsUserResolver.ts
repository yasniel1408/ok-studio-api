import type { FavoriteObjectsUser, PrismaClient, User } from '@prisma/client';
import { ResolverParent } from '../common/@types/ResolverParent';
import verifyIfItIsAdmin from '../common/middlewares/verifyIfItIsAdmin';

type ResolverContext = {
  orm: PrismaClient;
  user: User;
};

export const findAllFavoriteObjectsUser = (
  parent: ResolverParent,
  args: any,
  context: ResolverContext
): Promise<FavoriteObjectsUser[]> => {
  return (
    verifyIfItIsAdmin({ context }) &&
    context.orm.favoriteObjectsUser.findMany({
      include: {
        user: true,
        object: true
      }
    })
  );
};

export const createFavoriteObjectsUser = async (
  parent: ResolverParent,
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
  id: ({ id }) => id,
  objectId: ({ objectId }) => objectId,
  userId: ({ userId }) => userId,
  createdAt: ({ createdAt }) => createdAt,
  updatedAt: ({ updatedAt }) => updatedAt
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
