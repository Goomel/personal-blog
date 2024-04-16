import React from 'react';
import Link from 'next/link';
import styles from './postThumbnail.module.scss';

const PostThumbnail = ({ slug, title, description }) => {
  return (
    <div className={styles.wrapper} key={slug}>
      <Link href={`/blog/${slug}`} className={styles.innerWrapper}>
        <p className={styles.title}>{title}</p>
        <p className={styles.description}>{description}</p>
        <button className={styles.readMoreButton}>Czytaj więcej</button>
      </Link>
    </div>
  );
};

export default PostThumbnail;
