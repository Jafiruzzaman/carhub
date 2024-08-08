import Image from "next/image";
import React from "react";
import logo from "/public/logo.svg";
import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";
const Header = () => {
  return (
    <div className="bg-white shadow-sm sticky top-0 left-0 right-0 z-50">
      <header className="container mx-auto xl:py-6 py-4 px-6 xl:px-0 flex items-center justify-between">
        <div className="flex items-center gap-1">
          <Image src={logo} alt="logo" className="w-[50px]" />
          <span className="capitalize text-2xl font-bold text-headingPrimary">
            hub
          </span>
        </div>
        {/* desktop nav */}
        <div className="hidden xl:flex">
          <DesktopNav />
        </div>
        {/* nav */}
        <div className="flex xl:hidden">
          <MobileNav />
        </div>
      </header>
    </div>
  );
};

export default Header;
