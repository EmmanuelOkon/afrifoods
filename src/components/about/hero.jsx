import React from "react";
import { useLocation } from "react-router-dom";


const Hero = () => {
  const pathname = useLocation().pathname;

  const removeForwardSlash = (pathname) => {
    return pathname.replace(/\//g, "");
  };

  return (
    <>
      <div className="relative w-full h-[60vh] bg-cover bg-center bg-no-repeat bg-heroSix ">
        <div className="bg-black bg-opacity-60 relative inset-0 h-full ">
          <div className="flex h-full justify-center items-center">
            <div className="text-center">
              <h2 className="text-white text-[32px] md:text-5xl font-extrabold capitalize">
                About Afri Foods
              </h2>
              <span className="text-white text-opacity-70 text-lg ">Home</span>
              <span className="text-white text-opacity-70 px-4 text-lg">/</span>
              <span className="text-lemonGreen text-opacity-70 text-lg capitalize">
                {pathname === "/about"
                  ? "About Us"
                  : removeForwardSlash(pathname)}
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
