import Link from 'next/link';

const PostListing = ({ posts }) => {
  return (
    <>
      {posts.map(({ slug, metadata: { title } }) => (
        <div key={slug}>
          <Link href={`/blog/${slug}`}>{title}</Link>
        </div>
      ))}
    </>
  );
};

export default PostListing;
