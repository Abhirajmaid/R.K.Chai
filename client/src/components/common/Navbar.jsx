"use client";
import Link from "next/link";
import Image from "next/image";
import { navLinks } from "@/src/data/navLinks";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();
  const isActive = (href) => pathname == href;

  return (
    <>
      <div className="md:h-[100px] h-[80px] absolute top-0 left-0 w-full z-[99] px-[3%] md:px-[6%] flex justify-between items-center">
        <Link href="/">
          <Image
            src="/images/RK Logo.png"
            width={100}
            height={100}
            className="w-14 md:w-[150px] "
            alt="RKChaiwala"
          />
        </Link>
        <div className="md:w-[27vw] w-[90%] bg-white p-4 md:px-10 rounded-full shadow-bg fixed md:top-5 top-[87%] left-1/2 -translate-x-1/2">
          <ul className="flex-center-between w-full">
            {navLinks.map((item, id) => {
              return (
                <Link
                  key={id}
                  href={item.url}
                  className={`${
                    isActive(`${item.url}`) ? "text-primary" : ""
                  } font-semibold text-lg hover:text-primary`}
                >
                  <li>{item.linkText}</li>
                </Link>
              );
            })}
          </ul>
        </div>
        <div className="flex gap-5 items-center">
          <Link href="/contact-us">
            <button className="font-semibold text-xl cursor-pointer mix-blend-difference">
              Contact Us
            </button>
          </Link>
          <Link href="/get-franchise">
            <button className="primary-btn !uppercase font-medium ">
              Get A Franchise
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
