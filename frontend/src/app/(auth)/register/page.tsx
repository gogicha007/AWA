import styles from './page.module.css';
import Form from './form';
import Link from 'next/link';

export default async function Register() {
  return (
    <div className={styles.register}>
      <h2>Sign Up</h2>
      <Form />
      <p className={styles.register__login}>Have an account? <Link href='/signin'>Sign In</Link></p>
    </div>
  );
}
