"use client";

import React from "react";

import { testimonials } from "@/data";
import { InfiniteMovingCards } from "./ui/InfiniteCards";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";

const Clients = () => {
  return (
    <section id="testimonials" className="pb-20 pt-32">
      <TextGenerateEffect
        words="Kind Words From My Colleagues/Satisfied Clients"
        className="text-center text-[40px] md:text-5xl"
      />

      <div className="flex flex-col items-center max-lg:mt-10">
        <div
          // remove bg-white dark:bg-black dark:bg-grid-white/[0.05], h-[40rem] to 30rem , md:h-[30rem] are for the responsive design
          className="h-[50vh] md:h-[25rem] rounded-md flex flex-col antialiased  items-center justify-center relative overflow-hidden"
        >
          <InfiniteMovingCards
            items={testimonials}
            direction="right"
            speed="slow"
          />
        </div>
      </div>
    </section>
  );
};

export default Clients;
