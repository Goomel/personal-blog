import { MDXRemote } from 'next-mdx-remote/rsc';
import { Suspense } from 'react';

const components = {};

export function CustomMDX(props) {
  return (
    <Suspense fallback={<>Loading...</>}>
      <MDXRemote
        {...props}
        components={{ ...components, ...(props.components || {}) }}
      />
    </Suspense>
  );
}
