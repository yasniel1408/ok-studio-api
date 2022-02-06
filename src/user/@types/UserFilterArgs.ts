import { Prisma } from '@prisma/client';

export type UserFilterArgs = {
  skip?: number;
  take?: number;
  where?: Prisma.UserWhereInput;
};
