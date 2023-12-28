import fs from "fs";
import matter from "gray-matter";

const getPostMetadata = () => {
  const folder = "posts/";
  const files = fs.readdirSync(folder);
  const markdownPosts = files.filter((file) => file.endsWith(".md"));

  const posts = markdownPosts.map((file) => {
    const contents = fs.readFileSync(`${folder}${file}`, "utf8");
    const frontMatter = matter(contents);
    return {
      draft: frontMatter.data.draft,
      title: frontMatter.data.title,
      date: frontMatter.data.date,
      slug: file.replace(".md", ""),
    };
  });

  return posts;
};

export default getPostMetadata;
