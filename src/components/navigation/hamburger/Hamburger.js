import React from 'react';
import styles from './hamburger.module.scss';

const Hamburger = () => {
  return (
    <div className={styles.hamburgerButton}>
      <span className={styles.hamburgerLine}></span>
      <span className={styles.hamburgerLine}></span>
    </div>
  );
};

export default Hamburger;
