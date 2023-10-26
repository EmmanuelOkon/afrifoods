import React from "react";
import { useLocation } from "react-router-dom";

const Hero = () => {
  const pathname = useLocation().pathname;

  const removeForwardSlash = (pathname) => {
    return pathname.replace(/\//g, "");
  };

  return (
    <>
      <div className="relative w-full h-[60vh] bg-heroSeven">
        <div className="bg-black bg-opacity-60 relative inset-0 h-full ">
          <div className="flex h-full justify-center items-center">
            <div className="text-center">
              <h2 className="text-white text-5xl font-extrabold capitalize">
                Contact Us
              </h2>
              <span className="text-white text-opacity-70 text-lg ">Home</span>
              <span className="text-white text-opacity-70 px-4 text-lg">/</span>
              <span className="text-lemonGreen text-opacity-70 text-lg capitalize">
                {pathname === "/contact" ? "Contact Us" : removeForwardSlash(pathname)}
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
