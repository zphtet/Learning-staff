"use client";
import { useEffect, useState } from "react";
import Button from "./button";
import { twMerge } from "tailwind-merge";
const Navlinks = () => {
  const [change, setChange] = useState(false);
  useEffect(() => {
    if (window.scrollY > 100) {
      setChange(true);
    }
    window.addEventListener("scroll", (e) => {
      if (window.scrollY > 100) {
        setChange(true);
      } else {
        setChange(false);
      }
    });
  }, []);
  return (
    <div
      className={twMerge(
        "flex items-center gap-12 transition-all ",
        change &&
          "gap-4 rounded-full bg-white py-1.5 pl-8 pr-2 md:gap-0 md:bg-transparent",
      )}
    >
      <ul
        className={twMerge(
          `flex items-center  gap-12 font-bold uppercase transition-all md:hidden `,
          change && "gap-4 md:hidden",
        )}
      >
        <li>About Us</li>
        <li>Client</li>
        <li>Hire</li>
        <li>Resource</li>
        <li>Faq</li>
      </ul>
      <Button onClick={() => alert("Hello")} text="Hire Now" />
    </div>
  );
};

export default Navlinks;
