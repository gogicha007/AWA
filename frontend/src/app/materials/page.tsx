import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';
import styles from './page.module.css';
import { authOptions } from '../api/auth/[...nextauth]/route';

export default async function Materials() {
  const session = await getServerSession(authOptions);
  if (!session) {
    console.log('not session');
    redirect('/signin');
  }
  return (
    <main>
      <div className={styles.materials__main}>
        <h1>Materials</h1>
      </div>
    </main>
  );
}
