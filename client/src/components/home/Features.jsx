import React from "react";

const FeaturesData = [
  {
    head: "Unique and Delicious flavors",
    sub_head:
      "RK Chai may offer unique and delicious flavors of chai that are not found elsewhere.",
  },
  {
    head: "High-quality Ingredients",
    sub_head:
      "High-quality ingredients, such as fresh spices and loose-leaf tea, to create a superior cup of chai.",
  },
  {
    head: "Wide Variety of Flavors",
    sub_head:
      "From classic masala chai to innovative blends, RKChaiwala provides a diverse range of chai options to cater to different tastes and preferences.",
  },
  {
    head: "Community",
    sub_head:
      "RKChaiwala celebrates chai not just as a beverage but as a tradition that brings people together.",
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
