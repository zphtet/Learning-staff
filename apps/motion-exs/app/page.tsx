"use client";
import Image from "next/image";
import Gallery from "./components/gallery";
import { useInView } from "motion/react";
import { useEffect, useRef, useState, useTransition } from "react";
import React from "react";
// for (let i = 0; i < 10000000000; i++) {}

const Heavy = React.memo(() => {
  for (let i = 0; i < 1000000000 * 2; i++) {}
  useEffect(() => {
    console.log("End of rendering");
  }, []);
  return <div>Heavy compoent</div>;
});
export default function Home() {
  const ref = useRef(null);

  const [show, setShow] = useState(false);
  // const isInView = useInView(ref, {
  //   amount: 1,
  // });
  // console.log("ISINVVIE", isInView);
  const longFn = () => {
    setShow(true);
  };
  const [isPending, startTransition] = useTransition();
  return (
    <div className=" min-h-screen w-screen items-center justify-center">
      <div className="min-h-screen">
        <Gallery />
      </div>

      <div className="h-[200vh] px-10 py-10">
        {/* <p className="motion-preset-typewriter-[5] motion-preset-blur-down-sm text-3xl">
          Hello
        </p> */}
        <p className="motion-preset-confetti">adbrehaeth</p>
        <div
          ref={ref}
          className={`aspect-square  w-[80px] rounded-2xl bg-red-500  bg-gradient-to-t from-red-500 to-green-400 transition-transform  hover:rotate-45 ${true && "motion-scale-in-[0.5] motion-translate-x-in-[-120%] motion-translate-y-in-[-60%] motion-opacity-in-[33%] motion-rotate-in-[-1080deg] motion-blur-in-[10px] motion-delay-[0.38s]/scale motion-duration-[0.38s]/opacity motion-duration-[1.20s]/rotate motion-duration-[0.15s]/blur motion-delay-[0.60s]/blur motion-ease-spring-bouncier"}`}
        >
          a
        </div>

        <button
          onClick={() => {
            startTransition(() => {
              longFn();
            });
          }}
          className="rounded-lg bg-white px-5 py-2"
        >
          ON CLICK
        </button>
        <button
          onClick={() => {
            setShow(false);
            console.log("Immideatly Invoking");
          }}
          className="rounded-lg bg-white px-5 py-2"
        >
          ON CLICK TWO
        </button>
        {show && <Heavy />}
        {!show && <p>Not showing </p>}
        {isPending && <p>isPending ...</p>}
      </div>
    </div>
  );
}
