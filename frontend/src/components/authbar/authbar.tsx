'use client';

import React from 'react';
import styles from './authbar.module.css';
import { useSession, signOut } from 'next-auth/react';
import { useRouter } from 'next/navigation';

const AuthBar = () => {
  const { data: session, status } = useSession();
  if (status === 'authenticated') {
    console.log('authenticated');
  } else {
    ('not authenticated');
  }
  const router = useRouter();
  const handleRegister = () => {
    router.push('/register');
  };
  const handleSignin = () => {
    router.push('/signin');
  };
  const handleSignout = () => {
    signOut();
  };
  return (
    <div className={styles.auth}>
      {session?.user ? (
        <>
        <p className={styles.user}>{session.user.name}</p>
        <button type="button" onClick={handleSignout} className={styles.btn}>
          Sign Out
        </button>
        </>
      ) : (
        <>
          <button type="button" onClick={handleSignin} className={styles.btn}>
            Log In
          </button>
          <button type="button" onClick={handleRegister} className={styles.btn}>
            Register
          </button>
        </>
      )}
    </div>
  );
};

export default AuthBar;
