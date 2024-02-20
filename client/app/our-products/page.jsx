import { Banner, ProductCard } from "@src/components/common";
import { ProductsData } from "@src/data/data";
import React from "react";

const page = () => {
  return (
    <>
      <Banner txt="Products" />
      <div className="w-full gap-10 flex flex-wrap justify-between p-[6%] pb-[10%]">
        {ProductsData.map((item, i) => {
          return <ProductCard {...item} key={i} />;
        })}
      </div>
    </>
  );
};

export default page;
