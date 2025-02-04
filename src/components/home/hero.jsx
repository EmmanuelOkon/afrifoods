import React, { useState, useEffect } from "react";
import { heroImages } from "../../utils/data";
import { NavLink } from "react-router-dom";

const Hero = () => {
  const [activeElement, setActiveElement] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveElement((prevActiveElement) =>
        prevActiveElement + 1 >= 5 ? 1 : prevActiveElement + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative overflow-hidden z-0 flex  h-[calc(100vh-70px)] w-full flex-col justify-center items-center ">
      {heroImages.map((item, index) => (
        <div
          key={index}
          className={`${
            activeElement === index
              ? "lg:flex lg:flex-col justify-end"
              : "hidden"
          } w-full overflow-hidden h-full text-white absolute lg:min-hscreen max-hscreen -z-[50]`}
        >
          <img
            src={item.image}
            alt={item.title}
            className="hscreen h-full absolute inset-0 left-0 top-0 object-cover w-full"
          />

          <div className="w-full flex flexcol justify-center items-center relative bg-green h-full inset-0 bg-opacity-40 z-30">
            <div className="text-white absolute flex justify-center items-center font-bold text-2xl leading-[0.57px] font-karla text-center mx-auto max-w-2xl py-16 md:py-32 px-4 ">
              <div className="h[100vh] inset0 ">
                <h1 className=" text-4xl font-extrabold tracking-tight sm:text-6xl">
                  Premium, Fresh Produce from the Heart of Africa
                </h1>
                <p className="mt-6 text-[16px] leading-normal lg:text-lg font-normal lg:leading-8 max-w-xl mx-auto ">
                  Explore our diverse selection of farm-fresh agricultural
                  goods, sustainably cultivated in the heart of Africa, and
                  experience the true essence of quality, taste, and tradition.
                </p>
                <div className="mt-10 flex flex-col lg:flex-row gap-y-4 items-center justify-center gap-x-6 z- ">
                  <NavLink
                    to="/products"
                    className="rounded-md bg-green w-[200px] px-[22px] py-[14px] text-sm border border-green font-semibold text-white shadow-sm hover:bg-deepGreen hover:bg-opacity-50 "
                  >
                    Browse products
                  </NavLink>
                  <NavLink
                    to="/about"
                    className="rounded-md text-sm w-[200px] px-[22px] py-[14px] font-semibold border text-white border-white hover:bg-white hover:bg-opacity-50"
                  >
                    Read more
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Hero;
