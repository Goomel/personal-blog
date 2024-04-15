import React from 'react';
import styles from './hero.module.scss';
import MainButton from '../buttons/mainButton/MainButton';
import Image from 'next/image';
import laptop from '../../../public/images/laptop.jpg';
import ContentMediaSection from '../shared/contentMediaSection/ContentMediaSection';

const HeroSection = () => {
  return (
    <header className={styles.heroWrapper}>
      <ContentMediaSection>
        <div>
          <h1 className={styles.title}>
            <span>
              Cześć<span className={styles.comma}>,</span>
            </span>
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
        </div>

        <div>
          <Image
            src={laptop}
            alt="Mężczyzna pracujący z laptopem"
            width={330}
            height={500}
            style={{
              objectFit: 'cover',
              maxWidth: '100%'
            }}
          />
        </div>
      </ContentMediaSection>
    </header>
  );
};

export default HeroSection;
