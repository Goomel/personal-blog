import { getBlogPosts } from '@/lib/mdxUtils';
import PostListing from '../postListing/PostListing';
import Grid from '@/components/shared/grid/Grid';
import styles from './recentPosts.module.scss';
import ButtonPrimary from '@/components/buttons/buttonPrimary/ButtonPrimary';

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
      <div className={styles.buttonWrapper}>
        <ButtonPrimary>Zobacz wszystkie artykuły</ButtonPrimary>
        <ButtonPrimary href="#contact">Zobacz wszystkie artykuły</ButtonPrimary>
      </div>
    </section>
  );
};

export default RecentPosts;
