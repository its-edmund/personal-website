import Image from "next/image";
import Sidebar from "./_components/Sidebar";

export default function Home() {
  return (
    <main className="h-screen">
      <h1 className="text-base font-semibold">Hey, I&apos;m Edmund</h1>
      <p>
        I&apos;m a recent graduate of Georgia Tech. I&apos;ve previously
        interned at Apple and Tesla. In 2024, I will be starting as a full-time
        C++ developer at TikTok. I want to be a better developer so I&apos;m
        writng about my experience learning more about programming.
      </p>
    </main>
  );
}