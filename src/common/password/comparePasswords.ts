import bcrypt from 'bcrypt';

const comparePasswords = async (password: string, password2: string): Promise<boolean> => {
  const valid = await bcrypt.compare(password, password2);
  return valid;
};

export default comparePasswords;
