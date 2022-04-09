import type { Contract } from '@prisma/client';
import { ResolverContext } from '../common/@types/ResolverContext';
import { ResolverParent } from '../common/@types/ResolverParent';
import verifyIfItIsAdmin from '../common/middlewares/verifyIfItIsAdmin';

export const findAllContract = (
  parent: ResolverParent,
  args: any,
  context: ResolverContext
): Promise<Contract[]> => {
  return (
    verifyIfItIsAdmin({ context }) &&
    context.orm.contract.findMany({
      include: { type: true, appointment: true }
    })
  );
};

export const createContract = async (
  parent: ResolverParent,
  args: any,
  context: ResolverContext
): Promise<Contract> => {
  const data = args.input;
  const contract =
    verifyIfItIsAdmin({ context }) &&
    (await context.orm.contract.create({
      data
    }));
  return contract;
};

export const contractResolver: Record<keyof Contract, (parent: Contract) => unknown> = {
  id: ({ id }) => id,
  name: ({ name }) => name,
  typeId: ({ typeId }) => typeId,
  createdAt: ({ createdAt }) => createdAt,
  updatedAt: ({ updatedAt }) => updatedAt
};

export default {
  Query: {
    findAllContract
  },
  Mutation: {
    createContract
  },
  Contract: contractResolver
};
