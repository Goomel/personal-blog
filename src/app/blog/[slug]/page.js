import path from 'path';
import { notFound } from 'next/navigation';
import { CustomMDX } from '@/components/mdx/mdx-remote';

const pathToPosts = path.join(process.cwd(), 'src/posts');
import { getPostData } from '@/lib/mdxUtils';

export async function generateMetadata({ params }) {
  const post = getPostData(pathToPosts, params.slug);
  if (!post) notFound();

  return { ...post.data };
}

export default async function BlogPage({ params }) {
  const post = getPostData(pathToPosts, params.slug);

  return (
    <>
      <CustomMDX source={post.content} />
    </>
  );
}
