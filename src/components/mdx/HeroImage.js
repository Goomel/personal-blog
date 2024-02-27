import Image from 'next/image';
import styles from './HeroImage.modules.css';

const HeroImage = (src, alt) => {
  return (
    <div className={styles.mdxHeroImage}>
      <Image src={src} alt={alt} fill></Image>
    </div>
  );
};

export default HeroImage;
