"use client";

import dynamic from "next/dynamic";
import { memo } from "react";
import { navItems } from "@/data";
import { FloatingNav } from "@/components/ui/FloatingNavbar";

// Lazy load heavy components
const Footer = dynamic(() => import("@/components/Footer"), {
  loading: () => <div className="w-full h-32 animate-pulse bg-gray-200 rounded" />
});
const Clients = dynamic(() => import("@/components/Clients"), {
  loading: () => <div className="w-full h-96 animate-pulse bg-gray-200 rounded" />
});

const Testimonials = memo(() => {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} />
        <Clients />
        <Footer />
      </div>
    </main>
  );
});

Testimonials.displayName = 'Testimonials';

export default Testimonials;
