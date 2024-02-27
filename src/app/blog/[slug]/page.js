import fs from 'fs';
import { MDXRemote } from 'next-mdx-remote/rsc';

// const blogPost = fs.readFileSync('src/posts/test-1.mdx');
// console.log('blogPost', blogPost);

export default async function RemoteMdxPage({ params }) {
  const blogPost = fs.readFileSync(`src/posts/${params.slug}.mdx`);
  const markdown = await blogPost;
  return <MDXRemote source={markdown} />;
}
