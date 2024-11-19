"use client";
import { Menu } from "lucide-react";
import { motion } from "motion/react";
const Header = () => {
  return (
    <motion.div
      className="flex items-center justify-between"
      initial={{
        y: "-150%",
        opacity: 0,
      }}
      animate={{
        y: 0,
        opacity: 1,
        transition: {
          delay: 0.5,
          duration: 1,
        },
      }}
    >
      <div className="border-l pl-5">
        <p className="text-sm uppercase ">
          curated hotels from
          <br />
          the real housewives
        </p>
      </div>
      <div>
        <Menu />
      </div>
    </motion.div>
  );
};
export default Header;
