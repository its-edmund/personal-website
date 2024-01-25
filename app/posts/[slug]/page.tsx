import fs from "fs";
import Markdown from "react-markdown";

import matter from "gray-matter";
import getPostMetadata from "@/app/_components/getPostMetadata";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { materialDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import rehypeKatex from "rehype-katex";
import remarkMath from "remark-math";
import "katex/dist/katex.min.css";

// const Code = ({ className, children }) => {
//   let lang = "text";
//   if (className && className.startsWith("lang-")) {
//     lang = className.replace("lang-", "");
//   }
//   return (
//     <div className="my-4">
//       <SyntaxHighlighter
//         language={lang}
//         style={materialDark}
//         className="rounded"
//       >
//         {children}
//       </SyntaxHighlighter>
//     </div>
//   );
// };
//
// const PreBlock = ({ children, ...rest }) => {
//   if ("type" in children && children["type"] === "code") {
//     return Code(children["props"]);
//   }
//   return <pre {...rest}>{children}</pre>;
// };

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

const H1 = ({ children }) => {
  return <h1 className="fontbold text-lg leading-5 mb-1 mt-4">{children}</h1>;
};

const H2 = ({ children }) => {
  return <h2 className="font-semibold text-[17px] mb-1 mt-4">{children}</h2>;
};

const H3 = ({ children }) => {
  return <h3 className="font-semibold text-[16px] mb-1 mt-4">{children}</h3>;
};

const P = ({ children }) => {
  return <p className="mb-2">{children}</p>;
};

const Li = ({ children }) => {
  return <li className="list-disc list-inside">{children}</li>;
};

const Ul = ({ children }) => {
  return <ul className="my-3">{children}</ul>;
};

const A = ({ children, href }) => {
  return <a className="underline" target="_blank" href={href}>{children}</a>;
};

const Img = ({ alt, src, title }) => {
  return (
    <div className="my-4">
      <img
        src={src}
        alt={alt}
        title={title}
        className="max-w-full rounded shadow-md"
      />
      {title && <p className="text-center text-sm mt-2">{title}</p>}
    </div>
  );
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
        className="pb-10" // options={{
        remarkPlugins={[remarkMath]}
        rehypePlugins={[rehypeKatex]}
        components={{
          h1: H1,
          h2: H2,
          h3: H3,
          p: P,
          li: Li,
          ul: Ul,
          a: A,
          code(props) {
            const { children, className, node, ...rest } = props;
            const match = /language-(\w+)/.exec(className || "");
            return match
              ? (
                <SyntaxHighlighter
                  {...rest}
                  PreTag="div"
                  children={String(children).replace(/\n$/, "")}
                  language={match[1]}
                  style={materialDark}
                  className="rounded shadow-md"
                />
              )
              : (
                <code {...rest} className={className}>
                  {children}
                </code>
              );
          },
          img: Img,
        }}
        //   renderRule(next, node, renderChildren, state) {
        //     if (node.type === RuleType.codeBlock && node.lang === "latex") {
        //       return (
        //         <TeX as="div" key={state.key}>{String.raw`${node.text}`}</TeX>
        //       );
        //     }
        //
        //     return next();
        //   },
        //   overrides: {
        //     h1: {
        //       props: {
        //         className: "font-bold text-lg leading-5 mb-1 mt-4",
        //       },
        //     },
        //     h2: {
        //       props: {
        //         className: "font-semibold text-[17px] mb-1 mt-4",
        //       },
        //     },
        //     h3: {
        //       props: {
        //         className: "font-semibold text-[16px] mb-1 mt-4",
        //       },
        //     },
        //     p: {
        //       props: {
        //         className: "mb-2",
        //       },
        //     },
        //     li: {
        //       props: {
        //         className: "list-disc list-inside",
        //       },
        //     },
        //     ul: {
        //       props: {
        //         className: "my-3",
        //       },
        //     },
        //     a: {
        //       props: {
        //         className: "underline",
        //       },
        //     },
        //     pre: {
        //       component: PreBlock,
        //     },
        //   },
        // }}
      >
        {post.content}
      </Markdown>
    </div>
  );
};

export default Post;
