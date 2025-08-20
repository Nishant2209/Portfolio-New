"use client";
import React, { useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { HiMenuAlt3, HiX } from "react-icons/hi";

export const FloatingNav = ({
  navItems,
  className,
}: {
  navItems: {
    name: string;
    link: string;
    icon?: JSX.Element;
  }[];
  className?: string;
}) => {
  const { scrollYProgress } = useScroll();
  const [visible, setVisible] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    // Check if current is not undefined and is a number
    if (typeof current === "number") {
      let direction = current! - scrollYProgress.getPrevious()!;

      if (scrollYProgress.get() < 0.05) {
        setVisible(true);
      } else {
        if (direction < 0) {
          setVisible(true);
        } else {
          setVisible(false);
        }
      }
    }
  });

  return (
    <>
      <AnimatePresence mode="wait">
        <motion.div
          initial={{
            opacity: 1,
            y: -100,
          }}
          animate={{
            y: visible ? 0 : -100,
            opacity: visible ? 1 : 0,
          }}
          transition={{
            duration: 0.2,
          }}
          className={cn(
            "fixed z-[60] top-4 inset-x-0 mx-auto rounded-lg border border-black/.1 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]",
            // Desktop layout (lg and above)
            "hidden lg:flex max-w-fit lg:min-w-fit px-10 py-5 items-center justify-between space-x-4",
            className
          )}
          style={{
            backdropFilter: "blur(16px) saturate(180%)",
            backgroundColor: "rgba(17, 25, 40, 0.75)",
            borderRadius: "12px",
            border: "1px solid rgba(255, 255, 255, 0.125)",
          }}
        >
          {/* Desktop Navigation - Left Items */}
          <div className="flex items-center space-x-4">
            {navItems.slice(0, 3).map((navItem: any, idx: number) => (
              <Link
                key={`left-link=${idx}`}
                href={navItem.link}
                className="relative dark:text-neutral-50 items-center flex space-x-1 text-neutral-600 dark:hover:text-neutral-300 hover:text-neutral-500 transition-colors"
              >
                <span className="text-sm !cursor-pointer">{navItem.name}</span>
              </Link>
            ))}
          </div>

          {/* Desktop Center Logo */}
          <Link href="/" className="flex items-center justify-center">
            <div className="w-10 h-10 rounded-full overflow-hidden flex items-center justify-center">
              <Image
                src="/nks-logo.png"
                alt="Nishant's Logo"
                width={40}
                height={40}
                className="w-full h-full object-cover rounded-full"
                priority
              />
            </div>
          </Link>

          {/* Desktop Navigation - Right Items */}
          <div className="flex items-center space-x-4">
            {navItems.slice(3).map((navItem: any, idx: number) => (
              <Link
                key={`right-link=${idx}`}
                href={navItem.link}
                className="relative dark:text-neutral-50 items-center flex space-x-1 text-neutral-600 dark:hover:text-neutral-300 hover:text-neutral-500 transition-colors"
              >
                <span className="text-sm !cursor-pointer">{navItem.name}</span>
              </Link>
            ))}
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Tablet Navigation (md to lg) */}
      <AnimatePresence mode="wait">
        <motion.div
          initial={{
            opacity: 1,
            y: -100,
          }}
          animate={{
            y: visible ? 0 : -100,
            opacity: visible ? 1 : 0,
          }}
          transition={{
            duration: 0.2,
          }}
          className={cn(
            "fixed z-[60] top-4 inset-x-0 mx-auto rounded-lg border border-black/.1 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]",
            // Tablet layout (md to lg)
            "hidden md:flex lg:hidden max-w-fit px-6 py-4 items-center justify-center space-x-6",
            className
          )}
          style={{
            backdropFilter: "blur(16px) saturate(180%)",
            backgroundColor: "rgba(17, 25, 40, 0.75)",
            borderRadius: "12px",
            border: "1px solid rgba(255, 255, 255, 0.125)",
          }}
        >
          {/* Tablet Logo */}
          <Link href="/" className="flex items-center justify-center">
            <div className="w-8 h-8 rounded-full overflow-hidden flex items-center justify-center">
              <Image
                src="/nks-logo.png"
                alt="Nishant's Logo"
                width={32}
                height={32}
                className="w-full h-full object-cover rounded-full"
                priority
              />
            </div>
          </Link>

          {/* Tablet Navigation Items */}
          <div className="flex items-center space-x-4">
            {navItems.map((navItem: any, idx: number) => (
              <Link
                key={`tablet-link=${idx}`}
                href={navItem.link}
                className="relative dark:text-neutral-50 items-center flex space-x-1 text-neutral-600 dark:hover:text-neutral-300 hover:text-neutral-500 transition-colors"
              >
                <span className="text-sm !cursor-pointer">{navItem.name}</span>
              </Link>
            ))}
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Mobile Navigation */}
      <AnimatePresence mode="wait">
        <motion.div
          initial={{
            opacity: 1,
            y: -100,
          }}
          animate={{
            y: visible ? 0 : -100,
            opacity: visible ? 1 : 0,
          }}
          transition={{
            duration: 0.2,
          }}
          className={cn(
            "flex md:hidden fixed z-[60] top-4 left-4 right-4 px-4 py-3 rounded-lg border border-black/.1 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] items-center justify-between",
            className
          )}
          style={{
            backdropFilter: "blur(16px) saturate(180%)",
            backgroundColor: "rgba(17, 25, 40, 0.75)",
            borderRadius: "12px",
            border: "1px solid rgba(255, 255, 255, 0.125)",
          }}
        >
          {/* Mobile Logo - Left */}
          <Link href="/" className="flex items-center justify-center">
            <div className="w-8 h-8 rounded-full overflow-hidden flex items-center justify-center">
              <Image
                src="/nks-logo.png"
                alt="Nishant's Logo"
                width={32}
                height={32}
                className="w-full h-full object-cover rounded-full"
                priority
              />
            </div>
          </Link>

          {/* Mobile Menu Button - Right */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-neutral-600 dark:text-neutral-50 hover:text-neutral-500 dark:hover:text-neutral-300 transition-colors p-1"
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? (
              <HiX className="h-6 w-6" />
            ) : (
              <HiMenuAlt3 className="h-6 w-6" />
            )}
          </button>
        </motion.div>
      </AnimatePresence>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-4 top-20 z-[59] md:hidden"
          >
            <div
              className="rounded-lg border border-black/.1 shadow-lg p-4"
              style={{
                backdropFilter: "blur(16px) saturate(180%)",
                backgroundColor: "rgba(17, 25, 40, 0.95)",
                borderRadius: "12px",
                border: "1px solid rgba(255, 255, 255, 0.125)",
              }}
            >
              <div className="flex flex-col space-y-3">
                {navItems.map((navItem: any, idx: number) => (
                  <Link
                    key={`mobile-link=${idx}`}
                    href={navItem.link}
                    onClick={() => setMobileMenuOpen(false)}
                    className="relative dark:text-neutral-50 text-neutral-600 dark:hover:text-neutral-300 hover:text-neutral-500 transition-colors py-2 px-3 rounded-md hover:bg-white/10"
                  >
                    <span className="text-sm font-medium">{navItem.name}</span>
                  </Link>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile Menu Backdrop */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[58] bg-black/20 backdrop-blur-sm md:hidden"
            onClick={() => setMobileMenuOpen(false)}
          />
        )}
      </AnimatePresence>
    </>
  );
};
