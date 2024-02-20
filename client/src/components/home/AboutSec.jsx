"use client";
import { Icon } from "@iconify/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const AboutSec = () => {
  return (
    <div className="gap-3 flex md:flex-row flex-col items-start justify-between w-full mt-[170px]">
      <div className="md:w-[50%] w-full">
        <Image
          src="/images/about_img.png"
          width={600}
          height={500}
          className="md:w-[85%] w-[90%] md:h-[500px] h-[300px] ml-5 shadow-[-17px_-17px_0px_0px_#DE8D2D] rounded-xl"
        />
      </div>
      <div className="flex flex-col gap-7 md:w-[50%] w-full ">
        <h1 className="sec-head md:text-left text-center">About R.K's</h1>
        <p className="-mt-[15px] text-justify w-[90%] mx-auto md:mx-0">
          Lorem ipsum dolor sit amet consectetur. Diam pharetra tellus sed nulla
          augue. Ornare nisl eget molestie malesuada. Sem vel adipiscing
          adipiscing donec facilisi adipiscing at. Posuere nibh pellentesque
          praesent tortor nulla enim et faucibus porta.
          <br />
          <br />
          Lorem ipsum dolor sit amet consectetur. Diam pharetra tellus sed nulla
          augue. Ornare nisl eget molestie malesuada. Sem vel adipiscing
          adipiscing donec facilisi adipiscing at. Posuere nibh pellentesque
          praesent tortor nulla enim et faucibus porta.
        </p>
        <Link href="/about-us">
          <button className="primary-btn flex items-center gap-2">
            More About us{" "}
            <Icon
              icon="fluent:arrow-up-right-16-filled"
              width={25}
              className="rotate-[45deg]"
            />
          </button>
        </Link>
      </div>
    </div>
  );
};

export default AboutSec;
