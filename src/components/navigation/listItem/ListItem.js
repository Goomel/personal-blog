import Link from 'next/link';
import cn from 'classnames';
import styles from './listItem.module.scss';

const ListItem = ({ href, children }) => {
  return (
    <li className={cn(styles.listItem, 'item')}>
      <Link href={href}>{children}</Link>
    </li>
  );
};

export default ListItem;
