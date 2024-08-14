'use client';
import styles from './page.module.css';
import AlertModal from '@/components/alert-modal/alert-modal';
import useModal from '@/lib/helper';
import { FormEvent } from 'react';

export default function Form() {
  const { ref, onOpen, onClose } = useModal();

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
    if (resCreateUser.status === 201) {
      const data = await resCreateUser.json();
    } else {
      onOpen();
      console.log(ref.current)
      const errResponse = await resCreateUser.json();
      console.log(errResponse.username[0]);
    }
  };
  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <AlertModal ref={ref} title={"it's modal"}>
        <h1>It's modal</h1>
      </AlertModal>
      <input className={styles.input} type="email" name="email" />
      <input className={styles.input} type="password" name="password" />
      <button className={styles.btn} type="submit">
        Submit
      </button>
      <button onClick={onOpen}>open modal</button>
    </form>
  );
}
