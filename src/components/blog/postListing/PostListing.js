import Link from 'next/link';
import styles from './postListing.module.scss';
import PostThumbnail from '../postThumbnail/PostThumbnail';

const PostListing = ({ posts }) => {
  return (
    <>
      {posts.map(({ slug, metadata: { title, description } }) => (
        <PostThumbnail
          slug={slug}
          title={title}
          description={description}
          key={slug}
        ></PostThumbnail>
      ))}
    </>
  );
};

export default PostListing;
