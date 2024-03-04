import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export const getMDXFile = (dir, filename) => {
  const MDXFile = path.join(dir, `${filename}.mdx`);
  return fs.existsSync(MDXFile) ? MDXFile : null;
};

export const readMDXFile = (pathToFile) => {
  return fs.readFileSync(pathToFile, 'utf-8');
};

export const getPostData = (dir, postName) => {
  const mdxFile = getMDXFile(dir, postName);
  if (!mdxFile) return null;
  else {
    const source = readMDXFile(mdxFile);
    return matter(source);
  }
};
