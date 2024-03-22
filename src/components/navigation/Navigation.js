'use client';

import { useState } from 'react';
import { useMediaQuery } from '@uidotdev/usehooks';
import Logo from '@/components/navigation/logo/Logo';
import Hamburger from './hamburger/Hamburger';
import ListWrapper from './listWrapper/ListWrapper';
import SocialLinks from './socialLinks/SocialLinks';
import styles from './navigation.module.scss';

const Navigation = () => {
  const isMobileDevice = useMediaQuery('(max-width: 768px)');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenuOpen = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  if (isMenuOpen && !isMobileDevice) {
    setIsMenuOpen(false);
  }

  return (
    <nav className={styles.navigationWrapper}>
      <Logo />
      <Hamburger isOpen={isMenuOpen} handleClick={toggleMenuOpen} />
      <div
        className={`${styles.innerWrapper} ${isMenuOpen ? styles.active : ''}`}
      >
        <ListWrapper />
        <SocialLinks />
      </div>
    </nav>
  );
};

export default Navigation;
