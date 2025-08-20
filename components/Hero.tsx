import dynamic from "next/dynamic";
import { FaLocationArrow } from "react-icons/fa6";
import { memo } from "react";

import MagicButton from "./MagicButton";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";

// Lazy load heavy components
const SparklesCore = dynamic(() => import("./ui/Sparkles").then(mod => ({ default: mod.SparklesCore })), {
  ssr: false,
  loading: () => <div className="w-full h-full bg-transparent" />
});

const Hero = memo(() => {
  return (
    <div className="pb-10 pt-20 sm:pb-16 sm:pt-28 md:pb-20 md:pt-36 min-h-screen flex items-center">
      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="h-[80vh] w-[50vw] top-10 left-full hidden md:block"
          fill="purple"
        />
        <Spotlight className="left-80 top-28 h-[80vh] w-[50vw] hidden lg:block" fill="blue" />
      </div>

      <div
        className="h-screen w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.03] bg-grid-black-100/[0.2]
       absolute top-0 left-0 flex items-center justify-center"
      >
        {/* Radial gradient for the container to give a faded look */}
        <div
          className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100
         bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"
        />
      </div>

      <div className="flex justify-center relative w-full z-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-[89vw] sm:max-w-xl md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          <p className="uppercase tracking-widest text-xs sm:text-sm text-center text-blue-100 max-w-xs sm:max-w-sm md:max-w-md">
            Hey, Welcome to my world where I
          </p>

          <TextGenerateEffect
            words="Turn Ideas into User-Friendly Applications"
            className="text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl px-2"
          />

          <p className="text-center md:tracking-wider mb-6 sm:mb-8 text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-white-200 max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg">
            I&apos;m Nishant Kumar Singh, a Full Stack Developer.
          </p>

          <div className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-2xl h-32 sm:h-36 md:h-40 relative">
            {/* Gradients - Responsive positioning */}
            <div className="absolute inset-x-4 sm:inset-x-8 md:inset-x-12 lg:inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
            <div className="absolute inset-x-4 sm:inset-x-8 md:inset-x-12 lg:inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
            <div className="absolute inset-x-16 sm:inset-x-24 md:inset-x-32 lg:inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[3px] sm:h-[4px] md:h-[5px] w-1/4 blur-sm" />
            <div className="absolute inset-x-16 sm:inset-x-24 md:inset-x-32 lg:inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />

            {/* Core component */}
            <SparklesCore
              background="transparent"
              minSize={0.3}
              maxSize={0.8}
              particleDensity={800}
              className="w-full h-full"
              particleColor="#FFFFFF"
            />

            {/* Radial Gradient to prevent sharp edges */}
            <div className="absolute inset-0 w-full h-full bg-[#000319] [mask-image:radial-gradient(250px_150px_at_top,transparent_20%,white)] sm:[mask-image:radial-gradient(300px_180px_at_top,transparent_20%,white)] md:[mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
          </div>

          <div className="mt-4 sm:mt-6 md:mt-8">
            <a href="/projects">
              <MagicButton
                title="Show my work"
                icon={<FaLocationArrow />}
                position="right"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
});

Hero.displayName = 'Hero';

export default Hero;
