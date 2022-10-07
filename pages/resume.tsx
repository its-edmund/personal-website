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
  return (
    <div className="mb-6">
      <div className="flex lg:flex-row flex-col w-full font-medium text-xl">
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

      <div className="mt-4 pl-6 text-md font-light">
        <ul className="list-disc">
          {content.map((sent) => {
            return <li key={sent}>{sent}</li>;
          })}
        </ul>
      </div>
      <p className="mt-4"></p>
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
                  <h6>Aug 2020 - May 2024</h6>
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
          <div className="flex flex-col lg:flex-row py-12 text-xl">
            <h5 className="w-1/4 text-2xl font-extrabold mb-2 lg:mb-0">
              Experience
            </h5>
            <div className="flex flex-col w-full">
              <Entry
                title="Tesla"
                dateRange="Aug 2022 - Present"
                location="Fremont, CA"
                role="Software Engineering Intern"
                icon="🚗"
                content={[
                  "Maintained React application that optimizes the purchasing of parts for Tesla's Global Supply Managers and automate the process of supplying parts in the supply chain",
                  "Implemented graph and map data visualization using the visx library and table data using React Table library",
                  "Migrated application's frontend library from Styled Components to Tailwind CSS",
                  "Used by over 400 Global Supply Managers to aid in negotiation of pricing for car parts",
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
                  "Protoyped a no-code application to allow Apple internal business stakeholders configure using the Vue JavaScript library",
                  "Used HTML Drag and Drop API to facilitate an intuitive user experience for a non-technical userbase",
                  "Developed a JavaScript SDK to integrate chat window into internal Apple organization websites",
                  "Embedded payment form into Ask Apple to increase user retention",
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
                  "Streamlined our Network Explorer application through replacing a deprecated chart library with Recharts library",
                  "Designed and prototyped a chat application using React and TypeScript with Streamr-Client for receiving live data",
                  "Created a CLI tool called create-streamr-app to create templates for Streamr applications",
                ]}
                gradient="bg-gradient-to-r from-orange-400 via-violet-500 to-blue-400"
              />
              <Entry
                title="HexLabs"
                dateRange="Feb 2021 - Current"
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
          <div className="bg-gradient-to-r from-violet-400 to-pink-500 max-w-fit mx-auto rounded-full font-bold text-xl flex">
            <div
              className={`px-8 py-3 w-full h-full rounded-full bg-neutral-900 flex-1 m-1 ${
                downloadButtonHover ? "bg-transparent" : ""
              } transition-colors`}
            >
              <h6
                className={`whitespace-nowrap transition-colors ${
                  !downloadButtonHover
                    ? "text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-pink-500"
                    : "text-white"
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
