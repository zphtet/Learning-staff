"use client";

import { motion } from "motion/react";
const ExploreMap = () => {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 50,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        transition: {
          duration: 0.75,
          ease: "linear",
        },
      }}
      viewport={{
        once: true,
        amount: 1,
      }}
      className="relative z-10 mx-auto -mt-36 flex max-w-[300px] flex-col items-center  gap-10 "
    >
      <p className="text-[11px] uppercase">
        Our collections span the globe, offering you the chance to stay in the
        luxurious, beautiful, and bizarre accommodations you see on The Real
        Housewives. Get the gang together in the family van and prepare to
        squabble over who gets their own room.
      </p>
      <div className="vertical-line h-32 w-[2px] rounded-full bg-white/50"></div>
      <button className="  rounded-full bg-white px-5 py-2 text-[12px]  text-black">
        Explore map
      </button>
    </motion.div>
  );
};

export default ExploreMap;
