"use client";
import { useRouter } from "next/navigation";
import React from "react";
import Marquee from "react-fast-marquee";

const InfiniteMarquee = ({ txt, deg }) => {
  const router = useRouter();
  return (
    <>
      <div
        className={`md:w-[120%] w-[100%] ${deg} bg-primary_dark text-white mt-6`}
      >
        <Marquee>
          <div className=" flex gap-[115px] justify-between md:text-[60px] font-bold text-[40px] items-center  ">
            <span>{txt}</span>
            <span>{txt}</span>
            <span>{txt}</span>
            <span>{txt}</span>
            <span>{txt}</span>
            <span>{txt}</span>
            <span>{txt}</span>
            <span>{txt}</span>
            <span className="mr-[115px]">{txt}</span>
          </div>
        </Marquee>
      </div>
    </>
  );
};

export default InfiniteMarquee;
