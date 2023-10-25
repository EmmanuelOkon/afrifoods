import React, { useState, useEffect } from "react";
import heroOne from "../../assets/images/hero_1.png";
import heroTwo from "../../assets/images/hero_2.png";
import heroThree from "../../assets/images/hero_3.png";
import heroFour from "../../assets/images/hero_4.png";
import heroFive from "../../assets/images/hero_5.png";
import { NavLink } from "react-router-dom";

const items = [
  {
    title: "Trusted logistics service provider.",
    description:
      "We offer doorstep delivery not only to all states within Nigeria but also to over 250 countries worldwide.",
    image: heroOne,
  },
  {
    title: "International Shipping",
    description: "Get a US & UK address",
    image: heroTwo,
  },
  {
    title: "Air & ocean freight.",
    description:
      "Get real time air and ocean freight rates for over 200 countries. Make a booking in few minutes.",
    image: heroThree,
  },
  {
    title: "Supply chain Management",
    description:
      "We will take care of your entire supply chain from freight forwarding/clearing and warehousing to transport logistics.",
    image: heroFour,
  },
  {
    title: "Courier",
    description:
      "Ship doorstep to over 200 countries and 36 states in Nigeria.",
    image: heroFive,
  },
];

const Hero = () => {
  const [activeElement, setActiveElement] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveElement((prevActiveElement) =>
        prevActiveElement + 1 >= 5 ? 1 : prevActiveElement + 1
      );
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const switchActiveElement = (index) => {
    setActiveElement(index);
  };

  return (
    <div className="relative overflow-hidden z-0 flex h-[calc(100vh-70px)] w-full flex-col justify-center items-center">
      {items.map((item, index) => (
        <div
          key={index}
          className={`${
            activeElement === index
              ? "lg:flex lg:flex-col justify-end"
              : "hidden"
          } w-full overflow-hidden h-full text-white absolute min-h-screen max-h-screen -z-[50]`}
        >
          <img
            src={item.image}
            alt=""
            className=" h-full absolute left-0 top-0 object-cover "
          />

          <div className="w-full flex flex-col justify-between relative z-30">
            <div className="text-white absolut font-bold text-2xl leading-[0.57px] font-karla text-center mx-auto max-w-2xl py-24 md:py-32 px-4 ">
              <h1 className=" text-4xl font-extrabold tracking-tight sm:text-6xl">
                Premium, Fresh Produce from the Heart of Africa
              </h1>
              <p className="mt-6 text-[16px] leading-normal lg:text-lg font-normal lg:leading-8 max-w-xl mx-auto ">
                Explore our diverse selection of farm-fresh agricultural goods,
                sustainably cultivated in the heart of Africa, and experience
                the true essence of quality, taste, and tradition.
              </p>
              <div className="mt-10 flex flex-col lg:flex-row gap-y-4 items-center justify-center gap-x-6 z- ">
                <NavLink
                  to="/products"
                  className="rounded-md bg-green w-[200px] px-[22px] py-[14px] text-sm border border-green font-semibold text-white shadow-sm hover:bg-indigo-500  cursor-pointer"
                >
                  Browse products
                </NavLink>
                <NavLink
                  to="/"
                  className="rounded-md text-sm w-[200px] px-[22px] py-[14px] font-semibold border text-white border-white hover:bg-green hover:bg-opacity-40"
                >
                  Read more
                </NavLink>
              </div>
            </div>

            <div className="w-full py-4 flex 2xl:mt-[10%] justify-start items-center gap-2">
              {items.map((carousel, index) => (
                <div
                  key={index}
                  className={`h-[6px] ${
                    activeElement === index
                      ? "w-12 bg-orange"
                      : "w-6 bg-fadeOrange"
                  } rounded-lg transition-transform cursor-pointer`}
                  onClick={() => switchActiveElement(index)}
                ></div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Hero;

// import "react-responsive-carousel/lib/styles/carousel.min.css";
// import heroOne from "../../assets/images/womenWithBag.png"
// import heroTwo from "../../assets/images/hero_2.png";
// import heroThree from "../../assets/images/hero_3.png";
// import heroFour from "../../assets/images/hero_4.png";
// import heroFive from "../../assets/images/hero_5.png";
// import { NavLink } from "react-router-dom";

// const carouselArr = [
//   {
//     title: "Trusted logistics service provider.",
//     description:
//       "We offer doorstep delivery not only to all states within Nigeria but also to over 250 countries worldwide.",
//     image: heroOne,
//   },
//   {
//     title: "International Shipping",
//     description: "Get a US & UK address",
//     image: heroTwo,
//   },
//   {
//     title: "Air & ocean freight.",
//     description:
//       "Get real time air and ocean freight rates for over 200 countries. Make a booking in few minutes.",
//     image: heroThree,
//   },
//   {
//     title: "Supply chain Management",
//     description:
//       "We will take care of your entire supply chain from freight forwarding/clearing and warehousing to transport logistics.",
//     image: heroFour,
//   },
//   {
//     title: "Courier",
//     description:
//       "Ship doorstep to over 200 countries and 36 states in Nigeria.",
//     image: heroFive,
//   },
// ];

// // const CustomCarousel = styled.div`
// //   @media (min-width: 650px) {
// //     background-image: url(${(props) => props.imageurl});
// //   }
// // `;

// const Hero = () => {
//   const [activeElement, setActiveElement] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setActiveElement((prevActiveElement) =>
//         prevActiveElement < 5 ? prevActiveElement + 1 : 0
//       );
//     }, 2000);

//     return () => clearInterval(interval); // Clear the interval on component unmount
//   }, []);

//   const switchActiveElement = (index) => {
//     setActiveElement(index);
//   };
//   return carouselArr.map((carousel, index) => (
//     <>
//       <div
//         className={`${
//           activeElement === index
//             ? "lg:flex lg:flex-col justify-end "
//             : "hidden"
//         } w-full text-white slide reative min-h-screen  max-h-screen hidden -z-[50] `}
//         key={index}
//       >
//         <img
//           src={carousel.img}
//           alt=""
//           className="w-full h-full absolute left-0 top-0 object-cover"
//         />
//         {/* overlay gradient */}
//         {/* <div className="w-full h-full left-0 top-0 absolute z-20 bg-gradient-to-t from-orange to-blue" /> */}

//         {/* overlay text and tracking begins */}
//         <div className="w-1/2 flex flex-col justify-between pb-8  pl-16 relative z30">
//           <p className="text-white font-bold text-2xl leading-[0.57px] font-raleway">
//             {carousel.name}
//           </p>
//           <div className="mt-6">
//             <img src={carousel.logo} alt="" />
//           </div>
//           <p className="mt-16 max-w-[90%] font-[400] text-[23px] leading-[-0.46px]">
//             {/* {carousel.description} */}
//           </p>

//           <div className="w-full  py-4 flex 2xl:mt-[10%] justify-start items-center gap-2">
//             {carouselArr.map((carousel, index) => (
//               <div
//                 className={`h-[6px] ${
//                   activeElement === index
//                     ? "w-12 bg-orange "
//                     : "w-6 bg-fadeOrange "
//                 } rounded-lg  transition-transform cursor-pointer`}
//                 key={index}
//                 onClick={() => switchActiveElement(index)}
//               ></div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </>
//   ));
// };

// export default Hero;
