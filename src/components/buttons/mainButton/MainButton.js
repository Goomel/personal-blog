import React from 'react';
import styles from './mainButton.module.scss';
import MainArrowIcon from '@/assets/icons/MainArrowIcon';

const MainButton = ({ children }) => {
  return (
    <button className={styles.buttonWrapper}>
      <span className={styles.buttonText}>{children}</span>
      <div className={styles.arrowWrapper}>
        <MainArrowIcon />
        <MainArrowIcon />
      </div>
    </button>
  );
};

export default MainButton;
