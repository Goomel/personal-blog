import React from 'react';
import styles from './buttonPrimary.module.scss';
import Link from 'next/link';

const ButtonPrimary = ({ href, children }) => {
  if (href) {
    return (
      <Link href={href} className={styles.buttonWrapper}>
        {children}
      </Link>
    );
  } else {
    return <button className={styles.buttonWrapper}>{children}</button>;
  }
};

export default ButtonPrimary;
