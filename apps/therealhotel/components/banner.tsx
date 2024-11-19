"use client";
import Image from "next/image";
import BannerLogoText from "./banner-logo-text";
import BannerText from "./banner-text";
import Header from "./header";
import imgone from "@/images/img-1.jpg";
import imgtwo from "@/images/img-2.jpg";
import imgthree from "@/images/img-3.jpg";
import imgfour from "@/images/img-4.jpg";
import imgfive from "@/images/img-5.jpg";
import ScaleX from "./animate/scale-x";
import { useScroll, useTransform, motion } from "motion/react";
import { useRef } from "react";

const Banner = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    // container: targetRef,
    offset: ["start start", "end start"],
    // axis: "y",
  });

  const width = useTransform(
    scrollYProgress,
    [0, 0.75, 1],
    ["20%", "100%", "100%"],
  );

  const opacity = useTransform(scrollYProgress, [0, 0.6, 1], [1, 1, 0.4]);
  return (
    <div className=" container relative   " ref={targetRef}>
      <Header />

      {/* <div className="sticky top-56 aspect-square w-[200px] bg-green-500 [right:300px]"></div> */}
      {/* Sticky element */}
      <motion.div
        style={{
          transformOrigin: "top",
          width: width,
          aspectRatio: "16/9",
          // background: "red",
        }}
        className="sticky left-3/4  top-32  mx-auto aspect-video  "
      >
        <motion.img
          style={{
            opacity: opacity,
          }}
          src={imgtwo.src}
          alt="image two"
          className="h-full w-full object-cover"
        />
        <motion.div
          initial={{
            scaleX: 1,
          }}
          animate={{
            scaleX: 0,
            transformOrigin: "right",
            transition: {
              delay: 0.2,
              duration: 0.6,
            },
          }}
          className="absolute left-0 top-0 h-full w-full bg-black"
        />
      </motion.div>

      <ScaleX className="absolute top-28 aspect-video w-32 [left:30%]">
        <Image src={imgone} alt="image one" className="aspect-video w-32" />
      </ScaleX>
      <ScaleX className="absolute top-96 aspect-video w-20  [right:1%]">
        <Image src={imgthree} alt="image three" className="aspect-video w-20" />
      </ScaleX>

      <ScaleX className="absolute top-44 z-10 w-28 [aspect-ratio:5/7] [left:5%]">
        <Image
          src={imgfour}
          alt="image four"
          className="w-28 [aspect-ratio:5/7]"
        />
      </ScaleX>

      <ScaleX className="absolute top-72 aspect-video w-36 [left:10%]">
        <Image src={imgfive} alt="image five" className="aspect-video w-36" />
      </ScaleX>

      <div className="z-100 relative py-16 pb-[80vh]">
        <BannerText />
        <BannerLogoText text="The Real" delay={4} />
        <BannerLogoText text="Hotels" />
      </div>
    </div>
  );
};

export default Banner;
