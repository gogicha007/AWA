import styles from './page.module.css';
import Form from './form';

export default async function Register() {
  return (
    <div className={styles.register}>
      <h2>Sign Up</h2>
      <Form />
    </div>
  );
}
