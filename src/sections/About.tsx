"use client";
import Card from "@/components/Card";
import SectionHeader from "@/components/SectionHeader";
import bookImage from "@/assets/images/book-cover.png";
import Image from "next/image";
import TypeScript from "@/assets/icons/typescript-svgrepo-com.svg";
import JavascriptIcon from "@/assets/icons/square-js.svg";
import HTMLIcon from "@/assets/icons/html5.svg";
import CSSIcon from "@/assets/icons/css3.svg";
import ReactIcon from "@/assets/icons/react.svg";
import GitHubIcon from "@/assets/icons/github.svg";
import ChromeIcon from "@/assets/icons/chrome.svg";

import MapIndiaImage from "@/assets/images/mapIndia.jpeg";
import smileMemoji from "@/assets/images/memoji-smile.png";
import { motion } from "framer-motion";

import {
  TbBrandNextjs,
  TbBrandReact,
  TbBrandTypescript,
  TbBrandMongodb,
  TbBrandFirebase,
  TbBrandAws,
  TbBrandDocker,
} from "react-icons/tb";
import { SiExpress, SiPostgresql } from "react-icons/si";
import { BiLogoCPlusPlus } from "react-icons/bi";
import CardHeader from "@/components/CardHeader";
import ToolBoxItem from "@/components/ToolBoxItem";
import { useRef } from "react";

const techStack = [
  { title: "TypeScript", icon: <TbBrandTypescript />, left: "5%", top: "5%" },
  { title: "React", icon: <TbBrandReact size={23} />, left: "50%", top: "5%" },
  {
    title: "NextJs",
    icon: <TbBrandNextjs size={23} />,
    left: "10%",
    top: "35%",
  },
  { title: "Express", icon: <SiExpress size={23} />, left: "35%", top: "40%" },
  {
    title: "MongoDB",
    icon: <TbBrandMongodb size={23} />,
    left: "70%",
    top: "30%",
  },
  {
    title: "PostgreSQL",
    icon: <SiPostgresql size={23} />,
    left: "5%",
    top: "65%",
  },
  {
    title: "FireBase",
    icon: <TbBrandFirebase size={23} />,
    left: "45%",
    top: "70%",
  },
  { title: "AWS", icon: <TbBrandAws size={23} />, left: "70%", top: "60%" },
  { title: "C++", icon: <BiLogoCPlusPlus size={23} />, left: "85%", top: "5%" },
  {
    title: "Docker",
    icon: <TbBrandDocker size={23} />,
    left: "25%",
    top: "15%",
  },
];

const toolboxItems = [
  { title: "Javascript", iconType: JavascriptIcon },
  { title: "HTML5", iconType: HTMLIcon },
  { title: "CSS3", iconType: CSSIcon },
  { title: "React", iconType: ReactIcon },
  { title: "Chrome", iconType: ChromeIcon },
  { title: "GitHub", iconType: GitHubIcon },
];

export const AboutSection = () => {
  const constraintRef = useRef(null);

  return (
    <div className="pt-20 lg:pt-28" id="about">
      <div className="container">
        <SectionHeader
          eyebrow="About Me"
          title="A Glimpse Into My World"
          description="Learn more about who I am, what I do, and what inspires me"
        />

        <div className="mt-20 flex flex-col gap-8">
          <div className="flex flex-col gap-8 md:grid md:grid-cols-5 lg:grid-cols-3">
            <Card className="h-[320px] md:col-span-2 lg:col-span-1">
              <CardHeader
                title="My Reads"
                description="Explore the books shaping my perspectives"
              />

              <div className="w-40 mx-auto mt-2 ">
                <Image src={bookImage} alt="book" />
              </div>
            </Card>

            <Card className="h-[320px] md:col-span-3 lg:col-span-2 ">
              <CardHeader
                title="My ToolBox"
                description="Explore the tools I use to craft exceptional digital
                experiences."
                className="px-6 pt-6"
              />

              <ToolBoxItem
                toolboxItems={toolboxItems}
                className=""
                itemsWrapperClassName=" animate-move-left [animation-duration:30s]  "
              />
              <ToolBoxItem
                toolboxItems={toolboxItems}
                className="mt-6 "
                itemsWrapperClassName="-translate-x-1/2 animate-move-right [animation-duration:30s] "
              />
            </Card>

            <Card className="h-[320px] flex flex-col md:col-span-3 lg:col-span-2">
              <CardHeader
                title="Techs that i work with"
                description="Explore the techstack i fell in love with..(made it as chaotic as I am 🔥)"
                className=""
              />

              <div className="relative p-1 flex-1" ref={constraintRef}>
                {techStack.map((item) => (
                  <motion.div
                    key={item.title}
                    className="inline-flex items-center gap-3 px-6 bg-gradient-to-r from-emerald-300 to-sky-400 py-1.5 rounded-full absolute"
                    style={{ left: item.left, top: item.top }}
                    drag
                    dragConstraints={constraintRef}
                    dragTransition={{ bounceStiffness: 600, bounceDamping: 20 }}
                    whileDrag={{ scale: 1.05 }}
                    whileTap={{ cursor: "grabbing" }}
                  >
                    <span className="font-medium text-gray-950">
                      {item.title}
                    </span>
                    <span className="text-sky-900">{item.icon}</span>
                  </motion.div>
                ))}
              </div>
            </Card>

            <Card className="h-[320px] p-0 relative md:col-span-2 lg:col-span-1">
              <Image
                src={MapIndiaImage}
                alt="map"
                className="h-full w-full object-cover"
              />
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  size-20 rounded-full  after:content-[''] after:absolute after:inset-0 after:outline after:outline-2 after:-outline-offset-2 after:rounded-full after:outline-gray-950/30">
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 -z-20 animate-ping [animation-duration:2s]"></div>

                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 -z-10"></div>
                <Image
                  src={smileMemoji}
                  alt="smileMemoji"
                  className="size-20"
                />
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};
