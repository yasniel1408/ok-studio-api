/* eslint-disable no-console */
import { PrismaClient } from '@prisma/client';
import prompt from 'prompt';
import encryptPassword from './password/encryptPassword';

const orm = new PrismaClient();

prompt.start();

prompt.get(
  [
    {
      name: 'name',
      message: 'Name',
      required: true
    },
    {
      name: 'email',
      message: 'Email',
      required: true
    },
    {
      name: 'password',
      message: 'Password',
      required: true
    }
  ],
  async (err, result) => {
    if (err) {
      console.warn('Huh. Something went wrong.');
      return;
    }
    const name: string = result.name as string;
    const email: string = result.email as string;
    const hashedPassword = await encryptPassword(result.password as string);

    const user = await orm.user.create({
      data: {
        password: hashedPassword,
        name,
        email,
        role: 'ADMIN'
      }
    });

    console.log(`User ${name} created with id ${user.id}\n`);
  }
);
