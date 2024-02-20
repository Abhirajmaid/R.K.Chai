"use client";
import React from "react";
import { ProductCard } from "../common";
import { ProductsData } from "@src/data/data";
import Link from "next/link";

const OurProducts = () => {
  return (
    <div className="flex flex-col">
      <h1 className="sec-head mx-auto text-center mb-6 md:mt-[230px] mt-[100px]">
        Our Products
      </h1>
      <div className="w-full gap-10 flex flex-wrap justify-between">
        {ProductsData.map((item, i) => {
          return <ProductCard {...item} key={i} />;
        })}
      </div>
      <Link href="/our-products">
        <button className="p-3 px-7 text-lg text-[#55330B] w-fit rounded-lg tracking-wider mt-[60px] !bg-none border border-[#55330B] ">
          More...
        </button>
      </Link>
    </div>
  );
};

export default OurProducts;
