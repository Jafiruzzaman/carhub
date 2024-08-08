import Image from "next/image";
import Link from "next/link";
import React from "react";
import logo from "/public/logo.svg";
const navLinks = [
  {
    name: "home",
    path: "",
  },
  {
    name: "ride",
    path: "",
  },
  {
    name: "services",
    path: "",
  },
  {
    name: "about",
    path: "",
  },
  {
    name: "contact",
    path: "",
  },
];
import { FaUser } from "react-icons/fa";
const Responsive = ({ menu }) => {
  return (
    <header
      className={`${
        menu ? "-left-[100%]" : "left-0"
      } px-3 transition-all duration-300  absolute z-30 top-0 left-0 w-[50%] min-h-[100vh] bottom-0 bg-white md:py-8 py-6 xl:py-16`}
    >
      <div className="flex items-center justify-center flex-col">
        {/* logo */}
        <div className="md:px-8 px-4 flex items-center gap-24 justify-between">
          <Link href={"/"}>
            <Image src={logo} alt="logo" className="w-[3rem]" />
          </Link>
          <div className="xl:text-2xl md:text-lg text-lg p-2 md:px-4 md:py-4 bg-orangePrimary cursor-pointer text-white rounded-full">
            <FaUser />
          </div>
        </div>
        <nav className=" my-24">
          <nav className="flex items-center flex-col gap-6">
            {navLinks.map((link, index) => (
              <Link
                key={index}
                href={link.path}
                className={`text-lg capitalize text-headingPrimary hover:text-orangePrimary`}
              >
                {link.name}
              </Link>
            ))}
          </nav>
        </nav>
        {/* socials */}
        <div className="flex gap-3  text-headingPrimary text-sm items-center justify-center bottom-6  absolute capitalize text-center">
        @copyright 2024 | all rights reserved
        </div>
      </div>
    </header>
  );
};

export default Responsive;
