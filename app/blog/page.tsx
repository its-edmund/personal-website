import Link from "next/link";
import getPostMetadata from "../_components/getPostMetadata";

const Blog = () => {
  const postMetadata = getPostMetadata();
  const postLinks = postMetadata.filter((post) => post.draft !== true).sort(
    (a, b) => {
      const a_date = new Date(a.date);
      const b_date = new Date(b.date);
      return (b_date as any) - (a_date as any);
    },
  ).map(
    (post) => {
      return (
        <div className="py-2" key={post.slug}>
          <Link href={`/posts/${post.slug}`}>
            <div className="">
              <div className="font-medium text-base">
                {post.title}
              </div>
              <div className="text-stone-400">
                {post.date}
              </div>
            </div>
          </Link>
        </div>
      );
    },
  );
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
