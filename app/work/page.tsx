"use client";
import clsx from "clsx";
import { PropsWithChildren, useState } from "react";
import { BiRightArrowAlt } from "react-icons/bi";

interface DropdownProps {
  company: string;
  position: string;
  dates: string;
  description?: string;
}

const Experience = (
  { company, position, dates, description, children }: PropsWithChildren<
    DropdownProps
  >,
) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="flex flex-col w-full my-6">
      <div className="mb-1">
        <div className="font-semibold text-md text-stone-700 dark:text-stone-300">
          {company}
        </div>
        <div className="text-stone-500 dark:text-stone-400">
          {`${position}, ${dates}`}
        </div>
      </div>
      <div>{description}</div>
    </div>
  );
};

const Work = () => {
  return (
    <>
      <h5 className="font-semibold text-base">My Work</h5>
      <div className="w-full flex flex-col">
        {
          /*<div className="w-full flex flex-row items-center whitespace-nowrap">
                <BiRightArrowAlt size="3em" className='mb-0.5 mr-0.5' /> Tesla <hr className="w-full my-auto mx-3 border-stone-300 dark:border-stone-600" />Aug 2022 — Dec 2022
            </div>
            <div className="w-full flex flex-row items-center whitespace-nowrap">
                <BiRightArrowAlt size="3em" className='mb-0.5 mr-0.5' />Apple <hr className="w-full my-auto mx-3 border-stone-300 dark:border-stone-600" />May 2022 — Aug 2022
            </div>
            <div className="w-full flex flex-row items-center whitespace-nowrap">
                <BiRightArrowAlt size='3em' className='mb-0.5 mr-0.5' />Streamr <hr className="w-full my-auto mx-3 border-stone-300 dark:border-stone-600" />
            </div>*/
        }
        <Experience
          company="TikTok"
          position="Software Engineering"
          dates="Mar 2024"
          description="I will be starting as a C++ developer on the Recommendation Infrastructure team at TikTik in March 2024."
        />
        <hr className="border-stone-300" />
        <Experience
          company="Apple"
          position="Software Engineering Intern"
          dates="May 2023 — Aug 2023"
          description=""
        />
        <hr className="border-stone-300" />
        <Experience
          company="Tesla"
          position="Software Engineering Intern"
          dates="Aug 2022 — Dec 2022"
          description="I was a full stack intern for Tesla's Supply Chain Automation team. I worked on an application that helps Global Supply Managers analyze part prices which can help provide information for price negotiation. These tools help to reduce costs throughout the supply chain which allows for cheaper product for Tesla customers."
        />
        <hr className="border-stone-300" />
        <Experience
          company="Apple"
          position="Software Engineering Intern"
          dates="May 2022 — Aug 2022"
          description="At Apple, I worked on a no-code tool written in Vue which would allow Apple Business Stakeholders create their own chat widget to integrate with their website. This drag-and-drop tool configures the design and then a JavaScript SDK it imported into the HTML file which will make the chat window appear."
        />
        <hr className="border-stone-300" />
        <Experience
          company="Streamr"
          position="Software Engineering Intern"
          dates="Aug 2021 — Dec 2021"
          description="Streamr Network is a decentralized pub/sub network built on the Ethereum cryptocurrency. The network is made up of thousands of operator nodes which provide computing power and a path for real-time data to travel. As an intern, I was tasked to create a chat application that would utilize the Streamr Network to demostrate potential use cases."
        />
      </div>
    </>
  );
};

export default Work;
