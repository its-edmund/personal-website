import { NextPage } from "next";
import Image from "next/image";
import Layout from "../components/Layout";

const Blog: NextPage = () => {
  return (
    <Layout>
      <div className="px-12">
        <h1 className="text-[64px] font-extrabold mb-12 text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-yellow-400">
          Blog
        </h1>
        <div className="hover:bg-neutral-500/20 px-12 py-16 rounded-3xl">
          <div className="flex flex-row gap-12">
            <div className="w-1/2 h-80 relative shadow-[0_0_60px_15px_rgba(195,75,0,0.3)]">
              <Image
                alt="Placeholder"
                src="https://placehold.co/200x150"
                className="object-cover rounded-xl"
                layout="fill"
              />
            </div>
            <div className="flex flex-col justify-center">
              <h6 className="text-lg">March 28, 2022</h6>
              <h2 className="text-6xl font-bold mb-4">Coming Soon</h2>
              <p>
                Wowza, this is really cool and if you&#39;re interested, you
                should click on this card.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Blog;
