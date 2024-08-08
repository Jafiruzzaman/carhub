import React from "react";
import imageOne from "/public/User/user-02.png";
import imageTwo from "/public/User/user-01.png";
import imageThree from "/public/User/user-03.png";
import Image from "next/image";
const reviewList = [
  {
    name: "adrian jenny",
    image: imageOne,
    reviews:
      "I recently rented a car from carHub the experience was fantastic! The staff were incredibly friendly and helpful, making the entire process smooth and hassle-free. ",
    rating: "4.7",
  },
  {
    name: "Robert Henry",
    image: imageTwo,
    reviews:
      "My experience with [Store Name] was top-notch! The customer service was outstanding; they made sure I had everything I needed and answered all my questions with patience.",
    rating: "4.4",
  },
  {
    name: "Leon Thomas",
    image: imageThree,
    reviews:
      "I recently rented a car from carHub the experience was fantastic! The staff were incredibly friendly and helpful, making the entire process smooth and hassle-free. ",
    rating: "5",
  },
];
import { FaStar } from "react-icons/fa6";
import Span from "./Span";
export const Reviews = () => {
  return (
    <section className="container mx-auto px-4 xl:my-24 my-12">
      <div className="flex items-center justify-center flex-col my-12">
        <Span text={`customer's review`} />
        <h2 className="h2 text-center leading-snug font-extrabold">
          what our customer say
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 xl:gap-8 gap-4">
        {reviewList.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-md hover:shadow-lg group-hover:transition duration-200 group-hover:-translate-y-2 p-8 flex flex-col gap-4 items-center"
          >
            <div className="flex items-center justify-center w-full">
              <Image
                src={item.image}
                className="rounded-full w-20 h-20"
                alt={"user image"}
              />
            </div>
            <h3 className="text-xl capitalize text-headingPrimary font-semibold">
              {item.name}
            </h3>
            <div className="flex items-center gap-2 text-base font-light">
              <span className={`text-orangePrimary font-semibold`}>
                {item.rating}
              </span>
              <span className="text-orangePrimary">
                <FaStar />
              </span>
            </div>
            <p className="text-base p text-center">{item.reviews}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
