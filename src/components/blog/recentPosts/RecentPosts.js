import { getBlogPosts } from '@/lib/mdxUtils';
import PostListing from '../postListing/PostListing';
import Grid from '@/components/shared/grid/Grid';

const RecentPosts = () => {
  const allPosts = getBlogPosts();

  return (
    <Grid>
      <PostListing posts={allPosts} />
    </Grid>
  );
};

export default RecentPosts;
