import React from "react";
import { FaLocationDot } from "react-icons/fa6";
import Button from "./Button";
const HeroForm = () => {
  return (
    <section className="container mx-auto xl:my-24 px-4 xl:px-0">
      <div className="xl:px-6 xl:py-16 py-8 rounded-2xl  bg-white ">
        <form
          action=""
          method="post"
          className="flex px-4 xl:items-end flex-wrap xl:flex-nowrap xl:gap-10  gap-6 xl:flex-row flex-col justify-center"
        >
          <div className="w-full">
            <h2 className="xl:text-2xl mb-2 capitalize text-headingPrimary font-semibold">
              location
            </h2>
            <div className="flex items-center gap-3 bg-inputBackground px-7 rounded-lg py-3">
              <input
                type="text"
                className="bg-transparent outline-none border-none"
                placeholder="search location"
              />
            </div>
          </div>
          <div className="w-full">
            <h2 className="xl:text-2xl mb-2 capitalize text-headingPrimary font-semibold">
              select pickUp date
            </h2>
            <div className="flex items-center gap-3 bg-inputBackground px-7 rounded-lg py-3">
              <input
                type="date"
                className="bg-transparent outline-none border-none"
              />
            </div>
          </div>
          <div className="w-full">
            <h2 className="xl:text-2xl mb-2 capitalize text-headingPrimary font-semibold">
              select Return date
            </h2>
            <div className="flex items-center gap-3 bg-inputBackground px-7 rounded-lg py-3">
              <input
                type="date"
                className="bg-transparent outline-none border-none"
              />
            </div>
          </div>
          <Button
            btnText={`submit`}
            btnStyle={`bg-orangePrimary xl:text-left xl:px-12 py-3 text-white w-full mt-2 xl:w-fit xl:text-lg font-semibold rounded-md`}
          />
        </form>
      </div>
    </section>
  );
};

export default HeroForm;
