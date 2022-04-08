/* eslint-disable prettier/prettier */
import { PrismaClient } from '@prisma/client';
import encryptPassword from './password/encryptPassword';

const run = async () => {
  const orm = new PrismaClient();

  // users
  await orm.user.create({
    data: {
      id: '1u',
      password: await encryptPassword('pepita123'),
      name: 'pepita',
      email: 'pepita@gmail.com',
      role: 'USER'
    }
  });
  await orm.user.create({
    data: {
      id: '2u',
      password: await encryptPassword('juanito123'),
      name: 'juanito',
      email: 'juanito@gmail.com',
      role: 'USER'
    }
  });

  // types
  await orm.type.create({ data: { id: '1t', name: 'BODA' } });
  await orm.type.create({ data: { id: '2t', name: 'QUINCEAÑERAS' } });
  await orm.type.create({ data: { id: '3t', name: 'NIÑOS' } });

  // Object
  await orm.object.create({
    data: {
      id: '1o',
      name: 'jarra',
      description: 'jarra de barro con foto del estudio',
      price: 90,
      category: 'A',
      subcategory: 'AA',
      typeId: '1t'
    }
  });
  await orm.object.create({
    data: {
      id: '2o',
      name: 'llavero',
      description: 'llavero con fotos de la quinceañera',
      price: 120,
      category: 'B',
      subcategory: 'BB',
      typeId: '2t'
    }
  });
};
run();
