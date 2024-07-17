'use client';
import React from 'react';
import styles from './Header.module.css';
import Image from 'next/image';
import Logo from '../../../public/images/chuck.png';

const Header = () => {
  return (
    <div className={styles.header}>
      <Image src={Logo} priority={false} width={120} height={120} alt="logo" />
      
    </div>
  );
};

export default Header;
