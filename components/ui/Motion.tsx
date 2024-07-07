"use client";

import { transition } from "@/data";
import { motion } from "framer-motion";

type MotionComponentProps = {
  children: React.ReactNode;
  direction: "left" | "right" | "up" | "down";
  delay: number;
  className?: string;
};

const MotionNav = ({
  children,
  direction,
  delay,
  className,
}: MotionComponentProps) => {
  return (
    <motion.nav
      initial="hidden"
      animate="show"
      exit="hidden"
      variants={transition(direction, delay)}
      className={className}
    >
      {children}
    </motion.nav>
  );
};

const MotionDiv = ({
  children,
  direction,
  delay,
  className,
}: MotionComponentProps) => {
  return (
    <motion.div
      initial="hidden"
      animate="show"
      exit="hidden"
      variants={transition(direction, delay)}
      className={className}
    >
      {children}
    </motion.div>
  );
};

const MotionH1 = ({
  children,
  direction,
  delay,
  className,
}: MotionComponentProps) => {
  return (
    <motion.h1
      initial="hidden"
      animate="show"
      exit="hidden"
      variants={transition(direction, delay)}
      className={className}
    >
      {children}
    </motion.h1>
  );
};

const MotionP = ({
  children,
  direction,
  delay,
  className,
}: MotionComponentProps) => {
  return (
    <motion.p
      initial="hidden"
      animate="show"
      exit="hidden"
      variants={transition(direction, delay)}
      className={className}
    >
      {children}
    </motion.p>
  );
};

export { MotionNav, MotionDiv, MotionH1, MotionP };
