import { User } from '@prisma/client';
import jsonwebtoken from 'jsonwebtoken';

const getUser = ({ authorization }: { authorization: string }): User => {
  try {
    const token: string = authorization.split(' ')[1];
    const res: any = jsonwebtoken.verify(token, process.env.JWT_SECRET);
    return res.user;
  } catch (e) {
    return null;
  }
};

export default getUser;
