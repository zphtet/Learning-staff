"use client";
import { Button } from "@/components/ui/button";
import { motion } from "motion/react";
import { AnimatePresence } from "motion/react";
import { useState } from "react";
import SvgComponent from "./nav-svg";
const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [change, setChange] = useState(false);
  const dRect = `M 0 0 H ${window.innerWidth} v 80 h -${window.innerWidth} Z`;
  const width = window.innerWidth;
  const height = 80;
  const curveDepth = 40;
  //   const dCurve = `M 0 0 H ${window.innerWidth}  Q ${window.innerWidth}/2 80 0 0 `;
  //   const dCurve = `M 100 0 L 100 ${window.innerHeight}  Q 100 ${window.innerHeight}/2 100 0 `;
  const dCurve = `
  M 0 0 
  H ${width} 
  V ${height} 
  Q ${width / 2} ${height + curveDepth}, -${width} ${height} 
  
`;

  const initialPath = `M100 0 L200 0 L200 ${window.innerHeight} L100 ${window.innerHeight} Q-100 ${window.innerHeight / 2} 100 0`;
  const targetPath = `M100 0 L200 0 L200 ${window.innerHeight} L100 ${window.innerHeight} Q100 ${window.innerHeight / 2} 100 0`;

  const dTriangle = `M 0,200 A ${window.innerWidth / 2},200 0 0,1 ${window.innerWidth},200`;
  const dRectangle = `M 0,200 A ${window.innerWidth / 2},1 0 0,1 ${window.innerWidth},200 `;
  return (
    <div className="relative bg-green-300">
      <div>
        <>
          <motion.svg
            key={open ? "open" : "close"}
            className=" left-0 top-0 w-full  "
          >
            <motion.path
              // fill={"red"}
              className={`fill-red-400`}
              initial={{
                d: dTriangle,
              }}
              // d={dRectangle}
              exit={{
                d: dRectangle,
                transition: {
                  // duration: 3,
                  ease: [0.76, 0, 0.24, 1],
                  duration: 3,
                },
              }}
            ></motion.path>
          </motion.svg>
        </>
      </div>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{
              y: "-100%",
            }}
            animate={{
              y: "0%",
              transition: {
                ease: [0.76, 0, 0.24, 1],
                duration: 0.75,
                // duration: 3,
              },
            }}
            exit={{
              y: "120%",
              // borderTopLeftRadius: ["0", "50%", "50%"],
              // borderTopRightRadius: ["0", "50%", "50%"],
              transition: {
                ease: [0.76, 0, 0.24, 1],
                // borderTopLeftRadius: {
                //   times: [0, 0.1, 1],
                // },
                // borderTopRightRadius: {
                //   times: [0, 0.1, 1],
                // },
                duration: 0.75,
              },
            }}
            className="red absolute top-0 z-10 h-[100vh] w-[100vw] translate-x-1/2 bg-orange-400"
          >
            <motion.svg className="absolute bottom-0 left-0 w-full       ">
              <motion.path
                // fill={"red"}
                className={`fill-white`}
                initial={{
                  d: dTriangle,
                }}
                // d={dRectangle}
                animate={{
                  d: dRectangle,
                  transition: {
                    // duration: 3,
                    ease: [0.76, 0, 0.24, 1],
                    duration: 0.75,
                  },
                }}
              ></motion.path>
            </motion.svg>

            {}
          </motion.div>
        )}
      </AnimatePresence>

      <div className="relative z-20 mx-auto flex max-w-7xl items-center justify-between px-5 py-5">
        <h1 className="font-blue-500 text-3xl">Poppr</h1>
        <div className="flex items-center gap-5">
          <Button>Get In Touch</Button>
          <Button onClick={() => setOpen(!open)}>Open</Button>
        </div>
      </div>
      {/* <div>
        <div className="flex h-64 items-center justify-center rounded-b-[80000px] bg-blue-500 p-8 text-white">
          <p className="text-center">This div is curved using border-radius</p>
        </div>
      </div> */}

      {/* <div className="bg-red-500 px-5 py-5">
        <svg viewBox={`0 0 ${window.innerWidth} 100`}>
          <motion.path
            initial={{ d: dTriangle }}
            layout
            animate={{
              d: change ? dRectangle : dTriangle,
            }}
            fill="blue"
          ></motion.path>
        </svg>
        <button onClick={() => setChange(!change)}>Change </button>
      </div> */}
    </div>
  );
};

export default Navbar;
