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
          alt="RK chaiwala"
          className="md:w-[85%] w-[90%] md:h-[500px] h-[300px] ml-5 shadow-[-17px_-17px_0px_0px_#DE8D2D] rounded-xl"
        />
      </div>
      <div className="flex flex-col gap-7 md:w-[50%] w-full ">
        <h1 className="sec-head md:text-left text-center">About R.K's</h1>
        <p className="-mt-[15px] text-justify w-[90%] mx-auto md:mx-0">
          RKChaiwala is your one-stop shop for all things chai. We offer a wide
          variety of chai products, from classic masala chai to more unique
          flavors like lavender chai and rose chai. We use only the highest
          quality ingredients to create our chai, and we are committed to
          providing our customers with the most delicious and authentic chai
          experience possible.
          <br />
          <br />
          With over 30,000 loyal customers, RKChaiwala is a trusted name in
          chai. We are passionate about chai and believe that it is more than
          just a drink; it is a tradition that brings people together. In
          addition to our delicious chai, we also offer franchise opportunities
          for those who want to share their love of chai with others.
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
