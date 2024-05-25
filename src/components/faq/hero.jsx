import React from "react";
import { useLocation } from "react-router-dom";

const Hero = () => {
  const pathname = useLocation().pathname;

  const removeForwardSlash = (pathname) => {
    return pathname.replace(/\//g, "");
  };

  return (
    <>
      <div className="relative w-full h-[40vh] md:h-[60vh] bg-heroNine bg-center bg-cover bg-no-repeat ">
        <div className="bg-black bg-opacity-60 relative inset-0 h-full ">
          <div className="flex h-full justify-center items-center">
            <div className="text-center">
              <h2 className="text-white font-bold tracking-wider text-3xl md:text-5xl md:font-extrabold capitalize">
              Frequently Asked Questions
              </h2>
              <span className="text-white text-opacity-70 text-lg ">Home</span>
              <span className="text-white text-opacity-70 px-4 text-lg">/</span>
              <span className="text-lemonGreen text-opacity-70 text-lg capitalize">
                {pathname === "/faq" ? "FAQs" : removeForwardSlash(pathname)}
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
