import React from "react";
import Button from "./Button";

const Subscription = () => {
  return (
    <section className="container  mx-auto   xl:my-24 rounded-3xl">
      <div className="bgGradient p-6 rounded-xl xl:rounded-3xl xl:px-0 py-24">
        <form action="" method="post" className="flex flex-col items-center">
          <div className="">
            <h2 className="text-2xl h2 xl:text-6xl text-white font-extrabold text-center ">
              subscribe to newsletter
            </h2>
          </div>
          <div className="md:bg-white px-3 pl-6 py-2 rounded-lg flex flex-col md:flex-row  gap-3">
            <input
              type="email"
              className="md:bg-transparent border-none outline-none px-4 py-2 rounded-lg"
              name=""
              id=""
              placeholder="enter your email..."
            />
            <Button
              btnText={`subscribe `}
              btnStyle={`bg-headingPrimary text-white font-semibold`}
            />
          </div>
        </form>
      </div>
    </section>
  );
};

export default Subscription;
