"use client";

import { navItems } from "@/data";
import ContactUsPage from "@/components/ContactUsPage";
import { FloatingNav } from "@/components/ui/FloatingNavbar";

const ContactUs = () => {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto">
      <div className="w-full">
        <FloatingNav navItems={navItems} />
        <ContactUsPage />
      </div>
    </main>
  );
};

export default ContactUs;
