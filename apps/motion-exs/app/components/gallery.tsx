"use client";

import Item from "./item";
import {
  motion,
  useMotionValue,
  useSpring,
  AnimatePresence,
} from "motion/react";
import { useMouse, MousePosition } from "@uidotdev/usehooks";
import { useCallback, useState } from "react";
import items from "../mock/items";
import ItemContainer from "./item-container";
const Gallery = () => {
  const [position, ref] = useMouse<HTMLDivElement>();
  const [showModal, setShowModal] = useState(false);
  const [idx, setIdx] = useState(0);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const xSpring = useSpring(x);
  const ySpring = useSpring(y);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    // console.log("Moving Mouse ...");

    // console.log("pos", position);
    x.set(position.elementX - 100);
    y.set(position.elementY - 120);
  };

  // console.count("Gallery Render");

  const setIndexHandler = useCallback((idx: number) => {
    return setIdx(idx);
  }, []);

  return (
    <AnimatePresence>
      <motion.div
        ref={ref}
        onMouseMove={(e) => handleMouseMove(e)}
        onMouseLeave={(e) => {
          if (!showModal) return;
          setShowModal(false);
        }}
        onMouseEnter={(e) => {
          if (showModal) return;
          setShowModal(true);
        }}
        className=" relative w-[700px] space-y-5 rounded-2xl  px-5 py-5"
      >
        {/* <p className="text-2xl">Gallery Items</p> */}
        {/* <div className="border ">
          {items.map((item, idx) => {
            return (
              <Item
                onMouseEnter={() => setIdx(idx)}
                {...item}
                key={item.title}
              />
            );
          })}
        </div> */}
        <ItemContainer onMouseEnter={setIndexHandler} />
        {showModal && (
          <motion.div
            layout
            key={"modal"}
            style={{
              position: "absolute",
              left: xSpring,
              top: ySpring,
              // backgroundColor: items[idx].bg,
              backgroundImage: `url(${items[idx].imgUrl})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
            initial={{
              scale: 0,
            }}
            animate={{
              scale: 1,
            }}
            exit={{
              scale: 0,
              transition: {
                duration: 1,
              },
            }}
            className={`pointer-events-none isolate flex aspect-square w-[200px] items-center justify-center rounded-xl bg-red-100 `}
          >
            {/* {items.map((item, i) => {
              const isActive = i === idx ? 0.5 : 1;
              return (
                <motion.img
                  key={item.title}
                  layout
                  src={items[idx].imgUrl}
                  alt="image"
                  style={{
                    opacity: isActive ? 1 : 0,
                  }}
                  className="absolute inset-0 -z-10 h-full w-full object-cover transition-all duration-500"
                />
              );
            })} */}

            <div className="pointer-events-none  flex aspect-square w-[50px] items-center justify-center rounded-full bg-blue-700 text-[12px] text-white">
              VIEW
            </div>
          </motion.div>
        )}
      </motion.div>
    </AnimatePresence>
  );
};

export default Gallery;
