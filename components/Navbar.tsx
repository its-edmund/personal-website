import Link from "next/link";
import { createRef, useEffect, useRef, useState } from "react";

interface NavbarProps {
  isSticky: boolean;
}

const Navbar = ({ isSticky }: NavbarProps) => {
  const [stuck, setStuck] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);

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
      className={`sticky top-0 w-screen h-16 bg-[rgba(81, 81, 81, .5)] backdrop-filter backdrop-blur-md z-[101] flex flex-row justify-center items-center gap-12 ${
        isSticky ? "border-b border-neutral-800" : "border-none"
      }`}
      ref={ref}
    >
      <Link href="/about">About</Link>
      <Link href="/blog">Blog</Link>
      <Link href="/projects">Projects</Link>
    </div>
  );
};

export default Navbar;
