"use client";

import { navItems } from "@/data";
import Grid from "@/components/Grid";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import Footer from "@/components/Footer";
import Approach from "@/components/Approach";
// import PersonalInfo from "@/components/PersonalInfo";
import TransitionComponent from "@/components/ui/TransitionEffect";

const About = () => {
  return (
    <>
      <TransitionComponent />
      <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
        <div className="max-w-7xl w-full">
          <FloatingNav navItems={navItems} />
          <Grid />
          <Approach />
          {/* <PersonalInfo /> */}
          <Footer />
        </div>
      </main>
    </>
  );
};

export default About;
