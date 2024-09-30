import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import { redirect } from 'next/navigation';
import styles from './page.module.css';
import { PurchaseTable } from '@/interafaces/interfaces';

export default async function Purchases() {
  const session = await getServerSession(authOptions);
  if (!session) {
    console.log('not session');
    redirect('/signin');
  }
  const getTable = (data: PurchaseTable)=>{
    console.log(data)
  }
  return (
    <div className={styles.purchases}>
      <h1>Purchases</h1>
    </div>
  );
}