import React from 'react';
import Link from 'next/link';

const PostListing = ({ posts }) => {
  return (
    <div>
      {posts.map(({ metadata: { slug, title } }) => (
        <Link href={`/blog/${slug}`} key={slug}>
          {title}
        </Link>
      ))}
    </div>
  );
};

export default PostListing;
