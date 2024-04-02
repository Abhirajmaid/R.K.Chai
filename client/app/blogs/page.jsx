import { BlogCard } from "@src/components/common";
import { BlogsData } from "@src/data/data";
import React from "react";

export const metadata = {
  title: "Blogs",
  description:
    "Dive into our blog for insightful articles, recipes, and inspiration, all centered around the world of chai. Explore the rich tapestry of chai culture and join our community of enthusiasts.",
};

const page = () => {
  return (
    <div className="flex flex-col p-[6%] bg-light_bg mt-[80px]">
      <h1 className="sec-head mb-6 text-center">Our Blogs</h1>
      <p className="-mt-[15px] mb-8 md:w-[30%] text-center m-auto">
        Exploring the World of Chai: Insights, Inspiration, and Recipes Await in
        Our Blog
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
