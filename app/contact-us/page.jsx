"use client";

import { navItems } from "@/data";
import ContactUsPage from "@/components/ContactUsPage";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import TransitionComponent from "@/components/ui/TransitionEffect";

const ContactUs = () => {
  return (
    <>
      <TransitionComponent />
      <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto">
        <div className="w-full">
          <FloatingNav navItems={navItems} />
          <ContactUsPage />
        </div>
      </main>
    </>
  );
};

export default ContactUs;
