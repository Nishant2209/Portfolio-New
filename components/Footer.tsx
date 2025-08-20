import { FaLocationArrow } from "react-icons/fa6";
import Image from "next/image";
import { memo } from "react";

import { socialMedia } from "@/data";
import MagicButton from "./MagicButton";

const Footer = memo(() => {
  return (
    <footer className="w-full pt-16 sm:pt-20 pb-10 px-4 sm:px-6 lg:px-8" id="contact">
      {/* background grid */}
      <div className="w-full absolute left-0 -bottom-72 min-h-96">
        <Image
          src="/footer-grid.svg"
          alt="grid"
          fill
          className="opacity-50 object-cover"
          priority={false}
        />
      </div>

      <div className="flex flex-col items-center text-center">
        <h1 className="heading lg:max-w-[45vw] z-50 px-4">
          Ready to take <span className="text-purple">your</span> digital
          presence to the next level?
        </h1>
        <p className="text-white-200 mt-4 sm:mt-6 md:mt-8 lg:mt-10 mb-6 sm:mb-8 text-center text-sm sm:text-base max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl">
          Reach out to me today and let&apos;s discuss how I can help you
          achieve your goals.
        </p>
        <a href="/contact-us">
          <MagicButton
            title="Let's get in touch"
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>
      </div>
      <div className="flex mt-12 sm:mt-14 md:mt-16 px-4 sm:px-6 md:flex-row flex-col-reverse gap-4 md:gap-0 justify-between items-center">
        <p className="text-center md:text-left text-xs sm:text-sm md:text-base font-light md:font-normal">
          Copyright © 2025 Nishant Kumar Singh
        </p>

        <div className="flex items-center gap-4 sm:gap-6 md:gap-3">
          {socialMedia.map((info) => (
            <div
              key={info.id}
              className="w-8 h-8 sm:w-10 sm:h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300 hover:bg-opacity-90 transition-all"
            >
              <Image
                src={info.img}
                alt="Social media icon"
                width={16}
                height={16}
                className="cursor-pointer sm:w-5 sm:h-5"
                onClick={() => window.open(info.link, '_blank', 'noopener,noreferrer')}
              />
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
});

Footer.displayName = 'Footer';

export default Footer;
