'use server';

import { cookies } from 'next/headers';
export const setLoginCookie = (prop: string) => {
  cookies().set('loggedin', prop);
};
