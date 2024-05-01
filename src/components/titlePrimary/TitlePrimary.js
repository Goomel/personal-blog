import React from 'react';
import styles from './TitlePrimary.module.scss';
import cn from 'classnames';

const TitlePrimary = ({ children, headingLevel = '2', textRight = null }) => {
  const Tag = 'h' + headingLevel;
  return (
    <Tag className={cn(styles.title, { [styles.textRight]: textRight })}>
      {children}
    </Tag>
  );
};

export default TitlePrimary;
