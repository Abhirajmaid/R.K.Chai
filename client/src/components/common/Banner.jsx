import Image from "next/image";
import React from "react";

const Banner = ({ txt }) => {
  return (
    <>
      <div className="w-full relative">
        <Image
          src="/images/banner.jpg"
          width={1500}
          height={1500}
          alt="rk_banner"
          className="w-full md:h-[650px] h-[400px] object-cover"
        />

        <div className="flex absolute top-0 left-0 h-full w-full px-[6%] items-center justify-center bg-dark/70">
          <h1 className="md:text-[75px] text-[60px] font-bold text-white uppercase text-center">
            {txt}
          </h1>
        </div>
      </div>
    </>
  );
};

export default Banner;
