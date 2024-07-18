'use client';
import React from 'react';
import Link from 'next/link';
import data from '../../lib/navbar.json';
import styles from './navbar.module.css';
import { useSelectedLayoutSegment } from 'next/navigation';

const links = data;

function classNames(...classes: any[]) {
  return classes.filter(Boolean).join(' ');
}

const Navbar = () => {
  const segment = useSelectedLayoutSegment();
  return (
    <ul className={styles.wrapper}>
      {links.map((link) => (
        <li key={link.id}>
          <Link
            href={link.url}
            className={classNames(
              (segment ? segment : '') ===
                link.url.slice(link.url.lastIndexOf('/') + 1)
                ? styles.active
                : '',
              styles.link
            )}
          >
            {link.title}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default Navbar;
