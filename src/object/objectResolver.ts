/* eslint-disable @typescript-eslint/ban-types */
import type { Object } from '@prisma/client';
import { ResolverContext } from '../@types/ResolverContext';
import { ResolverParent } from '../@types/ResolverParent';
import verifyIfItIsAUser from '../common/middlewares/verifyIfItIsAUser';

export const findAllObject = (
  parent: ResolverParent,
  args: any,
  context: ResolverContext
): Promise<Object[]> => {
  return (
    verifyIfItIsAUser({ context }) &&
    context.orm.object.findMany({
      include: { images: true, type: true, users: true }
    })
  );
};

export const createObject = async (
  parent: ResolverParent,
  args: any,
  context: ResolverContext
): Promise<Object> => {
  const data = args.input;
  const object =
    verifyIfItIsAUser({ context }) &&
    (await context.orm.object.create({
      data
    }));
  return object;
};

export const objectResolver: Record<keyof Object, (parent: Object) => unknown> = {
  id: ({ id }) => id,
  name: ({ name }) => name,
  price: ({ price }) => price,
  description: ({ description }) => description,
  typeId: ({ typeId }) => typeId,
  category: ({ category }) => category,
  subcategory: ({ subcategory }) => subcategory,
  createdAt: ({ createdAt }) => createdAt,
  updatedAt: ({ updatedAt }) => updatedAt
};

export default {
  Query: {
    findAllObject
  },
  Mutation: {
    createObject
  },
  Object: objectResolver
};
