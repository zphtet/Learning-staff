"use client";
import { motion } from "motion/react";
import { PropsWithChildren, useState } from "react";
import { forwardRef } from "react";
const ScaleX = forwardRef<
  HTMLDivElement,
  PropsWithChildren<{ className?: string }>
>(({ children, className }, ref) => {
  return (
    <motion.div className={`${className}`}>
      {children}

      <motion.div
        initial={{
          scaleX: 1,
        }}
        animate={{
          scaleX: 0,
          transformOrigin: "right",
          transition: {
            delay: 0.2,
            duration: 1.5,
          },
        }}
        className="absolute left-0 top-0 h-full w-full bg-black"
      ></motion.div>
    </motion.div>
  );
});

export default ScaleX;
