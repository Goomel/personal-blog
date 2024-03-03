import fs from 'fs';
import path from 'path';
import { CustomMDX } from '@/components/mdx/mdx-remote';
import matter from 'gray-matter';

const pathToPosts = path.join(process.cwd(), 'src/posts');

export async function generateMetadata({ params }) {
  const pathToFile = path.join(pathToPosts, `${params.slug}.mdx`);
  const source = fs.readFileSync(pathToFile, 'utf-8');
  const { content, data } = matter(source);

  return {
    title: data.title,
    description: data.description
  };
}

export default async function BlogPage({ params }) {
  const pathToFile = path.join(pathToPosts, `${params.slug}.mdx`);
  const source = fs.readFileSync(pathToFile, 'utf-8');
  const { content, data } = matter(source);

  return (
    <>
      <CustomMDX source={content} />
    </>
  );
}
