import { PrismaClient } from '@prisma/client';
import encryptPassword from './password/encryptPassword';

const orm = new PrismaClient();

const run = async () => {
  await orm.user.create({
      data: {
        password: await encryptPassword("admin123"),
        name: "admin",
        email: "admin@gmail.com",
        role: 'ADMIN'
      }
  });
}
run()
