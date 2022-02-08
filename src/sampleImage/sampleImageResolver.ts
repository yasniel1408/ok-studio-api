import type { SampleImage } from '@prisma/client';
import { ResolverContext } from '../common/@types/ResolverContext';
import { ResolverParent } from '../common/@types/ResolverParent';
import verifyIfItIsAUser from '../common/middlewares/verifyIfItIsAUser';

export const findAllSampleImage = (
  parent: ResolverParent,
  args: any,
  context: ResolverContext
): Promise<SampleImage[]> => {
  return (
    verifyIfItIsAUser({ context }) &&
    context.orm.sampleImage.findMany({
      include: { type: true }
    })
  );
};

export const createSampleImage = async (
  parent: ResolverParent,
  args: any,
  context: ResolverContext
): Promise<SampleImage> => {
  const data = args.input;
  const sampleImage =
    verifyIfItIsAUser({ context }) &&
    (await context.orm.sampleImage.create({
      data
    }));
  return sampleImage;
};

export const sampleImageResolver: Record<keyof SampleImage, (parent: SampleImage) => unknown> = {
  id: ({ id }) => id,
  typeId: ({ typeId }) => typeId,
  url: ({ url }) => url,
  createdAt: ({ createdAt }) => createdAt,
  updatedAt: ({ updatedAt }) => updatedAt
};

export default {
  Query: {
    findAllSampleImage
  },
  Mutation: {
    createSampleImage
  },
  SampleImage: sampleImageResolver
};
