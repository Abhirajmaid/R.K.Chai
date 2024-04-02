import { Banner } from "@src/components/common";
import { AboutSec } from "@src/components/home";
import React from "react";

export const metadata = {
  title: "About Us",
  description:
    "At RK Chaiwala, we blend tradition with flavor, crafting premium chai for global chai lovers. Join our community and savor the essence of our rich heritage in every sip.",
};

const page = () => {
  return (
    <>
      <Banner txt="About" />
      <div className="px-[6%] py-[100px]">
        <AboutSec />
      </div>
    </>
  );
};

export default page;
