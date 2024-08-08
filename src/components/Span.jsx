import React from "react";

const Span = ({ text,style }) => {
  return (
    <span
      className={`px-8 py-2 bg-spanSecondary text-spanPrimary rounded-full font-semibold capitalize text-lg ${style}`}
    >
      {text}
    </span>
  );
};

export default Span;
