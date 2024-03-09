import { getBlogPosts } from '@/lib/mdxUtils';
import PostListing from '@/components/blog/postListing/PostListing';

export const metadata = {
  title: 'Page Home',
  description: ''
};

export default function Home() {
  const allPosts = getBlogPosts();

  return (
    <main>
      <PostListing posts={allPosts} />
    </main>
  );
}
