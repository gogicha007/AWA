import NextAuth, { NextAuthOptions, Session, User } from 'next-auth';
import { JWT } from 'next-auth/jwt';
import { jwtDecode } from 'jwt-decode';
import { endpointObj } from '@/lib/endpoints';
import CredentialsProvider from 'next-auth/providers/credentials';

interface UserData {
  firstName: string;
  lastName: string;
  username: string;
  email: string;
  user_id: number;
  exp: number;
  is_superuser: boolean;
  is_staff: boolean;
  refresh?: string;
}

async function refreshAccessToken(token: JWT) {
  const res = await fetch(endpointObj.refreshUrl, {
    method: 'POST',
    body: JSON.stringify({ refresh: token.refresh }),
    headers: { 'Content-Type': 'application/json' },
  });
  if (res.ok) {
    const data = await res.json();
    return {
      ...data,
      refresh: token.refresh,
      expiresIn: jwtDecode(data.access).exp,
      user: token.user,
    };
  } else {
    return {
      error: 'RefreshAccessTokenError',
    };
  }
}
export const authOptions: NextAuthOptions = {
  secret: process.env.AUTH_SECRET,
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
        if (res.ok && token) {
          const {
            firstName,
            lastName,
            email,
            user_id,
            exp,
            is_staff,
            is_superuser,
          } = jwtDecode(token.access) as UserData;
          return {
            ...token,
            exp,
            user: {
              name: firstName.concat(' ', lastName),
              email,
              user_id,
              is_staff,
              is_superuser,
            },
          };
        }
        return null;
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }): Promise<JWT> {
      // console.log('jwt callback', { token, user });
      if (user) {
        token.user = user.user;
        token.access = user.access;
        token.refresh = user.refresh;
        token.expiresIn = user.exp;
      }
      if (Date.now() < (token.expiresIn as number) * 1000) {
        return token;
      }
      return await refreshAccessToken(token);
    },

    async session({ session, token }): Promise<Session> {
      session.user = token.user as User;
      return session;
    },
  },
  session: { strategy: 'jwt' },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
