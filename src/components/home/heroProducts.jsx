import productVideo from "../../assets/images/playVideo.png";
import fruitVariety from "../../assets/images/fruitBasket.png";

import { FaPlay } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { LiaLongArrowAltRightSolid } from "react-icons/lia";
import { LazyLoadImage } from "react-lazy-load-image-component";

const HeroProducts = () => {
  return (
    <>
      <div className="py-10 px-4 sm:px-8 max-w-7xl mx-auto">
        <div className="relative overflow-hidden z-10 justify-center items-center min-w-fit h-[200px] lg:h-[500px] mx-auto bg-gradient-to-b from-deepGreen via-midGrey to-deepGreen rounded-md lg:rounded-lg ">
          <div className="absolute inset-0 flex justify-center items-center mix-blend-overlay">
            <LazyLoadImage
              className="w-full  h-full object-cover object-center overflow-hidden"
              sizes="100vw"
              alt="productVideo"
              src={productVideo}
              effect="blur"
            />
          </div>
          <div className="absolute inset-0 flex items-center justify-center z-50">
            <div className="z-[100] w-fit">
              <NavLink
                to="/"
                className="text-white capitalize bg-green hover:bg-lemonGreen rounded-md lg:rounded-lg py-3 px-4 text-[16px] gap-3  "
              >
                <span className="gap-4 items-center">
                  how afrifood works?
                  <FaPlay className="inline-flex ml-2 text-white w-4 h-4" />
                </span>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
      <div className=" max-w-7xl mx-auto">
        <div className="  py-6 lg:py16">
          <div className="px-4 lg:px[45px] xl:px-[100px]  bg-white  mx-auto ">
            <div className="flex flex-col-reverse items-center rounded-lg md:gap-[4rem] lg:flex-row lg:justify-between w-full lg:px-20">
              <div className="hidde lg:w-1/2 h-auto justify-center">
                <LazyLoadImage
                  className="w[80%] h-auto md:w[60%] lg:w-full rounded-lg "
                  src={fruitVariety}
                  alt="fruit variety"
                  effect="blur"
                />
              </div>
              <div className="mauto py-5 lg:w-1/2 ">
                <div className="sm:px1">
                  <h1 className=" text-3xl leading-[1.1] text-[#333333] lg:tracking-tight font-semibold text-blue lg:text-[40px] mb-2">
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
