"use client";
import { twMerge } from "tailwind-merge";
import ReviewItem from "../components/review-item";
import { useEffect, useState } from "react";
import { generateRandomNumber } from "../../../utils/rdm-num";

const datas = [
  {
    p: "Tech for Hire by Codigo’s dedication and support have assisted us with augmenting my team's productivity and helped us fill out our software engineering workforce on entry to mid-level positions that we had been trying to fill.",
    author: "Augustine low",
    position: "Vice President of Engineering , ComfortDelGro",
  },
  {
    p: "Lorem Ipsum is  the printing industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    author: "Cristiano Ronaldo",
    position: "Greatest of all time footballer",
  },
];

type Reviews = typeof datas;
export type ReviewType = Reviews[0];

const Reviews = ({ className }: { className?: string }) => {
  const [curIdx, setCurIdx] = useState(0);
  const length = datas.length;

  useEffect(() => {
    setInterval(() => {
      setCurIdx(generateRandomNumber(0, 1));
    }, 5000);
  }, []);

  return (
    <section className={twMerge(`container space-y-5`, className)}>
      <div className="flex justify-center gap-5">
        {Array.from(Array(length).keys()).map((val, idx) => {
          return (
            <span
              onClick={() => setCurIdx(idx)}
              className={twMerge(
                `block  h-3 w-3 cursor-pointer rounded-full bg-black`,
                idx === curIdx && "bg-theme",
              )}
            ></span>
          );
        })}
      </div>
      <ReviewItem {...datas[curIdx]} />
    </section>
  );
};

export default Reviews;
