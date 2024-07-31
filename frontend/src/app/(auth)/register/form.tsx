'use client';
import styles from './page.module.css';

import { FormEvent } from 'react';

export default function Form() {
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(e.currentTarget);
    const formData = new FormData(e.currentTarget);
    console.log(formData.get('email'));
    const response = await fetch('http://127.0.0.1:8000/api/user/register/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: formData.get('email'),
        password: formData.get('password'),
      }),
    });
    console.log({ response });
  };
  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <input className={styles.input} type="email" name="email" />
      <input className={styles.input} type="password" name="password" />
      <button className={styles.btn} type="submit">
        Submit
      </button>
    </form>
  );
}
