import { ArrowTopRightIcon } from "@radix-ui/react-icons";
import Link from "next/link";

type BlogLinkProps = {
  title: string;
};

const BlogLink = ({ title }: BlogLinkProps) => {
  return (
    <Link href="/blog/">
      <div className="rounded-sm bg-stone-300 border border-stone-400 p-2 flex flex-row items-center justify-between">
        <div className="font-semibold">
          Recruiting for New Grad
          <div className="font-normal text-stone-500">December 24, 2023</div>
        </div>
        <ArrowTopRightIcon />
      </div>
    </Link>
  );
};

export default function Home() {
  return (
    <>
      <h1 className="text-base font-semibold mb-4">Hey, I&apos;m Edmund</h1>
      <p>
        I&apos;m a recent graduate of Georgia Tech. I&apos;ve previously
        interned at Apple and Tesla. In 2024, I will be starting as a full-time
        C++ developer at TikTok. I want to be a better developer so I&apos;m
        writng about my experience learning more about programming. Outside of
        programming, I enjoy taking pictures and playing video games.
      </p>
      <div className="flex flex-row gap-4 my-4">
        <Link target="_blank" href="https://github.com/its-edmund">
          <div className="inline-flex flex-row items-center border-b border-dashed border-b-stone-600 leading-4">
            <ArrowTopRightIcon className="font-bold -ml-[3px]" /> GitHub
          </div>
        </Link>
        <Link target="_blank" href="https://www.instagram.com/fresh_fuji/">
          <div className="inline-flex flex-row items-center border-b border-dashed border-b-stone-600 leading-4">
            <ArrowTopRightIcon className="font-bold -ml-[3px]" /> Photography
          </div>
        </Link>
      </div>
      <div>
        If you&apos;re interested in my developer blog that is starting pretty
        slowly, you can check out my most recent posts:
      </div>
      <div className="my-4">
        <BlogLink title="Recruiting for New Grad" />
      </div>
    </>
  );
}
