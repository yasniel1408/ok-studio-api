/* eslint-disable @typescript-eslint/ban-types */
import type { Object } from '@prisma/client';
import { ResolverContext } from '../@types/ResolverContext';
import verifyIfItIsAUser from '../common/middlewares/verifyIfItIsAUser';

export const findAllObject = (
  parent: any,
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
  parent: any,
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
  id: (parent) => parent.id,
  name: (parent) => parent.name,
  price: (parent) => parent.price,
  description: (parent) => parent.description,
  typeId: (parent) => parent.typeId,
  category: (parent) => parent.category,
  subcategory: (parent) => parent.subcategory,
  createdAt: (parent) => parent.createdAt,
  updatedAt: (parent) => parent.updatedAt
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
