import React from 'react';
import styles from './hero.module.scss';
import MainButton from '../buttons/mainButton/MainButton';

const HeroSection = () => {
  return (
    <header className={styles.heroWrapper}>
      <h1 className={styles.title}>
        <span>Cześć,</span>
        <br />
        <span>tu Kuba</span>
      </h1>
      <p className={styles.description}>
        Witaj na moim blogu!
        <br />
        Dzielę się tutaj moimi przemyśleniami i wskazówkami z dziedziny
        frontendu.
        <br />
        Mam nadzieję, że znajdziesz tu coś dla siebie!&nbsp;🚀
      </p>
      <MainButton>Czytaj więcej</MainButton>
    </header>
  );
};

export default HeroSection;
