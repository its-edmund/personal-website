import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import ExperienceCard from "../components/ExperienceCard";
import Layout from "../components/Layout";
import styles from "../styles/Home.module.css";
import { Canvas, useFrame, ThreeElements } from "@react-three/fiber";
import Box from "../components/Box";
import Wave from "react-wavify";
import Tesla from "../assets/images/tesla.svg";
import Apple from "../assets/images/apple.svg";
import Streamr from "../assets/images/streamr.svg";
import HexLabs from "../assets/images/hexlabs.svg";
import Bog from "../assets/images/bog.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRightFromBracket,
  faArrowUpRightFromSquare,
  faLink,
} from "@fortawesome/free-solid-svg-icons";
import Fade from "react-reveal/Fade";
import ReactLogo from "../assets/images/react.svg";
import TailwindLogo from "../assets/images/tailwind.svg";
import TypescriptLogo from "../assets/images/typescript.svg";
import PythonLogo from "../assets/images/python.svg";
import VimLogo from "../assets/images/vim.svg";
import NodeLogo from "../assets/images/node.svg";
import VueLogo from "../assets/images/vue.svg";
import AngularLogo from "../assets/images/angular.svg";

interface Technology {
  title: String;
  description: String;
  backgroundColor: String;
  image?: string;
}

