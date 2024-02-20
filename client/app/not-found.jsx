import Image from "next/image";
import Link from "next/link";
import React from "react";

const NotFound = () => {
  return (
    <>
      <div className="w-full h-[100vh] flex justify-center items-center bg-light_bg flex-col">
        <h5 className="sec-head !font-medium">
          404 | Back to{" "}
          <Link href="/" className=" underline">
            Home
          </Link>
        </h5>
        <p className="text-[26px]">We Think You Are Lost... Let's Have Tea!</p>
      </div>
    </>
  );
};

export default NotFound;
