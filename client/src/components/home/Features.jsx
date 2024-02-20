import React from "react";

const FeaturesData = [
  {
    head: "AWESOME AROMA",
    sub_head: "Lorem ipsum dolor sit amet consectetur. Hendrerit mi nec ",
  },
  {
    head: "HIGH QUALITY",
    sub_head: "Lorem ipsum dolor sit amet consectetur. Hendrerit mi nec ",
  },
  {
    head: "AWESOME AROMA",
    sub_head: "Lorem ipsum dolor sit amet consectetur. Hendrerit mi nec ",
  },
  {
    head: "FLAVOUR FULL",
    sub_head: "Lorem ipsum dolor sit amet consectetur. Hendrerit mi nec ",
  },
];

const Features = () => {
  return (
    <>
      <div className="flex md:flex-nowrap flex-wrap md:gap-10 gap-2 justify-between w-full md:mt-[80px] mt-[40px]">
        {FeaturesData.map((item, i) => {
          return (
            <div
              className="flex flex-col justify-start md:gap-2 md:w-[20%] w-[40%] mt-4"
              key={i}
            >
              <span className="w-[20%] h-auto aspect-square bg-hero_bg "></span>
              <h3 className="text-[27px] font-semibold">{item.head}</h3>
              <p>{item.sub_head}</p>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Features;
