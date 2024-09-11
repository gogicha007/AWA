'use client';
import styles from './register.module.css';
import { AlertModal } from '@/components/alert-modal/alert-modal';
import useModal from '@/lib/helper';
import { endpointObj } from '@/lib/endpoints';
import { FormEvent, useState } from 'react';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';

export default function RegisterForm(props: any) {
  const { dialogRef, toggleDialog } = useModal();
  const router = useRouter();
  const [dialogContent, setDialogContent] = useState('error');

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const resCreateUser = await fetch(endpointObj.registerUrl, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username: formData.get('email'),
        password: formData.get('password'),
        first_name: formData.get('firstName'),
        last_name: formData.get('lastName'),
        email: formData.get('email'),
      }),
    });
    if (resCreateUser.status === 201) {
      const data = await resCreateUser.json();
      const res = await signIn('credentials', {
        username: formData.get('email'),
        password: formData.get('password'),
        redirect: false,
      });
      if (!res?.error) {
        router.push(props.callbackUrl ?? '/');
      } else {
        console.log('not authorized');
      }
    } else {
      const errResponse = await resCreateUser.json();
      console.log(errResponse.username[0]);
      setDialogContent(errResponse.username[0]);
      toggleDialog();
    }
  };
  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <label htmlFor="firstName">First Name</label>
      <input className={styles.form__input} type="text" name="firstName" />
      <label htmlFor="lastName">Last Name</label>
      <input className={styles.form__input} type="text" name="lastName" />
      <label htmlFor="email">User</label>
      <input className={styles.form__input} type="email" name="email" />
      <label htmlFor="password">Password</label>
      <input className={styles.form__input} type="password" name="password" />
      <button className={styles.form__btn} type="submit">
        Submit
      </button>
      <AlertModal toggleDialog={toggleDialog} ref={dialogRef}>
        <h3>{dialogContent}</h3>
      </AlertModal>
    </form>
  );
}
