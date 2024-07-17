'use client';
import React from 'react';
import styles from './header.module.css';
import Image from 'next/image';
import Logo from '../../../public/images/chuck.png';

const Header = () => {
  return (
    <div className={styles.wrapper}>
      <Image src={Logo} priority={false} width={120} height={120} alt="logo" />
      <ul className={styles.navbar}>
        <li>
          <a href="">Villages</a>
        </li>
      </ul>
      <div className={styles.auth}>
        <button className={styles.btn}>Log In</button>
        <button className={styles.btn}>Register</button>
      </div>
    </div>
  );
};

export default Header;
