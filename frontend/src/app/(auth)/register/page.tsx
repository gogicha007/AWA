import styles from './page.module.css';
import RegisterForm from '@/components/register/register';
import Link from 'next/link';
import { getServerSession } from 'next-auth';

export default async function Register() {
  return (
    <div className={styles.register}>
      <h2>Sign Up</h2>
      <RegisterForm />
      <p className={styles.register__login}>Have an account? <Link href='/signin'>Sign In</Link></p>
    </div>
  );
}
