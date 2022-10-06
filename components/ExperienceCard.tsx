import { NextComponentType, NextPage } from "next";
import Image from "next/image";
import Tesla from "../assets/images/tesla.svg";

interface ExperienceCardProps {
  className: String;
  children: JSX.Element | JSX.Element[];
}

const ExperienceCard: NextPage<ExperienceCardProps> = ({
  className,
  children,
}: ExperienceCardProps) => {
  return (
    <div
      className={`w-full px-12 py-12 md:px-20 md:py-14 rounded-2xl flex md:flex-row flex-col relative ${className}`}
    >
      {children}
    </div>
  );
};

export default ExperienceCard;
