import { useEffect, useState } from "react";
import agroLog from "../../assets/images/doorDeliveryGrayBackground.png";
import aajContainers from "../../assets/images/doorDeliveryGrayBackground.png";
import womenWithBag from "../../assets/images/doorDeliveryGrayBackground.png";
import aajBikeDeliveryMan from "../../assets/images/doorDeliveryGrayBackground.png";
import industrialPortContainerYard from "../../assets/images/doorDeliveryGrayBackground.png";
import doorDeliveryGrayBackground from "../../assets/images/doorDeliveryGrayBackground.png";

const Carousel = () => {
  const [activeElement, setActiveElement] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveElement((prevActiveElement) =>
        prevActiveElement < 5 ? prevActiveElement + 1 : 0
      );
    }, 2000);

    return () => clearInterval(interval); // Clear the interval on component unmount
  }, []);

  const switchActiveElement = (index) => {
    setActiveElement(index);
  };
  const carouselArr = [
    {
      name: "Chinedu Oparaku",
      img: agroLog,
      description: `My background in marketing and analytics ensures that I assess the effectiveness (or ineffectiveness) of things. For an upskilling program that works,
         I am a big believer in the growth value of Landa’s content and delivery.`,
    },
    {
      name: "Abdul Oganla",
      img: aajContainers,
      description:
        "Operating in a fast changing market, with a faster moving company, it is refreshing to learn at a pace that matches my energy and needs. Landa seamlessly ensures that.",
    },
    {
      name: "Damilola Aina",
      img: womenWithBag,
      description:
        "I am a strong advocate of learning that delivers defined outcomes, using an intuitive process. Landa ticks my boxes. I am convinced that your staff can benefit from a robust learning content and effective delivery like I do.",
    },
    {
      name: "Amilola Dina",
      img: aajBikeDeliveryMan,
      description:
        "I am a strong advocate of learning that delivers defined outcomes, using an intuitive process. Landa ticks my boxes. I am convinced that your staff can benefit from a robust learning content and effective delivery like I do.",
    },
    {
      name: "Amilola Dina",
      img: industrialPortContainerYard,
      description:
        "I am a strong advocate of learning that delivers defined outcomes, using an intuitive process. Landa ticks my boxes. I am convinced that your staff can benefit from a robust learning content and effective delivery like I do.",
    },
    {
      name: "Amilola Dina",
      img: doorDeliveryGrayBackground,
      description:
        "I am a strong advocate of learning that delivers defined outcomes, using an intuitive process. Landa ticks my boxes. I am convinced that your staff can benefit from a robust learning content and effective delivery like I do.",
    },
  ];
  return carouselArr.map((carousel, index) => (
    <>
      <div
        className={`${
          activeElement === index
            ? "lg:flex lg:flex-col justify-end "
            : "hidden"
        } w-full text-white slide reative min-h-screen  max-h-screen hidden -z-[50] `}
        key={index}
      >
        <img
          src={carousel.img}
          alt=""
          className="w-full h-full absolute left-0 top-0 object-cover"
        />
        {/* overlay gradient */}
        {/* <div className="w-full h-full left-0 top-0 absolute z-20 bg-gradient-to-t from-orange to-blue" /> */}

        {/* overlay text and tracking begins */}
        <div className="w-1/2 flex flex-col justify-between pb-8  pl-16 relative z30">
          <p className="text-white font-bold text-2xl leading-[0.57px] font-raleway">
            {carousel.name}
          </p>
          <div className="mt-6">
            <img src={carousel.logo} alt="" />
          </div>
          <p className="mt-16 max-w-[90%] font-[400] text-[23px] leading-[-0.46px]">
            {/* {carousel.description} */}
          </p>
          

          <div className="w-full  py-4 flex 2xl:mt-[10%] justify-start items-center gap-2">
            {carouselArr.map((carousel, index) => (
              <div
                className={`h-[6px] ${
                  activeElement === index
                    ? "w-12 bg-orange "
                    : "w-6 bg-fadeOrange "
                } rounded-lg  transition-transform cursor-pointer`}
                key={index}
                onClick={() => switchActiveElement(index)}
              ></div>
            ))}
          </div>
        </div>
      </div>
    </>
  ));
};

export default Carousel;
