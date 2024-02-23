import Image from "next/image";
import Link from "next/link";
import React from "react";

const FranchiseCard = () => {
  return (
    <div className="w-[90%] bg-hero_bg rounded-2xl flex gap-6 relative md:px-[80px] md:py-[60px] p-[30px] mx-auto mt-[170px]">
      <div className="w-full flex flex-col gap-7">
        <h2 className="sec-head leading-[80px]">
          Get Our Franchise <br /> Today !
        </h2>
        <Link href="/get-franchise">
          <button className="primary-btn !uppercase">Get A Franchise</button>
        </Link>
      </div>
      <Image
        src="/images/shop.png"
        width={1500}
        height={1500}
        alt="shop"
        className=" absolute right-0 w-[700px] -top-10 md:block hidden"
      />
    </div>
  );
};

export default FranchiseCard;
