import { NextPage } from "next";
import Image from "next/image";
import { useState } from "react";
import Layout from "../components/Layout";

const Blog: NextPage = () => {
  const [downloadButtonHover, setDownloadButtonHover] = useState(false);
  const [password, setPassword] = useState("");

  return (
    <Layout>
      {
        /*<div className="px-12">
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
      </div>*/
      }
      <div className="w-full flex flex-col gap-4 items-center align-center pt-24">
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          className="outline-none rounded-md text-2xl px-2 py-1"
        />
        <button
          className="min-w-fit mx-auto"
          onMouseEnter={() => setDownloadButtonHover(true)}
          onMouseLeave={() => setDownloadButtonHover(false)}
          onClick={() => {
            if (password == "password") {
              window.open("/Cover_Letter.pdf");
            }
          }}
        >
          <div className="bg-gradient-to-r from-violet-600 to-fuchsia-500 max-w-fit mx-auto rounded-[8.5px] font-bold text-xl flex shadow-[0_0_45px_0px_rgba(195,0,240,0.3)]">
            <div
              className={`px-8 py-3 w-full h-full rounded-[7px] bg-neutral-900 flex-1 m-[2px] ${
                downloadButtonHover ? "bg-transparent" : ""
              } transition-colors`}
            >
              <h6
                className={`whitespace-nowrap transition-colors ${
                  !downloadButtonHover ? "text-white" : "text-black"
                }`}
              >
                Download a Copy
              </h6>
            </div>
          </div>
        </button>
      </div>
    </Layout>
  );
};

export default Blog;
