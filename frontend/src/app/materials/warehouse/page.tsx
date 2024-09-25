import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import styles from './page.module.css';

export default async function Warehouse() {
  const session = await getServerSession(authOptions);
  if (!session) {
    redirect('/signin');
  }
  return (
    <main>
      <div className={styles.warehouse__main}>
        <h1>Warehouse</h1>
      </div>
    </main>
  );
}
