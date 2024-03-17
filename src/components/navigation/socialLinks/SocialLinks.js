import Link from 'next/link';
import styles from './socialLinks.module.scss';
import GithubIcon from '@/assets/icons/github-icon';
import LinkedinIcon from '@/assets/icons/linkedin-icon';

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
