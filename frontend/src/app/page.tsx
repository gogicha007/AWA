import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';
import { authOptions } from './api/auth/[...nextauth]/route';


export default async function Home() {
  const session = await getServerSession(authOptions);
  // console.log(session)
  if (!session) {
    console.log('not session')
    redirect('/signin');
  }
  return <h1>Home Page</h1>;
}
