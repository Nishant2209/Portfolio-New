"use client";

import dynamic from "next/dynamic";
import { memo } from "react";
import { navItems } from "@/data";
import { FloatingNav } from "@/components/ui/FloatingNavbar";

// Lazy load heavy components
const RecentProjects = dynamic(() => import("@/components/RecentProjects"), {
  loading: () => <div className="w-full h-96 animate-pulse bg-gray-200 rounded" />
});
const Footer = dynamic(() => import("@/components/Footer"), {
  loading: () => <div className="w-full h-32 animate-pulse bg-gray-200 rounded" />
});

const Projects = memo(() => {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} />
        <RecentProjects />
        <Footer />
      </div>
    </main>
  );
});

Projects.displayName = 'Projects';

export default Projects;
