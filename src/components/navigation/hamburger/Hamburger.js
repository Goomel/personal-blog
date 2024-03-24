import cn from 'classnames';
import styles from './hamburger.module.scss';

const Hamburger = ({ isOpen, handleClick }) => {
  return (
    <div
      className={cn(styles.hamburgerButton, { [styles.isOpen]: isOpen })}
      onClick={handleClick}
    >
      <span className={styles.hamburgerLine}></span>
      <span className={styles.hamburgerLine}></span>
    </div>
  );
};

export default Hamburger;
