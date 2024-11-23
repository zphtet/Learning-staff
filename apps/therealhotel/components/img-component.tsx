"use client";

import { useMotionValue, useTransform, motion } from "motion/react";
import { useEffect } from "react";
import imgone from "@/images/img-1.jpg";
const ImageComponent: React.FC<{ src: string; className?: string }> = ({
  src,
  className,
}) => {
  const windowWidth = window.innerWidth;
  const windowHeight = window.innerHeight;

  const mX = useMotionValue(windowWidth / 2);
  const mY = useMotionValue(windowHeight / 2);

  const xPos = useTransform(
    mX,
    [0, windowWidth / 2, windowWidth],
    [-20, 0, 20],
  );
  const yPos = useTransform(
    mY,
    [0, windowHeight / 2, windowHeight],
    [-20, 0, 20],
  );

  // console.log(mouseX, mouseY);

  useEffect(() => {
    document.addEventListener("mousemove", (e) => {
      mX.set(e.clientX);
      mY.set(e.clientY);
    });

    return () => {
      document.removeEventListener("mousemove", (e) => {
        mX.set(e.clientX);
        mY.set(e.clientY);
      });
    };
  }, []);
  return (
    <motion.img
      style={{
        x: xPos,
        y: yPos,
      }}
      src={src}
      alt="image one"
      className={`aspect-video w-32 ${className}`}
    />
  );
};

export default ImageComponent;
