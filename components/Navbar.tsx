import { faHamburger } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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
  const [menuOpen, setMenuOpen] = useState(false);
  const mobileLinkHeight = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (mobileLinkHeight.current?.clientHeight !== 0) {
      setHeight(mobileLinkHeight.current?.clientHeight as number);
    }
    console.log(height);
  });

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
      className={`transition-all max-h-fit sticky top-0 w-screen md:h-16 md:bg-[rgba(81, 81, 81, .5)] bg-[rgba(0, 0, 0, 1)] backdrop-filter backdrop-blur-md z-[101] flex md:flex-row flex-col justify-center items-end md:items-center ${
        isSticky ? "border-b border-neutral-800" : "border-none"
      }`}
      ref={ref}
    >
      <button className="m-4 md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
        <FontAwesomeIcon icon={faHamburger} size="3x" />
      </button>
      <div
        className={`md:hidden flex flex-col text-3xl gap-8 transition-all ease-in-out duration-300 overflow-hidden ${
          menuOpen ? `h-[250px]` : "h-0"
        }`}
      >
        <div ref={mobileLinkHeight} className="flex flex-col gap-4 items-end">
          <Link href="/">
            <a
              className={`hover:underline hover:underline-offset-4 hover:decoration-2 px-6 py-1 transition-colors ${
                currentRoute === "/"
                  ? "underline underline-offset-4 decoration-2"
                  : "text-white"
              }`}
            >
              Home
            </a>
          </Link>
          <Link href="/resume">
            <a
              className={`hover:underline hover:underline-offset-4 hover:decoration-2 px-6 py-1 transition-colors ${
                currentRoute === "/resume"
                  ? "underline underline-offset-4 decoration-2"
                  : "text-white"
              }`}
            >
              Resume
            </a>
          </Link>
          <Link href="/blog">
            <a
              className={`hover:underline hover:underline-offset-4 hover:decoration-2 px-6 py-1 transition-colors ${
                currentRoute === "/blog"
                  ? "underline underline-offset-4 decoration-2"
                  : "text-white"
              }`}
            >
              Blog
            </a>
          </Link>
          <Link href="/projects">
            <a
              className={`hover:underline hover:underline-offset-4 hover:decoration-2 px-6 py-1 transition-colors ${
                currentRoute === "/projects"
                  ? "underline underline-offset-4 decoration-2"
                  : "text-white"
              }`}
            >
              Projects
            </a>
          </Link>
        </div>
      </div>
      <div className="flex-row gap-4 hidden md:flex">
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
              currentRoute === "/projects"
                ? "bg-white text-black"
                : "text-white"
            }`}
          >
            Projects
          </a>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
