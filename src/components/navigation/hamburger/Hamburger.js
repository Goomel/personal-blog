import styles from './hamburger.module.scss';

const Hamburger = ({ isOpen, handleClick }) => {
  return (
    <div
      className={`${styles.hamburgerButton} ${isOpen ? styles.isOpen : ''} `}
      onClick={handleClick}
    >
      <span className={styles.hamburgerLine}></span>
      <span className={styles.hamburgerLine}></span>
    </div>
  );
};

export default Hamburger;
