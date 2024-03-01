import fs from 'fs';
import path from 'path';
import { compileMDX } from 'next-mdx-remote/rsc';

const pathToPosts = path.join(process.cwd(), 'src/posts');

export async function generateMetadata({ params }) {
  const pathToFile = path.join(pathToPosts, `${params.slug}.mdx`);
  const source = fs.readFileSync(pathToFile, 'utf-8');

  const { content, frontmatter } = await compileMDX({
    source: source,
    options: { parseFrontmatter: true }
  });

  return {
    title: frontmatter.title,
    description: frontmatter.description
  };
}

export default async function BlogPage({ params }) {
  const pathToFile = path.join(pathToPosts, `${params.slug}.mdx`);
  const source = fs.readFileSync(pathToFile, 'utf-8');

  const { content, frontmatter } = await compileMDX({
    source: source,
    options: { parseFrontmatter: true }
  });

  return <>{content}</>;
}
