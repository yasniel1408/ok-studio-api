import bcrypt from 'bcrypt';

const encryptPassword = async (password: string): Promise<string> => {
  const pass = await bcrypt.hash(password, 10);
  return pass;
};

export default encryptPassword;
