import React from "react";
import Slider from "react-slick";
import "../../../node_modules/slick-carousel/slick/slick.css";
import "../../../node_modules/slick-carousel/slick/slick-theme.css";

import vegetables from "../../assets/images/productCategoriesOne.png";
import fruits from "../../assets/images/productCategoriesTwo.png";
import rootCrops from "../../assets/images/productCategoriesThree.png";
import productVideo from "../../assets/images/productVideo.png";
import { FaPlay } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const products = [
  {
    name: "vegetables",
    image: vegetables,
  },
  {
    name: "fruits",
    image: fruits,
  },
  {
    name: "root crops",
    image: rootCrops,
  },
  {
    name: "cereals",
    image: vegetables,
  },
  {
    name: "legumes",
    image: fruits,
  },
  {
    name: "spices",
    image: rootCrops,
  },
];

const HeroProducts = () => {
  const settings = {
    className: "center",
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    initialSlide: 0,
    centerMode: true,
    centerPadding: "40px",
    autoplay: true,
    autoplaySpeed: 2000,
    slidesPerRow: 1,
    slidesToShow: 2,
    dots: false,
    arrows: true,
    pauseOnDotsHover: false,
    pauseOnFocus: false,
    pauseOnHover: false,
  };

  return (
    <>
      <div className="py-28 flx items-center justify-between  ">
        <div className="mxauto mx-20 py-3 max-w7xl  bg-purple-700 ">
          <h2 className="text-4xl font-bold text-greyBlack text-center py-6 ">
            Product Categories
          </h2>
          <div className="flex justify-center mx-auto w-[120px] text-center ">
            <span className="border-2 border-lemonGreen w-full"></span>
          </div>
          <div className="overflow-x-hidden  max-w-full pt-12 px-6 ">
            <Slider {...settings} className="h-fit space-x-4 grid grid-cols-2 ">
              {products.map((product) => (
                <div className="bg-lightGrey overflow-hidden grid grid-cols-3 rounded-md lg:rounded-2xl h-[400px] max-w-[250px]">
                  <div className="flex flex-col justify-between min-h-full">
                    <div className="p-4">
                      <h3 className="text-2xl uppercase font-bold py-2">
                        {product.name}
                      </h3>
                      <NavLink
                        to="#"
                        className="border-b-2 border-b-green py-2 text-lg tracking-tight"
                      >
                        Shop now
                      </NavLink>
                    </div>
                    <div className="  ">
                      <img
                        className="bott"
                        width={400}
                        height={200}
                        alt={product.name}
                        src={product.image}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
      <div className="py-10 max-w-5xl mx-auto">
        <div className="relative overflow-hidden z-10 justify-center items-center min-w-fit h-[500px] mx-auto bg-gradient-to-b from-deepGreen via-midGrey to-deepGreen rounded-md lg:rounded-lg ">
          <div className="absolute inset-0 flex justify-center items-center mix-blend-overlay">
            <img
              className="w-full h-full object-cover object-center overflow-hidden"
              sizes="100vw"
              alt="productVideo"
              src={productVideo}
            />
          </div>
          <div className="absolute inset-0 flex items-center justify-center z-50">
            <div className="z-[100] w-fit">
              <span className="text-white capitalize bg-green hover:bg-lemonGreen rounded-md lg:rounded-lg py-3 px-4 text-[16px] gap-3  ">
                <NavLink to="/" className="gap-4 items-center">
                  how afrifood works?
                  <FaPlay className="inline-flex ml-2 text-white w-4 h-4" />
                </NavLink>
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroProducts;
