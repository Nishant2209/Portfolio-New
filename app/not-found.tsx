import MagicButton from "@/components/MagicButton";
import { MotionDiv, MotionH1, MotionP } from "@/components/ui/Motion";
import { Metadata } from "next";
import Link from "next/link";
import { FaLocationArrow } from "react-icons/fa6";

export const metadata: Metadata = {
  title: "404 | Page Not Found",
  openGraph: {
    title: "404 | Page Not Found",
  },
  twitter: {
    title: "404 | Page Not Found",
  },
};

const NotFoundPage = () => {
  return (
    <main className="grid h-screen place-content-center place-items-center px-6 pb-12 pt-24 text-center sm:pb-16 sm:pt-32 lg:px-8">
      <div
        className="h-screen w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.03] bg-grid-black-100/[0.2]
       absolute top-0 left-0 flex items-center justify-center"
      >
        {/* Radial gradient for the container to give a faded look */}
        <div
          // chnage the bg to bg-black-100, so it matches the bg color and will blend in
          className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100
         bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"
        />
      </div>
      <div className="text-center z-50">
        <MotionH1
          direction="up"
          delay={0.1}
          className="text-9xl font-black text-gray-700"
        >
          404
        </MotionH1>

        <MotionP
          direction="up"
          delay={0.2}
          className="text-2xl font-bold tracking-tight text-white sm:text-4xl"
        >
          Page not found
        </MotionP>

        <MotionP direction="up" delay={0.3} className="mt-4 text-gray-400">
          Sorry, we couldn&apos;t find the page you&apos;re looking for.
        </MotionP>

        <MotionDiv direction="up" delay={0.4}>
          <Link href="/">
            <MagicButton
              title="Go Back Home"
              icon={<FaLocationArrow />}
              position="right"
            />
          </Link>
        </MotionDiv>
      </div>
    </main>
  );
};

export default NotFoundPage;
