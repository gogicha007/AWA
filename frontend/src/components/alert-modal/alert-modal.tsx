'use client';
import styles from './alert-modal.module.css';
import { useRef } from 'react';

type Props = {
  title: string;
};

export default function AlertModal({ title }: Props) {
  const dialogRef = useRef<null | HTMLDialogElement>(null);

  const closeDialog = () => {
    dialogRef.current?.close();
  };

  const clickOk = () => {
    closeDialog();
  };

  return (
    <dialog ref={dialogRef} className={styles.modal}>
      <div className={styles.modal__container}>
        <h1>{title}</h1>
        <button onClick={clickOk}>Ok</button>
      </div>
    </dialog>
  );
}
