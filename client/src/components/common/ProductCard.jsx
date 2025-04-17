"use client";
import { Icon } from "@iconify/react";
import Image from "next/image";
import React from "react";

const ProductCard = ({ name, product_image, special }) => {
  return (
    <div className="group relative border border-[#C0C0C0] bg-[#FDF4EC] md:w-[31%] w-full h-auto pb-[30px] pt-[60px] rounded-2xl flex flex-col justify-center items-center gap-[40px] hover:bg-white hover:scale-[1.05] transition-a">
      <div className="rounded-full bg-[#FAE9D8] w-[55%] aspect-square h-auto"></div>
      <Image
        src={product_image}
        width={1000}
        height={1000}
        alt="rkchai"
        className="absolute w-[450px] h-auto bottom-[20%] group-hover:scale-[1.07] transition-a "
      />
      <h2 className="font-semibold text-[40px] text-center">{name}</h2>
      {special ? (
        <div className="absolute flex items-center justify-center w-[70px] rounded-l-lg h-auto top-[20px] right-0 py-[8px] bg-primary group-hover:bg-dark transition-a">
          <Icon
            icon="ic:round-star"
            className="text-dark group-hover:text-primary"
            width={30}
          />
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default ProductCard;
