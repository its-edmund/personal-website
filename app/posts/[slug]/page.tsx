import fs from "fs";
import Markdown from "markdown-to-jsx";
import matter from "gray-matter";

const getPostContent = (slug: string) => {
  const folder = "posts/";
  const file = `${folder}${slug}.md`;
  const content = fs.readFileSync(file, "utf8");
  const frontMatter = matter(content);
  return frontMatter;
};

const Post = (props: any) => {
  const { slug } = props.params;
  const post = getPostContent(slug);
  return (
    <div>
      <h1 className="font-semibold text-lg text-stone-700 dark:text-stone-300">
        {post.data.title}
      </h1>
      <h3 className="text-stone-500 dark:text-stone-400 mb-2">
        {post.data.date}
      </h3>
      <Markdown
        options={{
          overrides: {
            h1: {
              props: {
                className: "font-bold text-lg leading-5",
              },
            },
            h2: {
              props: {
                className: "font-semibold text-[17px]",
              },
            },
            h3: {
              props: {
                className: "font-semibold text-[16px]",
              },
            },
            p: {
              props: {
                className: "mb-2",
              },
            },
          },
        }}
      >
        {post.content}
      </Markdown>
    </div>
  );
};

export default Post;
