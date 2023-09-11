import { getServerSession } from 'next-auth';
import authOptions from './nextauth.util';

const getSessionUtil = async () => {
  const session = await getServerSession(authOptions);
  if (!session?.user) {
    return null;
  }
  return session?.user;
};

export default getSessionUtil;
