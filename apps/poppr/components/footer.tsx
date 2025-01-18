"use client";
import {
  motion,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "motion/react";
import { useRef } from "react";
const Footer = () => {
  const dTriangle = `M 0,200 A ${window.innerWidth / 2},200 0 0,1 ${window.innerWidth},200`;
  const dRectangle = `M 0,200 A ${window.innerWidth / 2},10 0 0,1 ${window.innerWidth},200 `;
  const footerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: footerRef,
    offset: ["start end", "end end"],
  }); // Get the scroll progress (0 to 1)

  // Map scroll progress to the shape transformation
  const dPath = useTransform(scrollYProgress, [0, 1], [dRectangle, dTriangle]);
  return (
    <div className="relative min-h-[200px] bg-blue-300 " ref={footerRef}>
      <motion.svg className="absolute left-0 top-0 w-full -translate-y-[100%] scale-x-105">
        <motion.path
          // fill={"red"}
          d={dPath}
          className={`fill-blue-300`}
          transition={{
            ease: [0.76, 0, 0.24, 1],
          }}
        ></motion.path>
      </motion.svg>

      {/* <p>Footer</p> */}
    </div>
  );
};

export default Footer;
