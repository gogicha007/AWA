'use client';
import styles from './alert-modal.module.css';
import { useRef, MutableRefObject, ReactNode } from 'react';

type Props = {
  children: ReactNode;
  title: string;
  ref: MutableRefObject<HTMLDialogElement | null>
};

export default function AlertModal(
  { children, title, ref }: Props,
  
) {
  const dialogRef = useRef<null | HTMLDialogElement>(null);
  const closeDialog = () => {
    dialogRef.current?.close();
  };

  const clickOk = () => {
    closeDialog();
  };

  return (
    <dialog ref={ref} className={styles.modal}>
      <div className={styles.modal__container}>
        <h1>{title}</h1>
        <button onClick={clickOk}>Ok</button>
      </div>
    </dialog>
  );
}
