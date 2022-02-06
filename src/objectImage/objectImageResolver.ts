import type { ObjectImage } from '@prisma/client';
import { ResolverContext } from '../@types/ResolverContext';
import { ResolverParent } from '../@types/ResolverParent';
import verifyIfItIsAUser from '../common/middlewares/verifyIfItIsAUser';

export const findAllObjectImage = (
  parent: ResolverParent,
  args: any,
  context: ResolverContext
): Promise<ObjectImage[]> => {
  return verifyIfItIsAUser({ context }) && context.orm.objectImage.findMany();
};

export const createObjectImage = async (
  parent: ResolverParent,
  args: any,
  context: ResolverContext
): Promise<ObjectImage> => {
  const data = args.input;
  const objectImage =
    verifyIfItIsAUser({ context }) &&
    (await context.orm.objectImage.create({
      data
    }));
  return objectImage;
};

export const objectImageResolver: Record<keyof ObjectImage, (parent: ObjectImage) => unknown> = {
  id: ({ id }) => id,
  objectId: ({ objectId }) => objectId,
  url: ({ url }) => url,
  createdAt: ({ createdAt }) => createdAt,
  updatedAt: ({ updatedAt }) => updatedAt
};

export default {
  Query: {
    findAllObjectImage
  },
  Mutation: {
    createObjectImage
  },
  ObjectImage: objectImageResolver
};
