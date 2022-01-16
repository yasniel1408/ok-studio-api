import { User } from '@prisma/client';
import jsonwebtoken from 'jsonwebtoken';

const newToken = (user: User): string => {
  const token = jsonwebtoken.sign({ user }, process.env.JWT_SECRET, {
    expiresIn: '1d'
  });
  return token;
};

export default newToken;
