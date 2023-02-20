import {
  faGithub,
  faLinkedin,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NextPage } from "next";
import Link from "next/link";

const Footer: NextPage = () => {
  return (
    <div className="w-screen h-32 mt-32 flex flex-col items-center justify-center z-[10000] relative">
      <p className="font-bold">Let&#39;s Connect!</p>
      <div className="flex flex-row gap-6 mt-4 text-2xl">
        <Link href={"https://linkedin.com/in/edmundxin"} passHref>
          <a
            target="_blank"
            rel="noreferrer"
            className="hover:opacity-50 transition-opacity"
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
        </Link>
        <Link
          href="https://github.com/its-edmund"
          target="_blank"
          rel="noreferrer"
        >
          <a
            target="_blank"
            rel="noreferrer"
            className="hover:opacity-50 transition-opacity"
          >
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </Link>
        <Link href={"mailto:edmund@gatech.edu"}>
          <a
            target="_blank"
            rel="noreferrer"
            className="hover:opacity-50 transition-opacity"
          >
            <FontAwesomeIcon icon={faEnvelope} />
          </a>
        </Link>
      </div>
    </div>
  );
};

export default Footer;
