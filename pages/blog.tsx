import { NextPage } from "next";
import Image from "next/image";
import Layout from "../components/Layout";

const Blog: NextPage = () => {
  return (
    <Layout>
      <div className="px-64">
        <h1 className="text-[100px] font-extrabold mb-12">Blog</h1>
        <div className="flex flex-row gap-12">
          <div className="w-1/2 h-96 relative">
            <Image
              alt="Placeholder"
              src="https://placehold.co/200x150"
              className="object-cover rounded-xl"
              layout="fill"
            />
          </div>
          <div className="flex flex-col justify-center">
            <h6 className="text-lg">March 28, 2022</h6>
            <h2 className="text-[72px] font-bold">Coming Soon</h2>
            <p>
              Wowza, this is really cool and if you&#39;re interested, you
              should click on this card.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Blog;
