'use client';

import { useEffect, useState } from 'react';
import { useMediaQuery } from '@uidotdev/usehooks';
import cn from 'classnames';
import Logo from '@/components/navigation/logo/Logo';
import Hamburger from './hamburger/Hamburger';
import ListWrapper from './listWrapper/ListWrapper';
import SocialLinks from './socialLinks/SocialLinks';
import styles from './navigation.module.scss';

const Navigation = () => {
  const isMobileDevice = useMediaQuery('(max-width: 1024px)');
  const [isMenuOpen, setIsMenuOpen] = useState(!isMobileDevice);
  const toggleMenuOpen = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    isMobileDevice ? setIsMenuOpen(false) : setIsMenuOpen(true);
  }, [isMobileDevice]);

  return (
    <nav className={styles.navigationWrapper}>
      <Logo />
      <Hamburger isOpen={isMenuOpen} handleClick={toggleMenuOpen} />
      {isMenuOpen && (
        <div className={cn(styles.innerWrapper)}>
          <ListWrapper />
          <SocialLinks />
        </div>
      )}
    </nav>
  );
};

export default Navigation;
