'use client';

import { useState } from 'react';
import Logo from '@/components/navigation/logo/Logo';
import Hamburger from './hamburger/Hamburger';
import ListWrapper from './listWrapper/ListWrapper';
import SocialLinks from './socialLinks/SocialLinks';
import styles from './navigation.module.scss';
import { useMedia } from 'react-use';

const Navigation = () => {
  // useMedia hook needs second argument set to true to avoid hydration problems
  const isMobile = useMedia('(max-width: 1024px)', true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenuOpen = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={styles.navigationWrapper}>
      <Logo />
      {isMobile ? (
        <Hamburger isOpen={isMenuOpen} handleClick={toggleMenuOpen} />
      ) : (
        <div className={styles.innerWrapper}>
          <ListWrapper />
          <SocialLinks />
        </div>
      )}
    </nav>
  );
};

export default Navigation;
