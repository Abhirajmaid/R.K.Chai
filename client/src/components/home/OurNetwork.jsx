import Image from "next/image";
import React from "react";

const OurNetwork = () => {
  return (
    <div className="flex items-center justify-center flex-col gap-5 md:mt-[170px] mt-[100px]">
      <h1 className="sec-head">Our Network</h1>
      <p className="-mt-[15px] mb-5 md:w-[30%] text-center">
        Lorem ipsum dolor sit amet consectetur. Diam pharetra tellus sed nulla
        augue. Ornare
      </p>
      <div className="flex items-center md:gap-[70px] gap-4">
        <div className="flex flex-col justify-center items-center">
          <h3 className="md:text-[24px] text-[18px] font-bold text-center">
            Years Legacy
          </h3>
          <span className="md:text-[45px] text-[40px]">+12</span>
        </div>
        <Image
          src="/images/Line.png"
          width={50}
          height={100}
          className="h-[90px] w-[3px]"
        />
        <div className="flex flex-col justify-center items-center">
          <h3 className="md:text-[24px] text-[18px] font-bold text-center">
            Products
          </h3>
          <span className="md:text-[45px] text-[40px]">+40</span>
        </div>
        <Image
          src="/images/Line.png"
          width={50}
          height={100}
          className="h-[90px] w-[3px]"
        />
        <div className="flex flex-col justify-center items-center ">
          <h3 className="md:text-[24px] text-[18px] font-bold text-center">
            Loyal Customers
          </h3>
          <span className="md:text-[45px] text-[40px]">+30k</span>
        </div>
      </div>
    </div>
  );
};

export default OurNetwork;
