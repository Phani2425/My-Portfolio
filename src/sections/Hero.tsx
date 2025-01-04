"use client";

import memojiImage from "@/assets/images/memoji-computer.png";
import Image from "next/image";
import ArrowDown from "@/assets/icons/arrow-down.svg";
import grainImage from "@/assets/images/grain.jpg";
import StartIcon from "@/assets/icons/star.svg";
import HeroOrbit from "@/components/HeroOrbit";
import SparkleIcon from "@/assets/icons/sparkle.svg";
import { Link } from "react-scroll";

export const HeroSection = () => {
  return (
    <div
      className="py-32 md-:py-48 lg:py-60 relative z-0 overflow-x-clip"
      id="home"
    >
      <div className="absolute inset-0  [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_70%,transparent)] -z-30">
        <div
          className="absolute inset-0 -z-30 opacity-5"
          style={{ backgroundImage: `url(${grainImage.src})` }}
        ></div>

        {/* hero rings */}

        <div className="size-[620px] hero-ring "></div>
        <div className="size-[820px] hero-ring "></div>
        <div className="size-[1020px] hero-ring "></div>
        <div className="size-[1220px] hero-ring "></div>

        {/* stars */}
        <HeroOrbit
          size={430}
          rotate={-14}
          shouldOrbit
          orbitDuration={30}
          shouldSpin
          spinDuration={3}
        >
          <SparkleIcon className="size-8 text-emerald-300/20" />
        </HeroOrbit>

        <HeroOrbit
          size={440}
          rotate={198}
          shouldOrbit
          orbitDuration={32}
          shouldSpin
          spinDuration={6}
        >
          <StartIcon className="size-6 text-emerald-300" />
        </HeroOrbit>

        <HeroOrbit
          size={450}
          rotate={79}
          shouldOrbit
          orbitDuration={34}
          shouldSpin
          spinDuration={3}
        >
          <SparkleIcon className="size-5 text-emerald-300/20" />
        </HeroOrbit>

        <HeroOrbit size={520} rotate={-41} shouldOrbit orbitDuration={36}>
          <div className="size-2 rounded-full bg-emerald-300/20"></div>
        </HeroOrbit>

        <HeroOrbit
          size={530}
          rotate={178}
          shouldOrbit
          orbitDuration={38}
          shouldSpin
          spinDuration={3}
        >
          <SparkleIcon className="size-10 text-emerald-300/20" />
        </HeroOrbit>

        <HeroOrbit
          size={550}
          rotate={20}
          shouldOrbit
          orbitDuration={40}
          shouldSpin
          spinDuration={6}
        >
          <StartIcon className="size-12 text-emerald-300" />
        </HeroOrbit>

        <HeroOrbit
          size={590}
          rotate={98}
          shouldOrbit
          orbitDuration={42}
          shouldSpin
          spinDuration={6}
        >
          <StartIcon className="size-8 text-emerald-300" />
        </HeroOrbit>

        <HeroOrbit size={650} rotate={-5} shouldOrbit orbitDuration={44}>
          <div className="size-2 rounded-full bg-emerald-300/20"></div>
        </HeroOrbit>

        <HeroOrbit
          size={710}
          rotate={144}
          shouldOrbit
          orbitDuration={46}
          shouldSpin
          spinDuration={3}
        >
          <SparkleIcon className="size-14 text-emerald-300/20" />
        </HeroOrbit>

        <HeroOrbit size={720} rotate={85} shouldOrbit orbitDuration={48}>
          <div className="size-3 rounded-full bg-emerald-300/20"></div>
        </HeroOrbit>

        <HeroOrbit
          size={800}
          rotate={-72}
          shouldOrbit
          orbitDuration={50}
          shouldSpin
          spinDuration={6}
        >
          <StartIcon className="size-28 text-emerald-300" />
        </HeroOrbit>

        <HeroOrbit
          size={940}
          rotate={-90}
          shouldOrbit
          orbitDuration={52}
          shouldSpin
          spinDuration={3}
        >
          <SparkleIcon className="size-12 text-emerald-300/20" />
        </HeroOrbit>

        <HeroOrbit size={950} rotate={-65} shouldOrbit orbitDuration={54}>
          <div className="size-2 rounded-full bg-emerald-300/20"></div>
        </HeroOrbit>
      </div>

      <div className="container">
        <div className="flex flex-col items-center">
          <Image
            src={memojiImage}
            className="size-[100px]"
            alt="Person peeking from behind laptop"
          />

          <div className="bg-gray-950 border border-gray-800 px-4 py-1.5 inline-flex items-center gap-4 rounded-lg">
            <div className="bg-green-500 size-2.5 rounded-full relative">
              <div className="bg-green-500  rounded-full absolute inset-0 animate-ping-large"></div>
            </div>
            <div className="text-sm font-med\">Available for new projects</div>
          </div>
        </div>
        <div className="max-w-lg mx-auto ">
          <h1 className=" font-serif text-3xl md:text-5xl text-center mt-8 tracking-wide">
            Building Exceptional User Experiences
          </h1>
          <p className="mt-4 text-center text-white/60 md:text-lg">
            I specialize in transforming designs into functional,
            high-performing web applications. Let&apos;s work together to create
            something exceptional.
          </p>
        </div>

        <div className="flex flex-col md:flex-row justify-center items-center mt-8 gap-4">
          <Link to="projects" spy={true} smooth={true} duration={400}>
            <button className="inline-flex items-center gap-2 border border-white/15 px-6 h-12 rounded-xl">
              <span className="font-semibold">Explore My Work</span>
              <ArrowDown className="size-4" />
            </button>
          </Link>
          <Link to="contact" spy={true} smooth={true} duration={600}>
            <button className="inline-flex items-center gap-2 border-white bg-white text-gray-900 h-12 px-6 rounded-xl">
              <span>👋</span>
              <span className="font-semibold">Let&apos;s Connect</span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};
