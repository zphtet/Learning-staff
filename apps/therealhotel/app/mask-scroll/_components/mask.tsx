"use client";
import { motion, useScroll, useSpring, useTransform } from "motion/react";
import imgone from "../../../images/img-1.jpg";
const Mask = () => {
  const { scrollYProgress } = useScroll({
    offset: ["start end", "end start"],
  });

  const width = useSpring(scrollYProgress);

  const widthSpring = useTransform(width, [0, 1], ["10%", "100%"]);
  return (
    <div  className="flex h-screen items-center justify-center">
      <motion.div
        className="mask-container aspect-square "
        style={{
          // maskSize: "500px",
          maskSize: widthSpring,
        }}
      >
        <img src={imgone.src} className="h-full w-full object-cover" />
      </motion.div>
    </div>
  );
};

export default Mask;
