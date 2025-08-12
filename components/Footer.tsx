import { FaLocationArrow } from "react-icons/fa6";
import Image from "next/image";
import { memo } from "react";

import { socialMedia } from "@/data";
import MagicButton from "./MagicButton";

const Footer = memo(() => {
  return (
    <footer className="w-full pt-20 pb-10" id="contact">
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

      <div className="flex flex-col items-center">
        <h1 className="heading lg:max-w-[45vw]">
          Ready to take <span className="text-purple">your</span> digital
          presence to the next level?
        </h1>
        <p className="text-white-200 md:mt-10 my-5 text-center">
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
      <div className="flex mt-16 px-5 md:flex-row flex-col justify-between items-center">
        <p className="md:text-base text-sm md:font-normal font-light">
          Copyright © 2024 Nishant Kumar Singh
        </p>

        <div className="flex items-center md:gap-3 gap-6">
          {socialMedia.map((info) => (
            <div
              key={info.id}
              className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
            >
              <Image
                src={info.img}
                alt="Social media icon"
                width={20}
                height={20}
                className="cursor-pointer"
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
