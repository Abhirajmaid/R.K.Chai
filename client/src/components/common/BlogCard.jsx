"use client";
import { Icon } from "@iconify/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const BlogCard = ({ image, title, id }) => {
  return (
    <div className="group relative rounded-3xl md:w-[30%] w-full h-auto overflow-hidden cursor-pointer">
      <Image
        src={image}
        width={500}
        height={500}
        className="w-full h-full group-hover:scale-[1.05] transition-a"
      />
      <Link href={`/blogs/${id}`}>
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black via-black/20 to-none">
          <div className="flex flex-col items-start justify-end p-8 h-full w-full gap-6">
            <h4 className="md:text-[32px] text-[24px] text-white font-medium">
              {title}
            </h4>
            <button className="text-[20px] text-primary flex gap-2 items-center">
              Read More
              <Icon
                icon="fluent:arrow-up-right-16-filled"
                width={25}
                className=" rotate-[45deg]"
              />
            </button>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default BlogCard;
