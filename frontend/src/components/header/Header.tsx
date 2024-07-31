'use client';
import React from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import styles from './header.module.css';
import Image from 'next/image';
import Navbar from '../navbar/navbar';
import Logo from '../../../public/images/chuck.png';

const Header = () => {
  const router = useRouter();
  const handleRegister = () => {
    router.push('/register')
  };
  return (
    <div className={styles.wrapper}>
      <Link href="/">
        <Image
          src={Logo}
          priority={false}
          width={100}
          height={100}
          alt="logo"
        />
      </Link>
      <Navbar />
      <div className={styles.auth}>
        <button className={styles.btn}>Log In</button>
        <button type="button" onClick={handleRegister} className={styles.btn}>
          Register
        </button>
      </div>
    </div>
  );
};

export default Header;
