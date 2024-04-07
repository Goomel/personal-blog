import RecentPosts from '@/components/blog/recentPosts/recentPosts';
import Hero from '@/components/hero/Hero';

export const metadata = {
  title: 'Page Home',
  description: ''
};

export default function Home() {
  return (
    <>
      <Hero />
      <RecentPosts />
    </>
  );
}
