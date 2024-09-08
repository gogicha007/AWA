import NextAuth, { NextAuthOptions } from 'next-auth';
import { jwtDecode } from 'jwt-decode';
import { endpointObj } from '@/lib/endpoints';
import CredentialsProvider from 'next-auth/providers/credentials';

interface Token {
  username: string;
  email: string;
  user_id: number;
  exp: number;
  is_superuser: boolean;
  is_staff: boolean;
}

export const authOptions: NextAuthOptions = {
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
        const token = await res.json();
        if (res.status !== 200) return null;
        console.log(jwtDecode(token.access));
        const { username, email, user_id, exp, is_superuser, is_staff } =
          jwtDecode(token.access) as Token;
        console.log(token);
        return {
          ...token,
          exp,
          user: {
            username,
            email,
            user_id,
            is_staff,
            is_superuser,
          },
        };
      },
    }),
  ],
  session: { strategy: 'jwt' },
};
const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