const Technologies: Technology[] = [
  {
    title: "React",
    description: "React is how I started my software engineering career.",
    backgroundColor: "bg-cyan-400",
    image: ReactLogo,
  },

  {
    title: "Tailwind CSS",
    description:
      "Anytime I need to style components, this is my go-to library.",
    backgroundColor: "bg-blue-600",
    image: TailwindLogo,
  },
  {
    title: "Express",
    description:
      "Lightweight backend server that introduced me to backend programming.",
    backgroundColor: "bg-black",
  },
  {
    title: "NodeJS",
    description: "JavaScript runtime",
    backgroundColor: "bg-emerald-400",
    image: NodeLogo,
  },
  {
    title: "Python",
    description: "My favorite scripting language and what I use for Leetcode.",
    backgroundColor: "bg-yellow-500",
    image: PythonLogo,
  },
  {
    title: "TypeScript",
    description: "TypeScript > JavaScript, IYKYK",
    backgroundColor: "bg-blue-400",
    image: TypescriptLogo,
  },
  {
    title: "Vim",
    description: "I cannot live without Vim",
    backgroundColor: "bg-green-400",
    image: VimLogo,
  },
  {
    title: "Vue",
    description: "Secondary JavaScript Library",
    backgroundColor: "bg-teal-400",
    image: VueLogo,
  },
  {
    title: "TanStack",
    description: "React Table and React Query are the best!",
    backgroundColor: "bg-blue-900",
  },
];

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <div className="h-screen relative -mt-16">
          <div className="fixed top-16 left-32 blur-3xl opacity-25 -z-10 animate-[spin_30s_ease-in-out_infinite]">
            <svg
              id="visual"
              viewBox="0 0 900 600"
              width="900"
              height="600"
              version="1.1"
            >
              <g transform="translate(461.1348497189254 312.11913288386194)">
                <path
                  d="M100 -131.4C146 -104.3 210.9 -97 233.8 -66.5C256.8 -36.1 237.8 17.5 214.2 63.3C190.7 109.1 162.6 147.2 126.2 170.4C89.7 193.5 44.9 201.8 15.1 181C-14.7 160.2 -29.4 110.5 -76.9 90.9C-124.5 71.4 -204.9 82 -241.5 57.7C-278 33.3 -270.7 -26.2 -243.9 -70.1C-217 -114 -170.5 -142.3 -126.6 -170.1C-82.7 -197.8 -41.3 -224.9 -7.2 -215.1C27 -205.2 54.1 -158.4 100 -131.4"
                  fill="#a521f0"
                ></path>
              </g>
            </svg>
          </div>
          <div className="fixed top-4 -left-32 blur-3xl opacity-25 -z-10 animate-[grow_6s_ease-in-out_infinite]">
            <svg
              id="visual"
              viewBox="0 0 1200 900"
              width="1200"
              height="900"
              version="1.1"
            >
              <g transform="translate(442.6371297339523 290.58846234830304)">
                <path
                  d="M163.9 -139.1C213.7 -114.1 256.4 -57 256.4 0C256.4 57 213.7 114.1 163.9 144.4C114.1 174.7 57 178.4 5.5 172.8C-46 167.3 -91.9 152.6 -141.9 122.3C-191.9 91.9 -246 46 -241.4 4.6C-236.8 -36.8 -173.5 -73.5 -123.5 -98.5C-73.5 -123.5 -36.8 -136.8 10.1 -146.9C57 -157 114.1 -164.1 163.9 -139.1"
                  fill="#BB004B"
                ></path>
              </g>
            </svg>
          </div>
          <div className="fixed right-2 top-96 blur-3xl opacity-25 scale-150 animate-[spin_12s_ease-in-out_infinite]">
            <svg
              id="visual"
              viewBox="0 0 900 450"
              width="900"
              height="450"
              version="1.1"
            >
              <g transform="translate(445.491872318368 232.91239597764786)">
                <path
                  d="M179.5 -226.2C226.7 -212.7 255.1 -152.4 266.4 -92.5C277.7 -32.5 272 27 241.8 65.8C211.6 104.6 156.9 122.7 112.6 150.1C68.2 177.5 34.1 214.3 0.5 213.5C-33.1 212.8 -66.1 174.7 -112.4 147.9C-158.7 121.1 -218.2 105.7 -245.1 68.8C-272 31.9 -266.3 -26.4 -240.7 -69.9C-215.1 -113.3 -169.5 -142 -126.1 -156.7C-82.7 -171.5 -41.3 -172.2 12.4 -189.3C66.1 -206.3 132.3 -239.7 179.5 -226.2"
                  fill="#b205b7"
                ></path>
              </g>
            </svg>
          </div>
          <div className="fixed right-64 top-[560px] blur-3xl opacity-25 animate-[wiggle_12s_ease-in-out_infinite]">
            <svg
              id="visual"
              viewBox="0 0 900 450"
              width="900"
              height="450"
              version="1.1"
            >
              <g transform="translate(462.7070388603048 220.89589487300645)">
                <path
                  d="M165.1 -211.9C216.9 -189.6 264 -145.3 262.4 -97.6C260.8 -50 210.7 1.1 184.8 53.7C158.9 106.2 157.3 160.3 130.6 194.8C103.8 229.3 51.9 244.1 6 235.9C-40 227.7 -79.9 196.4 -133.4 170.6C-186.9 144.8 -254 124.5 -277.6 82.9C-301.2 41.2 -281.4 -21.9 -245.3 -63.3C-209.2 -104.7 -156.9 -124.3 -113.3 -149.3C-69.8 -174.3 -34.9 -204.7 10.9 -219.6C56.6 -234.6 113.2 -234.2 165.1 -211.9"
                  fill="#b205b7"
                ></path>
              </g>
            </svg>
          </div>
          <div className="flex flex-row h-full items-center w-3/4 mx-auto">
            {/* <div className="overflow-hidden z-0">
              <svg
                id="visual"
                viewBox="0 0 900 600"
                width="900"
                height="600"
                version="1.1"
                className="absolute blur-2xl opacity-50"
              >
                <g transform="translate(433.28466558750006 306.7363837893055)">
                  <path
                    d="M149.8 -117.9C194.8 -63 232.4 -0.7 221.5 51.9C210.6 104.5 151.1 147.3 85.5 179.7C20 212 -51.6 234 -91.3 207.8C-130.9 181.7 -138.6 107.5 -157.1 33.7C-175.7 -40.1 -205.1 -113.6 -180.7 -163.8C-156.4 -214 -78.2 -241 -12.9 -230.7C52.4 -220.4 104.8 -172.9 149.8 -117.9"
                    fill="#ff6666"
                  ></path>
                </g>
              </svg>
            </div> */}
            <Fade duration={2000}>
              <div className="w-full items-center">
                <div className="flex flex-row">
                  <h1 className="text-[84px] font-extrabold tracking-tighter -mb-4">
                    Edmund Xin
                  </h1>
                </div>
                <h3 className="text-lg font-medium">
                  Current SWE Intern @ Tesla | Student @ Georgia Tech
                </h3>
              </div>
              <div className="w-full flex-col flex items-center gap-4"></div>
            </Fade>
          </div>
        </div>
        <div className="flex flex-col gap-12 w-3/4 mx-auto">
          <Fade duration={2000}>
            <h2 className="font-extrabold text-[48px] -mb-6">Industry</h2>
          </Fade>
          <Fade duration={2000}>
            <ExperienceCard className="bg-gradient-to-l from-rose-300 to-rose-400">
              <div className="w-1/4 z-10 relative">
                <h3>Aug 2022 - Present</h3>
                <h2 className="text-5xl font-extrabold mb-4">Tesla</h2>
                <Image
                  src={Tesla}
                  alt="Tesla Logo"
                  height={75}
                  width={75}
                  className="ml-10"
                />
              </div>
              <div className="z-10 relative w-full">
                <p className="text-lg">
                  I&#39;m currently a full stack intern for Tesla&#39;s Supply
                  Chain Automation team. We&#39;re working on an application
                  that helps Global Supply Managers analyze part prices which
                  can help provide information for price negotiation. These
                  tools help to reduce costs throughout the supply chain which
                  allows for cheaper product for Tesla customers.
                </p>
              </div>
            </ExperienceCard>
          </Fade>
          <Fade duration={2000}>
            <ExperienceCard className="bg-gradient-to-r from-rose-100 to-teal-100 text-neutral-900 text-right">
              <div className="z-10 relative w-full">
                <p className="text-lg">A</p>
              </div>
              <div className="w-1/4 z-10 relative text-right ml-12">
                <h3>May 2022 - Aug 2022</h3>
                <h2 className="text-5xl font-extrabold mb-4">Apple</h2>
                <Image
                  src={Apple}
                  alt="Apple Logo"
                  height={100}
                  width={81}
                  className="ml-10"
                />
              </div>
            </ExperienceCard>
          </Fade>
          <Fade duration={2000}>
            <ExperienceCard className="bg-gradient-to-r from-orange-400 via-violet-500 to-blue-500">
              <div className="w-1/4 z-10 relative mr-6">
                <h3>May 2021 - Aug 2021</h3>
                <h2 className="text-5xl font-extrabold mb-4">Streamr</h2>
                <div className="ml-6">
                  <Image
                    src={Streamr}
                    alt="Tesla Logo"
                    height={75}
                    width={75}
                  />
                </div>
              </div>
              <div className="z-10 relative w-full">
                <p className="text-lg">
                  I&#39;m currently a full stack intern for Tesla&#39;s Supply
                  Chain Automation team. We&#39;re working on an application
                  that helps Global Supply Managers analyze part prices which
                  can help provide information for price negotiation. These
                  tools help to reduce costs throughout the supply chain which
                  allows for cheaper product for Tesla customers.
                </p>
              </div>
            </ExperienceCard>
          </Fade>
          <Fade duration={2000}>
            <h2 className="font-extrabold text-[48px] -mb-6 mt-6">Clubs</h2>
          </Fade>
          <div className="flex flex-row gap-12 items-start mb-12">
            <Fade duration={2000}>
              <div className="bg-gradient-to-tr from-violet-600 to-pink-500 w-full rounded-2xl p-1 min-h-fit">
                <div className="bg-neutral-900 w-full h-full rounded-xl px-20 py-14">
                  <a
                    href="https://hexlabs.org"
                    className="mb-4 flex flex-row items-center gap-4 h-9"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Image
                      alt="HexLabs Logo"
                      src={HexLabs}
                      width={220}
                      height={32}
                    />
                    <FontAwesomeIcon
                      icon={faArrowUpRightFromSquare}
                      className="mt-1 -ml-3"
                      size="sm"
                    />
                  </a>
                  <p className="text-lg">
                    HexLabs organizes programming events at Georgia Tech,
                    including our flagship event HackGT which sees 3200+
                    applicants and 1500+ participants.
                  </p>
                  <div className="w-4/5 mt-6 mx-auto">
                    <div className="flex">
                      <div className="flex flex-col items-center mr-4">
                        <div className="w-px h-24 bg-gradient-to-t from-fuchsia-500 to-neutral-900 ml-[11px]"></div>
                      </div>
                    </div>
                    <div className="flex">
                      <div className="flex flex-col items-center mr-4">
                        <div>
                          <div className="flex items-center justify-center w-6 h-6 bg-fuchsia-500 rounded-full"></div>
                        </div>
                        <div className="w-px h-full bg-gradient-to-b from-fuchsia-500 to-purple-500"></div>
                      </div>
                      <div className="pb-8 ">
                        <h4 className="text-xs font-medium text-neutral-300">
                          Current
                        </h4>
                        <h3 className="mb-2 text-lg font-bold text-neutral-300">
                          Project Lead
                        </h3>
                        <p className="text-neutral-300">
                          Currently leading the migration of our hardware
                          checkout system, including updating our API and
                          frontend.
                        </p>
                      </div>
                    </div>
                    <div className="flex">
                      <div className="flex flex-col items-center mr-4">
                        <div>
                          <div className="flex items-center justify-center w-6 h-6 bg-purple-500 rounded-full"></div>
                        </div>
                        <div className="w-px h-full bg-gradient-to-b from-purple-500 to-violet-700"></div>
                      </div>
                      <div className="pb-8 ">
                        <h4 className="text-xs font-medium text-neutral-300">
                          January 2022
                        </h4>
                        <h3 className="mb-2 text-lg font-bold text-neutral-300">
                          Backend Developer
                        </h3>
                        <p className="text-neutral-300">
                          Centralized backend of projects into one monorepo to
                          support all HexLabs applications.
                        </p>
                      </div>
                    </div>
                    <div className="flex">
                      <div className="flex flex-col items-center mr-4">
                        <div>
                          <div className="flex items-center justify-center w-6 h-6 bg-violet-700 rounded-full"></div>
                        </div>
                        <div className="w-px h-full bg-gradient-to-b from-violet-700 to-neutral-900"></div>
                      </div>
                      <div className="pb-8">
                        <h4 className="text-xs font-medium text-neutral-300">
                          Feburary 2021
                        </h4>
                        <h3 className="mb-2 text-lg font-bold text-neutral-300">
                          Frontend Developer
                        </h3>
                        <p className="text-neutral-300">
                          Worked on HexLab&#39;s project judging system to
                          display table data.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Fade>
            <Fade duration={2000} delay={400}>
              <div className="bg-gradient-to-bl from-red-600 to-orange-500 w-full rounded-2xl p-1 max-h-fit">
                <div className="px-20 py-14 rounded-xl w-full h-full bg-neutral-900">
                  <a
                    href="https://bitsofgood.org"
                    className="mb-4 flex flex-row items-center gap-4 h-9"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Image alt="Bog Logo" src={Bog} height={40} width={210} />
                    <FontAwesomeIcon
                      icon={faArrowUpRightFromSquare}
                      className="mt-1"
                      size="sm"
                    />
                  </a>
                  <p className="text-lg">
                    Bits of Good pairs development teams with non-profit
                    organizations to create web applications to support their
                    cause. We also maintain internal applications like GT
                    Scheduler and Bits of Good Component Library.
                  </p>
                  <div className="w-4/5 mt-6 mx-auto">
                    <div className="flex">
                      <div className="flex flex-col items-center mr-4">
                        <div className="w-px h-24 bg-gradient-to-t from-red-500 to-neutral-900 ml-[11px]"></div>
                      </div>
                    </div>
                    <div className="flex">
                      <div className="flex flex-col items-center mr-4">
                        <div>
                          <div className="flex items-center justify-center w-6 h-6 bg-red-500 rounded-full"></div>
                        </div>
                        <div className="w-px h-full bg-gradient-to-b from-red-500 to-orange-600"></div>
                      </div>
                      <div className="pb-8 ">
                        <h4 className="text-xs font-medium text-neutral-300">
                          Current
                        </h4>
                        <h3 className="mb-2 text-lg font-bold text-neutral-300">
                          Engineering Manager
                        </h3>
                        <p className="text-neutral-300">
                          Leading Bits of Good&#39;s internal tools team which
                          maintains GT Scheduler and maintenance requests for
                          previous projects.
                        </p>
                      </div>
                    </div>
                    <div className="flex">
                      <div className="flex flex-col items-center mr-4">
                        <div>
                          <div className="flex items-center justify-center w-6 h-6 bg-orange-600 rounded-full"></div>
                        </div>
                        <div className="w-px h-full bg-gradient-to-b from-orange-600 to-amber-600"></div>
                      </div>
                      <div className="pb-8 ">
                        <h4 className="text-xs font-medium text-neutral-300">
                          August 2022
                        </h4>
                        <h3 className="mb-2 text-lg font-bold text-neutral-300">
                          Product Maintenance
                        </h3>
                        <p className="text-neutral-300">
                          Bits of Good internal team which maintains handed off
                          projects and internal tools.
                        </p>
                      </div>
                    </div>
                    <div className="flex">
                      <div className="flex flex-col items-center mr-4">
                        <div>
                          <div className="flex items-center justify-center w-6 h-6 bg-amber-600 rounded-full"></div>
                        </div>
                        <div className="w-px h-full bg-gradient-to-b from-amber-600 to-yellow-600"></div>
                      </div>
                      <div className="pb-8">
                        <h4 className="text-xs font-medium text-neutral-300">
                          January 2022
                        </h4>
                        <h3 className="mb-2 text-lg font-bold text-neutral-300">
                          Boys and Girls Club of Metro Atlanta
                        </h3>
                        <p className="text-neutral-300">
                          Developer for mobile app to keep track of bus
                          transportation of elementary school students to Boys
                          and Girls Club locations.
                        </p>
                      </div>
                    </div>
                    <div className="flex">
                      <div className="flex flex-col items-center mr-4">
                        <div>
                          <div className="flex items-center justify-center w-6 h-6 bg-yellow-600 rounded-full"></div>
                        </div>
                        <div className="w-px h-full bg-gradient-to-b from-yellow-600 to-neutral-900"></div>
                      </div>
                      <div className="pb-8">
                        <h4 className="text-xs font-medium text-neutral-300">
                          September 2021
                        </h4>
                        <h3 className="mb-2 text-lg font-bold text-neutral-300">
                          Healthy Families Healthy Future
                        </h3>
                        <p className="text-neutral-300">
                          Developed website that focuses on providing affordable
                          and healthy recipes for families in need.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Fade>
          </div>
        </div>
        <div className="flex flex-col gap-12 w-3/4 mx-auto mt-16">
          <Fade duration={2000}>
            <h2 className="font-extrabold text-[48px] -mb-6">
              Technologies I Love
            </h2>
          </Fade>
          <div className="flex flex-row w-full items-start gap-8">
            <div className="flex flex-col w-full justify-start gap-8">
              {Technologies.map((tech, i) => {
                if (i % 3 !== 0) {
                  return;
                }

                return (
                  <Fade key={tech.title}>
                    <div className={`${tech.backgroundColor} p-12 rounded-lg`}>
                      {tech.image && (
                        <div className="w-3/5 mx-auto mb-10">
                          <Image
                            alt="Tech Logo"
                            src={tech.image}
                            layout="responsive"
                          />
                        </div>
                      )}
                      <h3 className="text-3xl font-extrabold">{tech.title}</h3>
                      <p>{tech.description}</p>
                    </div>
                  </Fade>
                );
              })}
            </div>
            <div className="flex flex-col w-full justify-start gap-8">
              {Technologies.map((tech, i) => {
                if (i % 3 !== 1) {
                  return;
                }

                return (
                  <Fade key={tech.title}>
                    <div className={`${tech.backgroundColor} p-12 rounded-lg`}>
                      {tech.image && (
                        <div className="w-3/5 mx-auto mb-10">
                          <Image
                            alt="Tech Logo"
                            src={tech.image}
                            layout="responsive"
                          />
                        </div>
                      )}
                      <h3 className="text-3xl font-extrabold">{tech.title}</h3>
                      <p>{tech.description}</p>
                    </div>
                  </Fade>
                );
              })}
            </div>
            <div className="flex flex-col w-full justify-start gap-8">
              {Technologies.map((tech, i) => {
                if (i % 3 !== 2) {
                  return;
                }

                return (
                  <Fade key={tech.title}>
                    <div className={`${tech.backgroundColor} p-12 rounded-lg`}>
                      {tech.image && (
                        <div className="w-3/5 mx-auto mb-10">
                          <Image
                            alt="Tech Logo"
                            src={tech.image}
                            layout="responsive"
                          />
                        </div>
                      )}

                      <h3 className="text-3xl font-extrabold">{tech.title}</h3>
                      <p>{tech.description}</p>
                    </div>
                  </Fade>
                );
              })}
            </div>
          </div>
          <Fade>
            <h4 className="font-bold text-2xl text-center mb-12">
              And more! I love learning new technologies!
            </h4>
          </Fade>
          <Fade>
            <h2 className="font-extrabold text-[48px] -mb-6">
              Technologies I Hate
            </h2>
            <Fade>
              <div className="flex flex-row gap-8">
                <div className="w-full">
                  <div className={`bg-red-500 p-12 rounded-lg`}>
                    <div className="w-3/5 mx-auto mb-10">
                      <Image
                        alt="Angular Logo"
                        src={AngularLogo}
                        layout="responsive"
                      />
                    </div>

                    <h3 className="text-3xl font-extrabold">Angular</h3>
                    <p>Do I need to elaborate?</p>
                  </div>
                </div>
                <div className="w-full"></div>
                <div className="w-full"></div>
              </div>
            </Fade>
          </Fade>
        </div>
      </Layout>
    </div>
  );
};

export default Home;
