import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';


export default async function Home() {
  const session = await getServerSession();

  console.log('session', session)
  if (session) {
    redirect('/signin');
  }
  return <h1>Home Page</h1>;
}
