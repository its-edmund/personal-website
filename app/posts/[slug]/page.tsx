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
        className="pb-10"
        options={{
          overrides: {
            h1: {
              props: {
                className: "font-bold text-lg leading-5 mb-1 mt-4",
              },
            },
            h2: {
              props: {
                className: "font-semibold text-[17px] mb-1 mt-4",
              },
            },
            h3: {
              props: {
                className: "font-semibold text-[16px] mb-1 mt-4",
              },
            },
            p: {
              props: {
                className: "mb-2",
              },
            },
            li: {
              props: {
                className: "list-disc list-inside",
              },
            },
            ul: {
              props: {
                className: "my-3",
              },
            },
            a: {
              props: {
                className: "underline",
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
