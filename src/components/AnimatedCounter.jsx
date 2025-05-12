import React from "react";
import { counterItems } from "../constants";
import CountUp from "react-countup";

const AnimatedCounter = () => {
  return (
    <div
      id="counter"
      className="w-full flex flex-col items-center px-4 md:px-0 xl:mt-0 mt-20"
    >
      <div className="mx-auto w-full flex flex-col items-center">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8 w-full max-w-5xl">
          {counterItems.map((item) => (
            <div
              key={item.label}
              className="bg-zinc-900 rounded-lg p-10 flex flex-col items-center justify-center w-full"
            >
              <div
                className="counter-number text-white text-5xl font-bold mb-2"
              >
                <CountUp end={item.value} /> {item.suffix}
              </div>
              <div className="text-white-50 text-lg">{item.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AnimatedCounter;
