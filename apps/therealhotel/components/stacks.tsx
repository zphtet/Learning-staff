"use client";

import imgone from "@/images/img-1.jpg";
import imgtwo from "@/images/img-2.jpg";
import imgthree from "@/images/img-3.jpg";
import { useScroll, useTransform } from "motion/react";
import Image from "next/image";
import { useRef } from "react";
import { motion } from "motion/react";
const Stacks = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"],
  });
  const first = useTransform(scrollYProgress, [0.1, 0.4], [1, 0.75]);
  const second = useTransform(scrollYProgress, [0.6, 0.9], [1, 0.75]);
  return (
    <div className="relative" ref={targetRef}>
      <motion.div
        className="sticky left-0 top-0 h-screen w-full bg-red-600"
        style={{
          scale: first,
        }}
      >
        <Image
          src={imgone}
          alt="img one"
          className="h-full w-full object-cover"
        />
      </motion.div>
      <motion.div
        style={{
          scale: second,
        }}
        className="sticky left-0 top-0 h-screen w-full "
      >
        <Image
          src={imgtwo}
          alt="img one"
          className="h-full w-full object-cover"
        />
      </motion.div>
      <div className="sticky left-0 top-0 h-screen w-full ">
        <Image
          src={imgthree}
          alt="img one"
          className="h-full w-full object-cover"
        />
      </div>
    </div>
  );
};

export default Stacks;
