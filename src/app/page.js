import { getBlogPosts } from '@/lib/mdxUtils';
import PostListing from '@/components/blog/postListing/PostListing';
import Hero from '@/components/hero/Hero';

export const metadata = {
  title: 'Page Home',
  description: ''
};

export default function Home() {
  const allPosts = getBlogPosts();

  return (
    <>
      <Hero />
      <PostListing posts={allPosts} />
    </>
  );
}
