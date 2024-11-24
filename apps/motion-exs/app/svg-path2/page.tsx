"use client";
import { AnimationProps, motion, Transition } from "motion/react";

const transition: Transition = {
  duration: 2,
  repeatType: "reverse",
  repeat: 100,
  ease: "easeInOut",
  yoyo: Infinity,
};
const SVGPath2 = () => {
  return (
    <div className="relative bg-blue-600 outline-1 outline-red-600">
      <svg
        width="300"
        height="100"
        viewBox="0 0 300 100"
        xmlns="http://www.w3.org/2000/svg"
      >
        <motion.path
          d="M 0 50 C 25 0, 75 0, 100 50 S 175 100, 200 50 S 275 0, 300 50"
          fill="none"
          stroke="white"
          strokeWidth="5"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={transition}
        />
      </svg>
      <motion.div
        transition={transition}
        className="box2  absolute left-0 top-0 aspect-square w-[50px] rounded-full bg-red-600"
        initial={{ offsetDistance: "0%", scale: 1 }}
        animate={{ offsetDistance: "100%", scale: 0.8 }}
      ></motion.div>
    </div>
  );
};
export default SVGPath2;
