import { ImageCard } from "@src/components/common";
import React, { Suspense } from "react";

const images = [
  {
    text: "Lorem ipsum dolor sit amet consectetur",
    url: "https://source.unsplash.com/mPFSPqZOO7s",
  },
  {
    text: "Lorem ipsum dolor sit amet consectetur",
    url: "https://source.unsplash.com/uyX3qAQhZVA",
  },
  {
    text: "Lorem ipsum dolor sit amet consectetur",
    url: "https://source.unsplash.com/LV-NvIcA-Gg",
  },
  {
    text: "Lorem ipsum dolor sit amet consectetur",
    url: "https://source.unsplash.com/NTGg2rtWDwg",
  },
  {
    text: "Lorem ipsum dolor sit amet consectetur",
    url: "https://source.unsplash.com/hqnQWmIt3cY",
  },
  {
    text: "Lorem ipsum dolor sit amet consectetur",
    url: "https://source.unsplash.com/Vc2dD4l57og",
  },
  {
    text: "Lorem ipsum dolor sit amet consectetur",
    url: "https://source.unsplash.com/xoTt2fjs7d0",
  },
  {
    text: "Lorem ipsum dolor sit amet consectetur",
    url: "https://source.unsplash.com/hFKZ5-OT9Ys",
  },
  {
    text: "Lorem ipsum dolor sit amet consectetur",
    url: "https://source.unsplash.com/uPEnxrdSKIw",
  },
  {
    text: "Lorem ipsum dolor sit amet consectetur",
    url: "https://source.unsplash.com/uPEnxrdSKIw",
  },
  {
    text: "Lorem ipsum dolor sit amet consectetur",
    url: "https://source.unsplash.com/8KtqjrskUg8",
  },
  {
    text: "Lorem ipsum dolor sit amet consectetur",
    url: "https://source.unsplash.com/0qnRfgnZIsI",
  },
  {
    text: "Lorem ipsum dolor sit amet consectetur",
    url: "https://source.unsplash.com/qAaGXj-AOv4",
  },
];

const CardLaod = () => {
  return (
    <>
      <div className="bg-dark-gray opacity-70 h-[300px] mb-3 w-auto"></div>
      <div className="bg-dark-gray opacity-70 h-[15px] mb-3 w-[70%]"></div>
      <div className="bg-dark-gray opacity-70 h-[15px] mb-6 w-[40%]"></div>
    </>
  );
};

const page = () => {
  return (
    <>
      <div className="md:p-[6%] p-[3%] md:mt-[60px] mt-[120px]">
        <h1 className="sec-head mb-6 text-center">Gallery</h1>
        <p className="-mt-[15px] mb-8 md:w-[30%] text-center m-auto">
          Lorem ipsum dolor sit amet consectetur. Diam pharetra tellus sed nulla
          augue. Ornare
        </p>
        <div className="columns-1 gap-5 lg:gap-3 sm:columns-2 lg:columns-3 xl:columns-4">
          {images?.map((item) => {
            return (
              <Suspense fallback={<CardLaod />}>
                <ImageCard text={item.text} img={item.url} />
              </Suspense>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default page;
