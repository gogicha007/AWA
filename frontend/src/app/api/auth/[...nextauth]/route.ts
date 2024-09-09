import NextAuth, { NextAuthOptions, Session } from 'next-auth';
import { JWT } from 'next-auth/jwt';
import { jwtDecode } from 'jwt-decode';
import { endpointObj } from '@/lib/endpoints';
import CredentialsProvider from 'next-auth/providers/credentials';

interface UserData {
  username: string;
  email: string;
  user_id: number;
  exp: number;
  is_superuser: boolean;
  is_staff: boolean;
  refresh?: string;
}

async function refreshAccessToken(token: UserData) {
  try {
    const res = await fetch(endpointObj.refreshUrl, {
      method: 'POST',
      body: JSON.stringify({ refresh: token.refresh }),
      headers: { 'Content-Type': 'application/json' },
    });
    const refreshedToken = await res.json();
    if (res.status !== 200) throw refreshedToken;
    const { exp } = jwtDecode(refreshedToken.access);
    return {
      ...token,
      ...refreshedToken,
      exp,
    };
  } catch (error) {
    return {
      ...token,
      error: 'RefreshAccessTokenError',
    };
  }
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
        const { username, email, user_id, exp, is_superuser, is_staff } =
          jwtDecode(token.access) as UserData;
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
  callbacks: {
    async jwt({ token, user}): Promise<JWT> {
      console.log('jwt callback', { token, user });
      return user;
    },
    async session({ session, user, token }): Promise<Session> {
      // console.log('Session', { session });
      session.access = token.access as string;
      session.refresh = token.refrech as string;
      return session;
    },
  },
  session: { strategy: 'jwt' },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
