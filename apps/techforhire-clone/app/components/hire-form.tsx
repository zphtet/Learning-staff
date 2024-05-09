"use client";
import { twMerge } from "tailwind-merge";
import HireInput from "./hire-input";
import Button from "./button";
import RangeSector from "./input-range";
const HireForm = ({ className }: { className?: string }) => {
  return (
    <div
      className={twMerge(
        "caret-theme space-y-4 rounded-2xl bg-white px-10 py-12 shadow-2xl",
        className,
      )}
    >
      <h5 className="heading-5 *:block">
        <span>Tell us what you want and</span>
        <span>We'll find you what you need</span>
      </h5>

      <form className="mx-auto max-w-md space-y-6">
        <HireInput label="Name" />
        <HireInput label="Email" />
        <HireInput label="Mobile Number" />
        <HireInput label="Company Name" />

        <RangeSector />

        <Button text="Submit" className="btn w-full " />
      </form>
    </div>
  );
};

export default HireForm;
