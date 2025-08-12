"use client";

import dynamic from "next/dynamic";
import { memo } from "react";
import { navItems } from "@/data";
import { FloatingNav } from "@/components/ui/FloatingNavbar";

// Lazy load the contact form component
const ContactUsPage = dynamic(() => import("@/components/ContactUsPage"), {
  loading: () => <div className="w-full h-96 animate-pulse bg-gray-200 rounded" />
});

const ContactUs = memo(() => {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto">
      <div className="w-full">
        <FloatingNav navItems={navItems} />
        <ContactUsPage />
      </div>
    </main>
  );
});

ContactUs.displayName = 'ContactUs';

export default ContactUs;
