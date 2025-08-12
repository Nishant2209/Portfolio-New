"use client";

import dynamic from "next/dynamic";
import { memo } from "react";
import { navItems } from "@/data";
import { FloatingNav } from "@/components/ui/FloatingNavbar";

// Lazy load heavy components to prevent SSR issues
const Grid = dynamic(() => import("@/components/Grid"), {
  ssr: false,
  loading: () => <div className="w-full h-96 animate-pulse bg-gray-200 rounded" />
});
const Footer = dynamic(() => import("@/components/Footer"), {
  loading: () => <div className="w-full h-32 animate-pulse bg-gray-200 rounded" />
});
const Approach = dynamic(() => import("@/components/Approach"), {
  ssr: false,
  loading: () => <div className="w-full h-96 animate-pulse bg-gray-200 rounded" />
});

const About = memo(() => {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} />
        <Grid />
        <Approach />
        {/* <PersonalInfo /> */}
        <Footer />
      </div>
    </main>
  );
});

About.displayName = 'About';

export default About;
