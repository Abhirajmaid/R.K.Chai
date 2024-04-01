import { ImageCard } from "@src/components/common";
import React, { Suspense } from "react";

const images = [
  {
    text: "Lorem ipsum dolor sit amet consectetur",
    url: "https://source.unsplash.com/CzShRoU5--o",
  },
  {
    text: "Lorem ipsum dolor sit amet consectetur",
    url: "https://source.unsplash.com/dXGl11H1Kbg",
  },
  {
    text: "Lorem ipsum dolor sit amet consectetur",
    url: "https://source.unsplash.com/TLSGg4ikMdw",
  },
  {
    text: "Lorem ipsum dolor sit amet consectetur",
    url: "https://source.unsplash.com/jHMJrp33sUg",
  },
  {
    text: "Lorem ipsum dolor sit amet consectetur",
    url: "https://source.unsplash.com/xdD-x2Y2SPI",
  },
  {
    text: "Lorem ipsum dolor sit amet consectetur",
    url: "https://source.unsplash.com/EEzYovNQYss",
  },
  {
    text: "Lorem ipsum dolor sit amet consectetur",
    url: "https://source.unsplash.com/4e0PvfHClnI",
  },
  {
    text: "Lorem ipsum dolor sit amet consectetur",
    url: "https://source.unsplash.com/Tp1yIvG7aBw",
  },
  {
    text: "Lorem ipsum dolor sit amet consectetur",
    url: "https://source.unsplash.com/0l3mh0iy_dc",
  },
  {
    text: "Lorem ipsum dolor sit amet consectetur",
    url: "https://source.unsplash.com/_w_9J1qJD9E",
  },
  {
    text: "Lorem ipsum dolor sit amet consectetur",
    url: "https://source.unsplash.com/zI27XpN1GdA",
  },
  {
    text: "Lorem ipsum dolor sit amet consectetur",
    url: "https://source.unsplash.com/ynnYEs3NyaY",
  },
  {
    text: "Lorem ipsum dolor sit amet consectetur",
    url: "https://source.unsplash.com/_5X6RIlUFbM",
  },
  {
    text: "Lorem ipsum dolor sit amet consectetur",
    url: "https://source.unsplash.com/hxqWJ8VEFyM",
  },
  {
    text: "Lorem ipsum dolor sit amet consectetur",
    url: "https://source.unsplash.com/2P0EFD18NYA",
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
          Indulge Your Senses: A Visual Feast of Chai Moments Captured in Our
          Gallery!
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
