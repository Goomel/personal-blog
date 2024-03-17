import React from 'react';
import Link from 'next/link';
import styles from './logo.module.scss';

const Logo = () => {
  return (
    <Link href="/" className={styles.logo}>
      jg.dev
    </Link>
  );
};

export default Logo;
