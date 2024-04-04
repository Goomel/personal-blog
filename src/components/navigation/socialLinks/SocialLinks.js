import Link from 'next/link';
import styles from './socialLinks.module.scss';
import GithubIcon from '@/assets/icons/GithubIcon';
import LinkedinIcon from '@/assets/icons/LinkedinIcon';

const SocialLinks = () => {
  return (
    <div className={styles.wrapper}>
      <Link className={styles.link} href="#">
        <GithubIcon />
      </Link>
      <Link className={styles.link} href="#">
        <LinkedinIcon />
      </Link>
    </div>
  );
};

export default SocialLinks;
