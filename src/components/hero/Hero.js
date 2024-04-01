import React from 'react';
import styles from './hero.module.scss';

const HeroSection = () => {
  return (
    <header className={styles.heroWrapper}>
      <h1 className={styles.title}>
        {/* Cześć, */}
        Test
        <br />
        {/* tu Kuba */}
        tu Test
      </h1>
      <p className={styles.description}>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam
        veritatis amet modi illum eius quod nihil illo natus, nostrum
        necessitatibus error deserunt velit assumenda sequi sint iusto.
        Incidunt, iste fugit!
      </p>
    </header>
  );
};

export default HeroSection;
