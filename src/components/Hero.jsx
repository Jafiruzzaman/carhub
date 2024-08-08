import Image from "next/image";
import blob from "/public/blob.svg";
import HeroImage from "/public/hero.png";
import React from "react";
import playStore from "/public/playstore.svg";
import appStore from "/public/appstore.svg";
const Hero = () => {
  return (
    <section className="container mx-auto my-28 px-4 xl:px-0  xl:my-36 flex items-center justify-between  md:flex-row xl:flex-row flex-col text-center xl:text-left gap-16">
      {/* text */}
      <div className="order-2 xl:order-1 md:order-1 md:text-left">
        <h1 className="h1 md:text-4xl md:text-left capitalize xl:max-w-[40rem] text-6xl xl:text-8xl">
          <span className="text-orangePrimary">looking</span> for rent a car
        </h1>
        <p className="p xl:max-w-[32rem] md:text-sm md:px-0 xl:font-light xl:text-lg capitalize px-8 xl:px-0">
          Our top priority is ensuring you have a seamless and enjoyable rental
          experience. Our friendly and knowledgeable staff are always ready to
          assist you .
        </p>
        <div className="flex flex-col my-3">
          <p className="p md:text-base xl:text-xl xl:font-semibold capitalize my-0">
            download our latest app
          </p>
          <div className="flex items-center justify-center md:justify-start xl:justify-start my-3 xl:gap-4 gap-3">
            <Image
              src={appStore}
              alt="playstore"
              className="cursor-pointer xl:w-[8rem] hover:transition-all duration-200 hover:-translate-y-2 w-[7rem]"
            />
            <Image
              src={playStore}
              alt="playstore"
              className="cursor-pointer  xl:w-[8rem] hover:transition-all duration-200 hover:-translate-y-2 w-[7rem]"
            />
          </div>
        </div>
      </div>
      {/* image */}
      <div className="order-1 xl:order-2">
        <div className="relative flex items-center justify-center">
          <Image
            src={blob}
            alt="blob"
            className="absolute top-0 right-0 rounded-[3rem]"
          />
          <Image
            src={HeroImage}
            alt="hero image"
            className="z-10 md:max-w-[450px]  xl:max-w-[1200px]"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
