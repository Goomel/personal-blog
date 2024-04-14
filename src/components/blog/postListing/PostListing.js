import Link from 'next/link';
import styles from './postListing.module.scss';

const PostListing = ({ posts }) => {
  return (
    <>
      {posts.map(({ slug, metadata: { title } }) => (
        <div className={styles.post} key={slug}>
          <Link href={`/blog/${slug}`}>{title}</Link>
        </div>
      ))}
    </>
  );
};

export default PostListing;
