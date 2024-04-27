import React from 'react';
import Link from 'next/link';
import GithubIcon from '@/assets/icons/GithubIcon';
import LinkedinIcon from '@/assets/icons/LinkedinIcon';
import MailIcon from '@/assets/icons/MailIcon';
import styles from './footer.module.scss';

const Footer = () => {
  return (
    <div className={styles.footerWrapper}>
      <div className={styles.icons}>
        <Link className={styles.link} href="#">
          <GithubIcon />
        </Link>
        <Link className={styles.link} href="#">
          <LinkedinIcon />
        </Link>
        <Link className={styles.link} href="#">
          <MailIcon />
        </Link>
      </div>
      <p className={styles.paragraph}>
        © 2024 Jakbub Grzymisławski
        <br />
        All Rights Reserved
      </p>
    </div>
  );
};

export default Footer;
