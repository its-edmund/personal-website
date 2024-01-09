import fs from "fs";
import Markdown from "markdown-to-jsx";
import matter from "gray-matter";
import getPostMetadata from "@/app/_components/getPostMetadata";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { materialDark } from "react-syntax-highlighter/dist/esm/styles/prism";

const Code = ({ className, children }) => {
  let lang = "text";
  if (className && className.startsWith("lang-")) {
    lang = className.replace("lang-", "");
  }
  console.log(lang);
  return (
    <SyntaxHighlighter
      language={lang}
      style={materialDark}
      className="rounded my-16"
    >
      {children}
    </SyntaxHighlighter>
  );
};

const PreBlock = ({ children, ...rest }) => {
  if ("type" in children && children["type"] === "code") {
    return Code(children["props"]);
  }
  return <pre {...rest}>{children}</pre>;
};

const getPostContent = (slug: string) => {
  const folder = "posts/";
  const file = `${folder}${slug}.md`;
  const content = fs.readFileSync(file, "utf8");
  const frontMatter = matter(content);
  return frontMatter;
};

export const generateStaticParams = async () => {
  const posts = getPostMetadata();
  return posts.map((post) => ({
    slug: post.slug,
  }));
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
            pre: {
              component: PreBlock,
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
