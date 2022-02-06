import { ResolverContext } from '../@types/ResolverContext';
import Role from '../enums/roles';

const verifyIfItIsAdmin = ({ context }: { context: ResolverContext }) => {
  if (context.user?.role !== Role.ADMIN) throw new Error('You do not have permissions');
  return true;
};

export default verifyIfItIsAdmin;
