import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const pathToPosts = path.join(process.cwd(), 'src/posts');

const getMDXFile = (filename) => {
  const MDXFilePath = path.join(pathToPosts, `${filename}.mdx`);
  return fs.existsSync(MDXFilePath) ? MDXFilePath : null;
};

const readMDXFile = (pathToFile) => {
  return fs.readFileSync(pathToFile, 'utf-8');
};

export const getPostData = (postName) => {
  const MDXFile = getMDXFile(postName);
  if (!MDXFile) return null;
  else {
    const source = readMDXFile(MDXFile);
    const { content, data } = matter(source);
    return { metadata: data, content };
  }
};

const getAllMDXFileNames = () => {
  const files = fs.readdirSync(pathToPosts);
  return files.map((file) => path.parse(file).name);
};

export const getBlogPosts = () => {
  const postNames = getAllMDXFileNames();
  let blogPosts = [];
  postNames.map((postName) => ({ slug: postName, ...getPostData(postName) }));
  return blogPosts;
};
