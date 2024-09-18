'use client';

import { useSession } from 'next-auth/react';
import { useRouter, redirect } from 'next/navigation';

export default function Home() {
  const { data: session, status } = useSession();
  console.log('home', status)
  if (status === 'authenticated') {
    return <h1>Home Page</h1>;
  } 
  return redirect('/signin');
}
