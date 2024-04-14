import { getBlogPosts } from '@/lib/mdxUtils';
import PostListing from '../postListing/PostListing';
import Grid from '@/components/shared/grid/Grid';
import styles from './recentPosts.module.scss';

const RecentPosts = () => {
  const allPosts = getBlogPosts();

  return (
    <section className={styles.recentPostsWrapper}>
      <h2 className={styles.title}>
        <span>Ostatnie</span>
        <br />
        <span>wpisy</span>
      </h2>
      <Grid>
        <PostListing posts={allPosts} />
      </Grid>
    </section>
  );
};

export default RecentPosts;
