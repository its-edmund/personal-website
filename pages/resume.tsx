import { Disclosure, Transition } from "@headlessui/react";
import { NextPage } from "next";
import { useState } from "react";
import Layout from "../components/Layout";

interface EntryProps {
  title: string;
  dateRange?: string;
  role?: string;
  location?: string;
  content: string[];
  gradient?: string;
  icon?: string;
}

const Entry: NextPage<EntryProps> = ({
  title,
  dateRange,
  role,
  location,
  content,
  gradient,
  icon,
}: EntryProps) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="mb-6 collapse">
      <input
        type="checkbox"
        checked={isOpen}
        onChange={(e) => setIsOpen(e.target.checked)}
      />
      <div className="collapse-title flex lg:flex-row flex-col w-full font-medium text-xl">
        <div className="mr-4 w-3 text-xl">
          {isOpen ? <h3>-</h3> : <h3>+</h3>}
        </div>
        <div>
          <div className="flex flex-row">
            <h6
              className={`text-2xl font-extrabold ${
                gradient ? "text-transparent bg-clip-text " + gradient : ""
              } mr-2`}
            >
              {title}
            </h6>
            {icon}
          </div>
          <p>{role}</p>
        </div>
        <div className="flex flex-col lg:ml-auto lg:text-right">
          <h6>{dateRange}</h6>
          <p>{location}</p>
        </div>
      </div>
      <div className="collapse-content mt-4 pl-6 text-md font-light">
        <ul className="list-disc">
          {content.map((sent) => {
            return <li key={sent}>{sent}</li>;
          })}
        </ul>
      </div>
    </div>
  );
};

