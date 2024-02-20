import { FranchiseCard, InfiniteMarquee } from "@src/components/common";
import {
  AboutSec,
  BlogSec,
  Features,
  Hero,
  OurNetwork,
  OurProducts,
} from "@src/components/home";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Hero />
      <InfiniteMarquee txt="CHAI" deg="-rotate-[3deg]" />
      <div className="md:px-[6%] px-[3%] pt-[50px]">
        <Features />
        <Image
          src="/images/bg_image.png"
          width={300}
          height={400}
          className="absolute -right-[150px] w-[520px] md:top-[48vw] top-[150vh] opacity-20 -rotate-[10deg]"
        />
        <AboutSec />
        <OurNetwork />
        <Image
          src="/images/bg_image.png"
          width={300}
          height={400}
          className="absolute -left-[150px] w-[520px] md:top-[100vw] top-[330vh] opacity-20 rotate-[10deg] -scale-x-100"
        />
        <OurProducts />
        <FranchiseCard />
      </div>
      <Image
        src="/images/bg_image_2.png"
        width={300}
        height={400}
        className="absolute md:-right-[50px] -right-[100px] w-[620px] md:top-[226vw] top-[940vh] opacity-20"
      />
      <BlogSec />
      <div className="h-fit mb-[50px] -mt-6">
        <InfiniteMarquee txt="CHAI" deg="rotate-[0deg]" />
      </div>
    </>
  );
}
