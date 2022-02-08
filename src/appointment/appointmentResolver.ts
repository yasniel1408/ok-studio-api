import type { Appointment } from '@prisma/client';
import { ResolverContext } from '../common/@types/ResolverContext';
import { ResolverParent } from '../common/@types/ResolverParent';
import verifyIfItIsAdmin from '../common/middlewares/verifyIfItIsAdmin';

export const findAllAppointment = (
  parent: ResolverParent,
  args: any,
  context: ResolverContext
): Promise<Appointment[]> => {
  return (
    verifyIfItIsAdmin({ context }) &&
    context.orm.appointment.findMany({
      include: { contract: true, client: true }
    })
  );
};

export const createAppointment = async (
  parent: ResolverParent,
  args: any,
  context: ResolverContext
): Promise<Appointment> => {
  const data = args.input;
  const appointment =
    verifyIfItIsAdmin({ context }) &&
    (await context.orm.appointment.create({
      data
    }));
  return appointment;
};

export const appointmentResolver: Record<keyof Appointment, (parent: Appointment) => unknown> = {
  id: ({ id }) => id,
  contractId: ({ contractId }) => contractId,
  clientId: ({ clientId }) => clientId,
  accepted: ({ accepted }) => accepted,
  notes: ({ notes }) => notes,
  createdAt: ({ createdAt }) => createdAt,
  updatedAt: ({ updatedAt }) => updatedAt
};

export default {
  Query: {
    findAllAppointment
  },
  Mutation: {
    createAppointment
  },
  Appointment: appointmentResolver
};
