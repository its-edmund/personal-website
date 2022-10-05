import Link from "next/link";
import { useRouter } from "next/router";
import { createRef, useEffect, useRef, useState } from "react";

interface NavbarProps {
  isSticky: boolean;
}

const Navbar = ({ isSticky }: NavbarProps) => {
  const [stuck, setStuck] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);
  const router = useRouter();
  const currentRoute = router.pathname;

  useEffect(() => {
    const cachedRef = ref.current;
    const observer = new IntersectionObserver(
      ([e]) => {
        console.log(e.isIntersecting);
        return setStuck(e.isIntersecting);
      },
      { threshold: [1] }
    );
    observer.observe(cachedRef!);
    return () => observer.unobserve(cachedRef!);
  }, [ref]);

  useEffect(() => {
    console.log(stuck);
  }, [stuck]);

  return (
    <div
      className={`sticky top-0 w-screen h-16 bg-[rgba(81, 81, 81, .5)] backdrop-filter backdrop-blur-md z-[101] flex flex-row justify-center items-center gap-4 ${
        isSticky ? "border-b border-neutral-800" : "border-none"
      }`}
      ref={ref}
    >
      <Link href="/">
        <a
          className={`hover:bg-white hover:text-black px-6 py-1 rounded-full transition-colors ${
            currentRoute === "/" ? "bg-white text-black" : "text-white"
          }`}
        >
          Home
        </a>
      </Link>
      <Link href="/resume">
        <a
          className={`hover:bg-white hover:text-black px-6 py-1 rounded-full transition-colors ${
            currentRoute === "/resume" ? "bg-white text-black" : "text-white"
          }`}
        >
          Resume
        </a>
      </Link>
      <Link href="/blog">
        <a
          className={`px-6 py-1 rounded-full hover:bg-white hover:text-black transition-colors ${
            currentRoute === "/blog" ? "bg-white text-black" : "text-white"
          }`}
        >
          Blog
        </a>
      </Link>
      <Link href="/projects">
        <a
          className={`px-6 py-1 rounded-full hover:bg-white hover:text-black transition-colors ${
            currentRoute === "/projects" ? "bg-white text-black" : "text-white"
          }`}
        >
          Projects
        </a>
      </Link>
    </div>
  );
};

export default Navbar;
