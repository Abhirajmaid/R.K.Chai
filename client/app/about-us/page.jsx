import { Banner } from "@src/components/common";
import { AboutSec } from "@src/components/home";
import React from "react";

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
