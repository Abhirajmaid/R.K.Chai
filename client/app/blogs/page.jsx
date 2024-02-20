import { BlogCard } from "@src/components/common";
import { BlogsData } from "@src/data/data";
import React from "react";

const page = () => {
  return (
    <div className="flex flex-col p-[6%] bg-light_bg mt-[80px]">
      <h1 className="sec-head mb-6 text-center">Our Blogs</h1>
      <p className="-mt-[15px] mb-8 md:w-[30%] text-center m-auto">
        Lorem ipsum dolor sit amet consectetur. Diam pharetra tellus sed nulla
        augue. Ornare
      </p>
      <div className="w-full gap-12 flex flex-wrap justify-between">
        {BlogsData.map((item, i) => {
          return <BlogCard {...item} key={i} />;
        })}
      </div>
    </div>
  );
};

export default page;
