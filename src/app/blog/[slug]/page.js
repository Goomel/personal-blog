import path from 'path';
import { notFound } from 'next/navigation';
import { CustomMDX } from '@/components/mdx/mdx-remote';
import { getPostData } from '@/lib/mdxUtils';

export async function generateMetadata({ params }) {
  const post = getPostData(params.slug);
  if (!post) return notFound();

  return { ...post.data };
}

export default async function BlogPost({ params }) {
  const post = getPostData(params.slug);

  return (
    <>
      <CustomMDX source={post.content} />
    </>
  );
}
