import React from "react";
import { useLocation } from "react-router-dom";

const Hero = ({ title, subTitle, pathName }) => {
  const pathname = useLocation().pathname;

  const removeForwardSlash = (pathname) => {
    return pathname.replace(/\//g, "");
  };

  return (
    <>
      <div className="relative w-full h-[60vh] bg-heroProduct bg-cover bg-no-repeat ">
        <div className="bg-black bg-opacity-60 relative inset-0 h-full">
          <div className="flex h-full justify-center items-center">
            <div className="text-center">
              <h2 className="text-white text-5xl font-extrabold capitalize">
                Products
              </h2>
              <span className="text-white text-opacity-70 text-base md:text-lg  ">Home</span>
              <span className="text-white text-opacity-70 px-1 md:px-4 text-lg">/</span>
              {title && subTitle && (
                <>
                  <span className="text-white text-opacity-70 text-base md:text-lg  capitalize">
                    {title}
                  </span>
                  <span className="text-white text-opacity-70 px-1 md:px-4 text-lg">
                    /
                  </span>
                  <span className="text-white text-opacity-70 text-base md:text-lg capitalize">
                    {subTitle}
                  </span>
                  <span className="text-white text-opacity-70 px-1 md:px-4 text-lg">
                    /
                  </span>
                  <span className="text-lemonGreen text-opacity-70 text-base md:text-lg  capitalize">
                    {pathName}
                  </span>
                </>
              )}
              {!title && !subTitle && (
                <>
                  <span className="text-lemonGreen text-opacity-70 text-lg capitalize">
                    {removeForwardSlash(pathname)}
                  </span>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
