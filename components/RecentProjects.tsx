"use client";

import { FaLocationArrow } from "react-icons/fa6";

import { projects } from "@/data";
import { PinContainer } from "./ui/Pin";
import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "./ui/3d-Card";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Meteors from "./ui/Meteors";

const RecentProjects = () => {
  const router = useRouter();

  return (
    <div className="pb-10 pt-16 sm:pt-20 md:pt-24 lg:pt-32 px-4 sm:px-6 lg:px-8">
      <Meteors number={30} />
      <h1 className="heading">
        A small selection of <span className="text-purple">my projects</span>
      </h1>
      <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 md:gap-8 lg:gap-16 mt-6 sm:mt-8 md:mt-10">
        {projects.map((item) => (
          // <div
          //   className="lg:min-h-[32.5rem] h-[25rem] flex items-center justify-center sm:w-96 w-[80vw]"
          //   key={item.id}
          // >
          //   <PinContainer
          //     title="/ui.aceternity.com"
          //     href="https://twitter.com/mannupaaji"
          //   >
          //     <div className="relative flex items-center justify-center sm:w-96 w-[80vw] overflow-hidden h-[20vh] lg:h-[30vh] mb-10">
          //       <div
          //         className="relative w-full h-full overflow-hidden lg:rounded-3xl"
          //         style={{ backgroundColor: "#13162D" }}
          //       >
          //         <img src="/bg.png" alt="bgimg" />
          //       </div>
          //       <img
          //         src={item.img}
          //         alt="cover"
          //         className="z-10 absolute bottom-0"
          //       />
          //     </div>

          //     <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">
          //       {item.title}
          //     </h1>

          //     <p
          //       className="lg:text-xl lg:font-normal font-light text-sm line-clamp-2"
          //       style={{
          //         color: "#BEC1DD",
          //         margin: "1vh 0",
          //       }}
          //     >
          //       {item.des}
          //     </p>

          //     <div className="flex items-center justify-between mt-7 mb-3">
          //       <div className="flex items-center">
          //         {item.iconLists.map((icon, index) => (
          //           <div
          //             key={index}
          //             className="border border-white/[.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
          //             style={{
          //               transform: `translateX(-${5 * index + 2}px)`,
          //             }}
          //           >
          //             <img src={icon} alt="icon5" className="p-2" />
          //           </div>
          //         ))}
          //       </div>

          //       <div className="flex justify-center items-center">
          //         <p className="flex lg:text-xl md:text-xs text-sm text-purple">
          //           Check Live Site
          //         </p>
          //         <FaLocationArrow className="ms-3" color="#CBACF9" />
          //       </div>
          //     </div>
          //   </PinContainer>
          // </div>
          <CardContainer className="inter-var w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl" key={item.id}>
            <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-[#04071d] dark:border-white/[0.2] border-black/[0.1] w-full h-auto rounded-xl p-4 sm:p-6 border">
              <CardItem
                translateZ="50"
                className="text-lg sm:text-xl md:text-2xl font-bold text-neutral-600 dark:text-white"
              >
                {item.title}
              </CardItem>
              <CardItem
                as="p"
                translateZ="60"
                className="text-neutral-500 text-sm sm:text-base max-w-full mt-2 dark:text-neutral-300 line-clamp-3"
              >
                {item.des}
              </CardItem>
              <CardItem translateZ="100" className="w-full mt-4">
                <Image
                  src={item.img}
                  height="1000"
                  width="1000"
                  className="w-full object-cover rounded-xl group-hover/card:shadow-xl"
                  alt="thumbnail"
                />
              </CardItem>
              <div className="flex flex-col sm:flex-row justify-between items-center mt-6 sm:mt-8 md:mt-10 gap-4">
                <CardItem
                  translateZ={20}
                  target="__blank"
                  className="flex"
                >
                  {item.iconLists.map((icon, index) => (
                    <div
                      key={index}
                      className="border border-white/[.2] rounded-full bg-black w-8 h-8 sm:w-10 sm:h-10 flex justify-center items-center"
                      style={{
                        transform: `translateX(-${3 * index + 2}px)`,
                      }}
                    >
                      <img src={icon} alt="icon5" className="p-1.5 sm:p-2" />
                    </div>
                  ))}
                </CardItem>
                <CardItem
                  translateZ={20}
                  as="button"
                  onClick={() => window.open(`${item.link}`)}
                  className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs sm:text-sm font-bold hover:opacity-80 transition-opacity w-full sm:w-auto"
                >
                  Check Live Site
                </CardItem>
              </div>
            </CardBody>
          </CardContainer>
        ))}
      </div>
    </div>
  );
};

export default RecentProjects;
