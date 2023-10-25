import React from "react";
import Slider from "react-slick";
import "../../../node_modules/slick-carousel/slick/slick.css";
import "../../../node_modules/slick-carousel/slick/slick-theme.css";

import vegetables from "../../assets/images/productCategoriesOne.png";
import fruits from "../../assets/images/productCategoriesTwo.png";
import rootCrops from "../../assets/images/productCategoriesThree.png";
import productVideo from "../../assets/images/productVideo.png";
import fruitVariety from "../../assets/images/fruitvariety.png";
import { FaPlay } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { LiaLongArrowAltRightSolid } from "react-icons/lia";

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
      <div className="py-10 px-4 sm:px-8 max-w-5xl mx-auto">
        <div className="relative overflow-hidden z-10 justify-center items-center min-w-fit h-[200px] lg:h-[500px] mx-auto bg-gradient-to-b from-deepGreen via-midGrey to-deepGreen rounded-md lg:rounded-lg ">
          <div className="absolute inset-0 flex justify-center items-center mix-blend-overlay">
            <img
              className="w-full  h-full object-cover object-center overflow-hidden"
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
      <div className="py10 max-w-6xl mx-auto">
        <div className="  py-6 lg:py16">
          <div className="px-4 lg:px[45px] xl:px-[100px]  bg-white  mx-auto ">
            <div className="flex flex-col-reverse items-center md:gap[4rem] lg:flex-row lg:justify-between w-full lg:px-20">
              <div className="hidde lg:w-1/2 h-auto justify-center">
                <img
                  className="w[80%] h-auto md:w[60%] lg:w-full "
                  src={fruitVariety}
                  alt="fruit variety"
                />
              </div>
              <div className="mauto py-5 lg:w-1/2 ">
                <div className="sm:px1">
                  <h1 className=" text-3xl leading-[1.1] lg:tracking-tight font-semibold text-blue lg:text-[40px] mb-2">
                    Premium Fresh Produce From Rwanda
                  </h1>
                  <div className="flex justify-start w-[120px] text-left ">
                    <span className="border-2 border-lemonGreen w-full"></span>
                  </div>
                  <div className="py-4 pt-8">
                    <p className="text-base py-4">
                      Afri Foods is a dynamic and innovative, woman-led, gourmet
                      horticulture company. We grow and supply premium fresh
                      produce from Rwanda.
                    </p>
                    <p className="text-base py-4">
                      Our range of fresh fruit and vegetables includes avocado,
                      chilli, passionfruit, bitter lemon, pineapple, eggplant,
                      plantain, and apple banana.
                    </p>
                    <p className="text-base py-4">
                      Afri Foods farmers are trained in best agricultural
                      practices and food handling, in collaboration with the
                      National Agriculture Development Board (NAEB). We want to
                      ensure that our fruit and vegetables are of the highest
                      quality with full traceability back to individual farms.
                    </p>
                  </div>
                  <button className="border-[1.5px] border-green text-green rounded-md py-3 w-[150px] text-base font-semibold bg-white hover:bg-green hover:text-white ">
                    Read more
                    <LiaLongArrowAltRightSolid className="inline-flex ml-1 w-6 h-6" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroProducts;
