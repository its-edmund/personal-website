import fs from "fs";
import Link from "next/link";
import matter from "gray-matter";

const getPostMetadata = () => {
  const folder = "posts/";
  const files = fs.readdirSync(folder);
  const markdownPosts = files.filter((file) => file.endsWith(".md"));

  const posts = markdownPosts.map((file) => {
    const contents = fs.readFileSync(`${folder}${file}`, "utf8");
    const frontMatter = matter(contents);
    return {
      title: frontMatter.data.title,
      date: frontMatter.data.date,
      slug: file.replace(".md", ""),
    };
  });

  return posts;
};

const Blog = () => {
  const postMetadata = getPostMetadata();
  const postLinks = postMetadata.map((post) => {
    return (
      <div className="my-2">
        <Link href={`/posts/${post.slug}`}>
          <div className="">
            <div className="font-medium">
              {post.title}
            </div>
            <div className="text-stone-400">
              {post.date}
            </div>
          </div>
        </Link>
      </div>
    );
  });
  return (
    <>
      <h5 className="font-semibold text-lg">Blog</h5>
      <div className="flex flex-col ">
        {postLinks}
      </div>
    </>
  );
};

export default Blog;
