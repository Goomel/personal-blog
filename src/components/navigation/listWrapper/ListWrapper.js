import styles from './listWrapper.module.scss';
import ListItem from '../listItem/ListItem';

const ListWrapper = () => {
  return (
    <ul className={styles.wrapper}>
      <ListItem href={'/blog'}>Blog</ListItem>
      <ListItem href={'/o-mnie'}>O mnie</ListItem>
      <ListItem href={'#kontakt'}>Kontakt</ListItem>
    </ul>
  );
};

export default ListWrapper;
