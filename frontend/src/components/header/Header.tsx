'use client';
import React from 'react';
import styles from './header.module.css';
import Image from 'next/image';
import Navbar from '../navbar/navbar';
import Logo from '../../../public/images/chuck.png';


const Header = () => {
  return (
    <div className={styles.wrapper}>
      <Image src={Logo} priority={false} width={100} height={100} alt="logo" />
      <Navbar />
      <div className={styles.auth}>
        <button className={styles.btn}>Log In</button>
        <button className={styles.btn}>Register</button>
      </div>
    </div>
  );
};

export default Header;
