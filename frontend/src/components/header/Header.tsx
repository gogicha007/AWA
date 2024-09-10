'use client';
import React from 'react';
import { useSession } from 'next-auth/react';
import Link from 'next/link';
import styles from './header.module.css';
import Image from 'next/image';
import Navbar from '../navbar/navbar';
import AuthBar from '../authbar/authbar';
import Logo from '../../../public/images/chuck.png';

const Header = () => {
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
      <AuthBar />
    </div>
  );
};

export default Header;
