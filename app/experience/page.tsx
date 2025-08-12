"use client";
import dynamic from "next/dynamic";
import { memo } from "react";
import { navItems } from "@/data";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import "react-vertical-timeline-component/style.min.css";

// Lazy load heavy components
const Experience = dynamic(() => import("@/components/Experience"), {
  loading: () => <div className="w-full h-96 animate-pulse bg-gray-200 rounded" />
});
const Footer = dynamic(() => import("@/components/Footer"), {
  loading: () => <div className="w-full h-32 animate-pulse bg-gray-200 rounded" />
});

const ExperiencePage = memo(() => {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto">
      <div className="w-full">
        <FloatingNav navItems={navItems} />
        <Experience />
        <Footer />
      </div>
    </main>
  );
});

ExperiencePage.displayName = 'ExperiencePage';

export default ExperiencePage;