const Resume: NextPage = () => {
  const [downloadButtonHover, setDownloadButtonHover] = useState(false);
  return (
    <Layout>
      <div className="px-2 xl:px-48 py-16 w-full">
        <div className="flex flex-col md:flex-row justify-between">
          <div className="flex flex-col">
            <h2 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-400">
              Edmund Xin
            </h2>
            <h4 className="text-xl font-medium">
              Software Engineering Intern & Student
            </h4>
          </div>
          <div className="flex flex-col md:text-right">
            <p>📩: edmund@gatech.edu</p>
            <p>📲: 913-617-0133</p>
            <p>🏡: San Jose</p>
          </div>
        </div>
        <div className="flex flex-col">
          <div className="flex flex-col lg:flex-row pt-12 text-xl">
            <h5 className="w-1/4 text-2xl font-extrabold mb-2 lg:mb-0">
              Education
            </h5>
            <div className="flex flex-col w-full">
              <div className="flex flex-col lg:flex-row text-xl font-medium">
                <div>
                  <div className="flex flex-row">
                    <h6 className="font-extrabold text-2xl text-transparent bg-clip-text bg-gradient-to-r from-[#B3A369] to-amber-400 mr-2">
                      Georgia Tech
                    </h6>
                    🐝
                  </div>
                  <p>B.S. in Computer Science</p>
                </div>
                <div className="flex flex-col lg:ml-auto lg:text-right">
                  <h6>Aug 2020 - Dec 2023</h6>
                  <p>Atlanta, GA</p>
                </div>
              </div>

              <p className="mt-4 font-light">
                Threads: Systems Architecture and Information Internetworks
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col">
          <div className="flex flex-col lg:flex-row mt-12 text-xl">
            <h5 className="w-1/4 text-2xl font-extrabold mb-2 lg:mb-0">
              Experience
            </h5>
            <div className="flex flex-col w-full">
              <Entry
                title="Apple"
                dateRange="May 2023 - Aug 2023"
                location="Sunnyvale, CA"
                role="Software Engineering Intern"
                icon="🍏"
                content={[
                  "Developed a low-latency Go backend service to expand the functionality of Apple’s Wi-Fi management software targeting 3,000+ access points",
                  "Improved SQL schema and queries for a PostgreSQL database, reducing query latency by 32%",
                  "Implemented React Query to establish real-time communication between backend service and React application, resulting in instant notifications and enhancing user experience by reducing response time by 75%",
                  "Created a tool that optimized workflow by 100% for the network engineer team (100+ userbase)",
                ]}
                gradient="bg-gradient-to-r from-orange-100 to-pink-100"
              />
              <Entry
                title="Tesla"
                dateRange="Aug 2022 - Dec 2022"
                location="Fremont, CA"
                role="Software Engineering Intern"
                icon="🚗"
                content={[
                  "Contributed to suite of 4 applications that provided real-time analytics and data insights for purchasing supply chain",
                  "Enriched data visualization capabilities by integrating graph and map representations using the visx library, leading to 20% fewer bug reports and reduced rendering time by over 40%",
                  "Migrated to Tailwind CSS improving developer experience, reducing bundle size by 30kB, and load times by 219ms",
                  "Empowering 400+ Global Supply Managers with valuable insights for informed pricing negotiations in EV parts",
                ]}
                gradient="bg-gradient-to-r from-red-400 to-pink-300"
              />
              <Entry
                title="Apple"
                dateRange="May 2022 - Aug 2022"
                location="Sunnyvale, CA"
                role="Software Engineering Intern"
                icon="🍏"
                content={[
                  "Spearheaded the prototyping of a no-code application with Vue.js, enabling 6 Apple internal organizations to configure the chatbot appearance",
                  "Streamlined user experience drag and drop interface to deliver an intuitive and user-friendly experience for a non-technical userbase, reducing onboarding time by 50% during user testing",
                  "Developed a JavaScript SDK to seamlessly integrate chat window into internal Apple organization websites, reducing development timeline from 3 days to 1 day",
                ]}
                gradient="bg-gradient-to-r from-orange-100 to-pink-100"
              />
              <Entry
                title="Streamr Network"
                dateRange="May 2021 - Aug 2021"
                location="Remote"
                role="Software Engineering Intern"
                icon="🔐"
                content={[
                  "Designed and prototyped a decentralized, serverless chat application that has now launched as thechat.app",
                  "Improved Network Explorer app by updating chart library with Recharts, resulting in 80% faster load times",
                  "Generated create-streamr-app, a CLI application for creating Streamr applications from 4 templates",
                ]}
                gradient="bg-gradient-to-r from-orange-400 via-violet-500 to-blue-400"
              />
            </div>
          </div>
          <div className="flex flex-col lg:flex-row text-xl">
            <h5 className="w-1/4 text-2xl font-extrabold mb-2 lg:mb-0">
              Club Work
            </h5>
            <div className="flex flex-col w-full">
              <Entry
                title="Bits of Good"
                dateRange="Jan 2021 - Current"
                location="Atlanta, GA"
                role="Software Developer"
                icon="🫶"
                content={[
                  "Led a development team to maintain non-profit organization applications and internal applications for the Bits of Good organization",
                  "Implemented course search feature using webscrapper API to aggregate course information",
                  "Deployed non-profit organization NextJS applications using Vercel and Microsoft Azure",
                  "Developed a authentication service with OAuth 2 and Express for a React-Native mobile application",
                ]}
                gradient="bg-gradient-to-r from-red-400 to-orange-400"
              />
              <Entry
                title="HexLabs"
                dateRange="Feb 2021 - Nov 2022"
                location="Atlanta, GA"
                role="Tech Team Member"
                icon="👾"
                content={[
                  "Spearheaded the migration of HexLab backend services to a centralized monorepo for increased maintability",
                  "Acted as project lead for our Admin Dashboard application which combines data of +1500 participants of HackGT",
                  "Used React Table and React Query to display scoring data of projects for HexLabs’s judging platform",
                ]}
                gradient="bg-gradient-to-r from-violet-400 to-pink-500"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="w-full flex -mt-12">
        <button
          className="min-w-fit mx-auto"
          onMouseEnter={() => setDownloadButtonHover(true)}
          onMouseLeave={() => setDownloadButtonHover(false)}
          onClick={() => {
            window.open("/Edmund_Xin_Resume.pdf");
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

export default Resume;
