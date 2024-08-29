// 'use client';
import styles from './alert-modal.module.css';
import { useRef, MutableRefObject, ReactNode, forwardRef } from 'react';

type Props = {
  children: ReactNode;
  toggleDialog: () => void;
};

export const AlertModal = forwardRef<HTMLDialogElement, Props>(
  ({ children, toggleDialog }, ref) => {
    return (
      <dialog
        ref={ref}
        onClick={(e) => {
          if (e.currentTarget === e.target) {
            toggleDialog();
          }
        }}
        className={styles.modal}
      >
        <div className={styles.modal__container}>
          {children}
          <button type="button" onClick={toggleDialog} className={styles.modal__btn}>
            Ok
          </button>
        </div>
      </dialog>
    );
  }
);
