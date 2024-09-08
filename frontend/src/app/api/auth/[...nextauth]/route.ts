import NextAuth, { NextAuthOptions } from 'next-auth';
import { jwtDecode } from 'jwt-decode';
import { endpointObj } from '@/lib/endpoints';
import CredentialsProvider from 'next-auth/providers/credentials';

export const authOptions: NextAuthOptions = {
  session: { strategy: 'jwt' },
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: {},
        password: {},
      },
      async authorize(credentials) {
        const res = await fetch(endpointObj.signinUrl, {
          method: 'POST',
          body: JSON.stringify(credentials),
          headers: { 'Content-Type': 'application/json' },
        });
        const user = await res.json();
        const token = jwtDecode(user.refresh);
        console.log(token);
        if (user) {
          return user;
        } else {
          return null;
        }
      },
    }),
  ],
};
const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
