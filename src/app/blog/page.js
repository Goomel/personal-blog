import { getBlogPosts } from '@/lib/mdxUtils';

export const metadata = {
  title: 'Blog',
  description: ''
};

export default function BlogPage() {
  const allBlogs = getBlogPosts();

  return (
    <main>
      {allBlogs.map((blogPost) => (
        <p key={blogPost.data.title}>{blogPost.data.title}</p>
      ))}
    </main>
  );
}
