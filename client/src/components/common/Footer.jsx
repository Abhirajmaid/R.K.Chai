"use client";
import { Icon } from "@iconify/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <>
      <div className="w-full relative">
        <Image
          src="/images/footer_img.png"
          width={1500}
          height={1500}
          className="w-full md:h-[650px] h-[1150px] object-cover"
        />
        <div className="flex md:flex-row flex-col gap-10 absolute top-0 left-0 h-full w-full md:px-[6%] px-[3%] md:py-[120px] py-[3%] bg-black/65">
          <div className="flex flex-col items-center md:items-start gap-6 md:w-[33%] w-full ">
            <Link href="/" className="cursor-pointer ">
              <Image
                src="/images/RK Logo + Word Mark.png"
                width={600}
                height={600}
                className="w-9 md:w-[400px] "
                alt="RKChaiwala"
              />
            </Link>
            <p className="w-full !text-white text-justify md:text-left">
              Lorem ipsum dolor sit amet consectetur. Diam pharetra tellus sed
              nulla augue. Ornare nisl eget molestie malesuada. Sem vel
              adipiscing adipiscing donec facilisi adipiscing at. Posuere nibh
              pellentesque praesent tortor nulla enim et faucibus porta.
            </p>
          </div>
          <div className="flex flex-col gap-6 md:w-[33%] w-full ">
            <h1 className="text-[40px] font-semibold text-white uppercase">
              Quick Link
            </h1>
            <ul className="text-white text-[30px]">
              <Link href="/about-us">
                <li>About us &rarr;</li>
              </Link>
              <Link href="/products">
                <li>Products &rarr;</li>
              </Link>
              <Link href="/gallery">
                <li>Gallery &rarr;</li>
              </Link>
              <Link href="/blogs">
                <li>Blogs &rarr;</li>
              </Link>
            </ul>
          </div>
          <div className="flex flex-col gap-6 md:w-[33%] w-full">
            <h1 className="text-[40px] font-semibold text-white uppercase">
              GET IN TOUCH
            </h1>
            <span className="flex justify-start gap-3">
              <Icon
                icon="teenyicons:pin-solid"
                className="text-primary"
                width={60}
                height={60}
              />
              <p className="!text-white">
                Katraj - Kondhwa Rd, Shri Swami Samantha Nagar, Gokul Nagar,
                Katraj, Pune, Maharashtra 411046
              </p>
            </span>
            <span className="flex justify-start gap-3">
              <Icon
                icon="ion:call"
                className="text-primary"
                width={35}
                height={35}
              />
              <p className="!text-white">+91 9853081212</p>
            </span>
          </div>
          <Image
            src="/images/chai_cup2.png"
            width={500}
            height={500}
            alt="footer"
            className="absolute -bottom-2 right-0 w-[250px] z-[1]"
          />
        </div>
      </div>
      <div className="w-full bg-dark md:px-[6%] px-[3%]">
        <p className="text-white md:text-[20px] text-[16px] py-3 text-center md:text-left">
          Copyright © 2024 All rights reserved. R. K. Chaiwala
        </p>
      </div>
    </>
  );
};

export default Footer;
