import React from 'react';
import styles from './contentMediaSection.module.scss';

const ContentMediaSection = ({ children }) => {
  return <div className={styles.sectionWrapper}>{children}</div>;
};

export default ContentMediaSection;
