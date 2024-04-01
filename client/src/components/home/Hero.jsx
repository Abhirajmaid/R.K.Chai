"use client";
import { Icon } from "@iconify/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Hero = () => {
  return (
    <div className="bg-hero_bg md:h-[80vh] h-[90vh] w-full md:px-[6%] px-[3%] pt-[100px] items-center flex md:flex-row flex-col gap-3 relative overflow-hidden">
      <div className="md:w-[40%] w-full flex flex-col gap-4">
        <h1 className="md:text-[7vw] text-[14vw] font-extrabold text-primary ">
          R.K.CHAI
        </h1>
        <h2 className="font-semibold capitalize md:text-[3.5vw] text-[7vw] text-[#895518] -mt-[30px]">
          Say Yes To Chai!
        </h2>
        <p className="md:!text-[24px]">
          Experience the rich taste and tradition of authentic Indian chai!
        </p>
        <Link href="/our-products">
          <button className="primary-btn flex gap-2 items-center">
            Explore Our Products
            <Icon
              icon="fluent:arrow-up-right-16-filled"
              width={25}
              className=" rotate-[45deg]"
            />
          </button>
        </Link>
      </div>
      <Image
        src="/images/hero_cup.jpg"
        width={1000}
        height={1000}
        alt="rkchai"
        className="absolute z-[50] md:-scale-x-[1.1] md:scale-[1.1] -scale-x-[1.3] scale-[1.3] md:w-[43vw] w-[85vw] md:right-[100px] md:-bottom-16 bottom-0 "
      />
      <div className="bg-[#F4D2B2] absolute md:h-[70%] h-[40%] md:w-[50%] w-[80%] right-0 md:bottom-14 bottom-7 rounded-l-3xl"></div>
    </div>
  );
};

export default Hero;
