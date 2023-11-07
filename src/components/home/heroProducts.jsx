import ReactPlayer from "react-player";
import fruitBasketTwo from "../../assets/images/fruitBasketTwo.png";
import videoDetail from "../../assets/how afrifood works.mp4";

import { FaPlay } from "react-icons/fa";
import { LiaLongArrowAltRightSolid } from "react-icons/lia";
import { BsPauseFill } from "react-icons/bs";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { useState } from "react";
import { NavLink } from "react-router-dom";

const HeroProducts = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  // const [buttonText, setButtonText] = useState("how afrifood works?");
  // const [playButtonVisible, setPlayButtonVisible] = useState(true);

  const handlePlayVideo = () => {
    setIsPlaying(!isPlaying);

    // const buttonText = isPlaying ? "" : "";
    // setButtonText(buttonText);

    // setPlayButtonVisible(true);

    // setTimeout(() => {
    //   setPlayButtonVisible(false);
    // }, 2500);
  };

  return (
    <>
      <div className="py-10 px-4 sm:px-8 max-w-7xl mx-auto">
        <div className="relative overflow-hidden z-10 justify-center items-center min-w-fit h-[200px] lg:h-[500px] mx-auto bg-gradient-to-b from-deepGreen to-grey500 opacity-100 rounded-md lg:rounded-lg ">
          <div className="absolute inset-0 flex justify-center items-center mix-blend-overlay">
            <ReactPlayer
              playing={isPlaying}
              controls={false}
              loop={false}
              width={"100%"}
              height={"100%"}
              className="w-full h-full object-cover object-center overflow-hidden"
              url={videoDetail}
            />
          </div>
          <div className="absolute inset-0 flex items-center justify-center z-50">
            <div className="z-[100] w-fit">
              <button
                onClick={handlePlayVideo}
                className="text-white capitalize bg-green hover:bg-lemonGreen rounded-md lg:rounded-lg py-3 px-4 text-[16px] gap-3  "
              >
                <span className="gap-4 items-center transition-all ease-in-out delay-300">
                  {/* {buttonText} */}
                  {isPlaying ? (
                    <BsPauseFill className="inline-flex ml1 text-white w-6 h-6" />
                  ) : (
                    <FaPlay className="inline-flex ml2 text-white w-4 h-4" />
                  )}
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className=" max-w-7xl mx-auto">
        <div className="  py-6 lg:py16">
          <div className="px-4 lg:px[45px] xl:px[100px]  bg-white  mx-auto ">
            <div className="flex flex-col-reverse items-center rounded-lg md:gap-[4rem] lg:flex-row lg:justify-between w-full lg:px-20">
              <div className="hidde lg:w-1/2 h-auto h[600px] justify-center">
                <LazyLoadImage
                  className="w[80%] h-auto md:w[60%] lg:w-full rounded-lg "
                  src={fruitBasketTwo}
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
                      At Afri Foods, we're a forward-thinking horticulture
                      company with a touch of innovation. Led by women, we're
                      proud to bring you the finest fresh produce from Rwanda.
                    </p>
                    <p className="text-base py-4">
                      Our array of fresh fruits and vegetables is a testament to
                      the richness of Rwandan soil. You'll find treasures like
                      avocados, chili peppers, passionfruit, bitter lemons,
                      pineapples, eggplants, plantains, and apple bananas in our
                      range.
                    </p>
                    <p className="text-base py-4">
                      We take quality seriously. Our dedicated farmers undergo
                      rigorous training in the best agricultural practices and
                      safe food handling. We partner with the National
                      Agriculture Development Board (NAEB) to ensure that our
                      produce is of the highest quality and can be traced back
                      to the very farms it came from.
                      <br />
                      At Afri Foods, it's about a commitment to excellence and a
                      passion for freshness. Join us in savoring the flavors of
                      Rwanda!
                    </p>
                  </div>
                  <NavLink
                    to="/about"
                    className="border-[1.5px] border-green text-green rounded-md py-3 px-4 text-base font-semibold bg-white hover:bg-green hover:text-white "
                  >
                    Read more
                    <LiaLongArrowAltRightSolid className="inline-flex ml-1 w-6 h-6" />
                  </NavLink>
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
