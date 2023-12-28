import Link from "next/link";
import DarkModeToggle from "./DarkModeToggle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const Sidebar = () => {
  return (
    <div className="font-diatype p-10 text-stone-600 dark:text-stone-200 fixed h-screen flex flex-col justify-between">
      <div>
        <h5 className="font-semibold text-lg">
          <Link href="/">
            Edmund Xin
          </Link>
        </h5>
        <div className="flex flex-col text-sm">
          <Link href="/work">Work</Link>
          <Link href="/projects">Projects</Link>
          <Link href="/blog">Blog</Link>
        </div>
        <div className="flex flex-row gap-2 mt-2">
          <Link href="https://github.com/its-edmund">
            <FontAwesomeIcon icon={faGithub} size="xl" />
          </Link>
          <Link href="https://linkedin.com/in/edmundxin">
            <FontAwesomeIcon icon={faLinkedin} size="xl" />
          </Link>
        </div>
      </div>
      <DarkModeToggle />
    </div>
  );
};

export default Sidebar;
