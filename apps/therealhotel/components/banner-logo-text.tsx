"use client";
import { motion, useInView } from "framer-motion";
import * as React from "react";

export default function LettersPullUp({
  text,
  className = "",
  delay = 0,
}: {
  text: string;
  className?: string;
  delay?: number;
}) {
  const splittedText = text.split("");

  const pullupVariant = {
    initial: { y: 100, opacity: 0.05, scaleY: 0 },
    animate: (i: number) => ({
      y: 0,
      opacity: 1,
      scaleY: 1,
      transition: {
        delay: (i + delay) * 0.1,
        duration: 0.7,
        ease: [0.39, 0.24, 0.3, 1],
      },
    }),
  };
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <div className="flex justify-center">
      {splittedText.map((current, i) => (
        <motion.div
          key={i}
          ref={ref}
          variants={pullupVariant}
          initial="initial"
          animate={isInView ? "animate" : ""}
          custom={i}
          className={`text-center text-[250px] font-bold leading-tight tracking-tighter  ${className}`}
        >
          {current == " " ? <span>&nbsp;</span> : current}
        </motion.div>
      ))}
    </div>
  );
}
