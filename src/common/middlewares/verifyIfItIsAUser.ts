import { ResolverContext } from '../../@types/ResolverContext';
import Role from '../enums/roles';

const verifyIfItIsAUser = ({ context }: { context: ResolverContext }) => {
  if (context.user?.role !== Role.USER && context.user?.role !== Role.ADMIN)
    throw new Error('You do not have permissions');
  return true;
};

export default verifyIfItIsAUser;
