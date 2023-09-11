import NextAuth from 'next-auth';
import authOptions from '@/app/utils/nextauth.util';

const authHandler = NextAuth(authOptions);

export { authHandler as GET, authHandler as POST };
