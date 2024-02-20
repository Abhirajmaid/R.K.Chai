import React from "react";
import { BlogCard } from "../common";
import { BlogsData } from "@src/data/data";
import Link from "next/link";

const BlogSec = () => {
  return (
    <div className="flex flex-col px-[6%] bg-hero_bg md:mt-[230px] mt-[130px] py-10">
      <h1 className="sec-head mb-6">Our Blogs</h1>
      <p className="-mt-[15px] mb-8 md:w-[30%]">
        Lorem ipsum dolor sit amet consectetur. Diam pharetra tellus sed nulla
        augue. Ornare
      </p>
      <div className="w-full gap-12 flex flex-wrap justify-between">
        {BlogsData.slice(0, 3).map((item, i) => {
          return <BlogCard {...item} key={i} />;
        })}
      </div>
      <Link href="/blogs">
        <button className="p-3 px-7 text-lg text-[#55330B] w-fit rounded-lg tracking-wider mt-[60px] !bg-none border border-[#55330B] ">
          More...
        </button>
      </Link>
    </div>
  );
};

export default BlogSec;
