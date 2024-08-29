'use client';
import styles from './page.module.css';
import { AlertModal } from '@/components/alert-modal/alert-modal';
import useModal from '@/lib/helper';
import { FormEvent, useState } from 'react';

export default function Form() {
  const { dialogRef, toggleDialog } = useModal();

  const [dialogContent, setDialogContent] = useState('error');

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    console.log(
      JSON.stringify({
        username: formData.get('email'),
        password: formData.get('password'),
      })
    );
    const resCreateUser = await fetch(
      'http://127.0.0.1:8000/api/user/register/',
      {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: formData.get('email'),
          password: formData.get('password'),
        }),
      }
    );
    console.log('error')
    if (resCreateUser.status === 201) {
      const data = await resCreateUser.json();
    } else {
      const errResponse = await resCreateUser.json();
      console.log(errResponse.username[0]);
      setDialogContent(errResponse.username[0]);
      toggleDialog();
    }
  };
  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <input className={styles.form__input} type="email" name="email" />
      <input className={styles.form__input} type="password" name="password" />
      <button className={styles.form__btn} type="submit">
        Submit
      </button>
      <p className={styles.form__login}>Have an account? <a href=''>Sign In</a></p>
      <AlertModal toggleDialog={toggleDialog} ref={dialogRef}>
        <h3>{dialogContent}</h3>
      </AlertModal>
    </form>
  );
}
