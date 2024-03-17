import Link from 'next/link';
import styles from './listItem.module.scss';

const ListItem = ({ href, children }) => {
  return (
    <li className={styles.listItem}>
      <Link href={href}>{children}</Link>
    </li>
  );
};

export default ListItem;
