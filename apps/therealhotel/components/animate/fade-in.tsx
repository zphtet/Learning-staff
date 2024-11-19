"use client";
import { motion } from "motion/react";
import { PropsWithChildren } from "react";

const FadeIn: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{
        opacity: 1,
        y: 0,
        transition: {
          duration: 1,
        },
      }}
    >
      {children}
    </motion.div>
  );
};
export default FadeIn;
