import { InfiniteMarquee } from "@src/components/common";
import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <>
      <div className="relative w-full h-[110vh]">
        <Image
          src="/images/contact_img.jpg"
          width={1000}
          height={1000}
          className="w-full h-full object-cover blur-[6px] "
        />
        <div className="w-full h-full absolute top-0 left-0 flex justify-center items-center bg-black/50 px-[6%]">
          <div className="mt-14 w-[60%] h-[72vh] rounded-xl mx-auto flex items-center gap-6 bg-white overflow-hidden">
            <Image
              src="/images/contact_img.jpg"
              width={500}
              height={500}
              className="w-[40%] h-full object-cover"
            />
            <form className="flex flex-col w-[60%] p-8 px-6 gap-6 mx-auto">
              <h1 className="font-semibold text-[40px]">Contact Us</h1>
              <input
                type="text"
                className="p-4 bg-slate-200 rounded-md focus:outline-[#00000052]"
                placeholder="Your Name"
              />
              <input
                type="text"
                className="p-4 bg-slate-200 rounded-md focus:outline-[#00000052]"
                placeholder="Your Email"
              />
              <input
                type="text"
                className="p-4 bg-slate-200 rounded-md focus:outline-[#00000052]"
                placeholder="Phone"
              />
              <textarea
                placeholder="Message"
                className="p-4 bg-slate-200 rounded-md resize-none focus:outline-[#00000052]"
                rows="6"
              ></textarea>
              <button className="primary-btn !w-[40%]">Send</button>
            </form>
          </div>
        </div>
      </div>
      <div className="h-fit mb-[50px] -mt-6">
        <InfiniteMarquee txt="CHAI" />
      </div>
    </>
  );
};

export default page;
