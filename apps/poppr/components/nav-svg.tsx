"use client";
import { motion } from "motion/react";
const SvgComponent = () => {
  const dRect = `M 0 0 H ${window.innerWidth} v 80 h -${window.innerWidth} Z`;
  // const dCurve = `M 0 0 H ${window.innerWidth}  Q ${window.innerWidth}/2 80 0 0 `;
  const dCurve = `M 100 0 L 100 ${window.innerHeight}  Q 100 ${window.innerHeight}/2 100 0 `;
  // const dCurve =
  // "M0,64L80,64C160,64,320,64,480,90.7C640,117,800,171,960,165.3C1120,160,1280,96,1360,64L1440,32L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z";

  return (
    <svg className="absolute bottom-0 left-0 h-[150px] w-full translate-y-[100%]  bg-transparent">
      <motion.path
        fill={"black"}
        strokeWidth={"5"}
        initial={{
          d: dCurve,
        }}
        animate={{
          d: dRect,
          transition: {
            duration: 3,
          },
        }}
      ></motion.path>
    </svg>
  );
};

export default SvgComponent;
