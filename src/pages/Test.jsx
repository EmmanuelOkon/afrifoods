// import React from "react";
// import Carousel from "react-elastic-carousel";
// import { BsArrowRightShort, BsArrowLeftShort } from "react-icons/bs";
// import vegetables from "../assets/images/productCategoriesOne.png";
// import fruits from "../assets/images/productCategoriesTwo.png";
// import rootCrops from "../assets/images/productCategoriesThree.png";
// import { NavLink } from "react-router-dom";

// const products = [
//   {
//     name: "vegetables",
//     image: vegetables,
//   },
//   {
//     name: "fruits",
//     image: fruits,
//   },
//   {
//     name: "root crops",
//     image: rootCrops,
//   },
//   {
//     name: "cereals",
//     image: vegetables,
//   },
//   {
//     name: "legumes",
//     image: fruits,
//   },
//   {
//     name: "spices",
//     image: rootCrops,
//   },
// ];
// const breakPoints = [
//   { width: 1, itemsToShow: 1 },
//   { width: 550, itemsToShow: 2 },
//   { width: 768, itemsToShow: 3 },
// ];

// const Test = () => {

//   const myArrow = ({ type, onClick }) => {
//     const pointer =
//       type === "PREV" ? (
//         <div className="arrow-prev">
//           <BsArrowLeftShort />
//         </div>
//       ) : (
//         <div className="arrow-next">
//           <BsArrowRightShort />
//         </div>
//       );

//     return (
//       <div
//         className="arrowwrapp flex items-center text-2xl bg-lightGrey border-midGrey rounded-full justify-center text-red-900 cursor-pointer hover:bg-lemonGreen h-8 w-8 my-auto "
//         onClick={onClick}
//       >
//         <button className="arrow  ">{pointer}</button>
//       </div>
//     );
//   };

//   return (
//     <>
//       <div className="App">
//         <div className="carousel-wrapper bg-red-200 ">
//           <Carousel
//             breakPoints={breakPoints}
//             renderArrow={myArrow}
//             enableSwipe={true}
//             swipeable={true}
//             itemsToScroll={1}
//             enableMouseSwipe={true}
//             transitionMs={1000}
//             pagination={false}
//             disableArrowsOnEnd
//           >
//             {products.map((product) => (
//               <div className="border-1 surface-border border-round m-2 md:mx-6 lg:mx-10 text-center py5 bg-lightGrey overflow-hidden rounded-md lg:rounded-2xl mx-auto w-[220px] md:w-[300px] ">
//               <div className="bglightGrey overflow-hidden h-[400px] w-fi  max-w[250px]">
//                 <div className="flex flex-col justify-between min-h-full">
//                   <div className="p-4 text-left">
//                     <h3 className="text-2xl uppercase font-bold py-2">
//                       {product.name}
//                     </h3>
//                     <NavLink
//                       to={product.name}
//                       className="border-b-2 border-b-green py-2 text-lg tracking-tight"
//                     >
//                       Shop now
//                     </NavLink>
//                   </div>
//                   <div className="  ">
//                     <img
//                       src={product.image}
//                       className=""
//                       width={400}
//                       height={200}
//                       alt={product.name}
//                     />
//                   </div>
//                 </div>
//               </div>
//             </div>
//             ))}
//           </Carousel>
//         </div>
//       </div>
//       <div className="card max-w-[30rem] md:max-w-6xl mx-auto my-2">
//         <div className="py-6">
//           <h2 className="text-2xl lg:text-4xl font-bold text-greyBlack text-center py-3 ">
//             Product Categories
//           </h2>
//           <div className="flex justify-center mx-auto w-[120px] text-center ">
//             <span className="border-2 border-lemonGreen w-full"></span>
//           </div>
//         </div>
//         <Carousel
//             breakPoints={breakPoints}
//             renderArrow={myArrow}
//             enableSwipe={true}
//             swipeable={true}
//             itemsToScroll={1}
//             enableMouseSwipe={true}
//             transitionMs={1000}
//             pagination={false}
//             disableArrowsOnEnd
//           >
//             {products.map((product) => (
//               <div className="border-1 surface-border border-round m-2 md:mx-6 lg:mx-10 text-center py5 bg-lightGrey overflow-hidden rounded-md lg:rounded-2xl mx-auto w-[220px] md:w-[300px] ">
//               <div className="bglightGrey overflow-hidden h-[400px] w-fi  max-w[250px]">
//                 <div className="flex flex-col justify-between min-h-full">
//                   <div className="p-4 text-left">
//                     <h3 className="text-2xl uppercase font-bold py-2">
//                       {product.name}
//                     </h3>
//                     <NavLink
//                       to={product.name}
//                       className="border-b-2 border-b-green py-2 text-lg tracking-tight"
//                     >
//                       Shop now
//                     </NavLink>
//                   </div>
//                   <div className="  ">
//                     <img
//                       src={product.image}
//                       className=""
//                       width={400}
//                       height={200}
//                       alt={product.name}
//                     />
//                   </div>
//                 </div>
//               </div>
//             </div>
//             ))}
//           </Carousel>
//       </div>
//     </>
//   );
// };

// export default Test;

// import React, { useState } from "react";
// import { products } from "../utils/data";
// import "../test.css";

// export default function Test() {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   const nextSlide = () => {
//     setCurrentIndex((prevIndex) =>
//       prevIndex === products.length - 1 ? 0 : prevIndex + 1
//     );
//   };

//   const prevSlide = () => {
//     setCurrentIndex((prevIndex) =>
//       prevIndex === 0 ? products.length - 1 : prevIndex - 1
//     );
//   };

//   return (
//     <div className="max-w-screen-sm mx-auto my-4">
//       <h2 className="text-2xl font-bold text-gray-700 text-center mb-2">
//         Product Categories
//       </h2>
//       <div className="w-12 h-2 bg-green-500 mx-auto mb-4"></div>
//       <div className="flex items-center justify-between">
//         <button
//           className="bg-white border border-gray-300 rounded-full w-12 h-12 flex items-center justify-center text-2xl text-gray-600 hover:bg-green-500 hover:text-white focus:outline-none"
//           onClick={prevSlide}
//         >
//           &lt;
//         </button>
//         <div className="w-full flex overflow-hidden">
//           {products.map((product, index) => (
//             <div
//               key={index}
//               className={`w-full p-4`}
//               style={{
//                 transform: `translateX(-${currentIndex * 100}%)`,
//                 opacity: index === currentIndex ? 1 : 0,
//               }}
//             >
//               <h3 className="text-2xl font-bold text-gray-700 mb-2 uppercase">
//                 {product.name}
//               </h3>
//               <a
//                 href="/products"
//                 className="text-green-500 text-lg hover:text-green-700 border-b border-green-500 pb-2"
//               >
//                 Shop now
//               </a>
//               <img
//                 src={product.image}
//                 alt={product.name}
//                 className="mt-4 w-full h-48 object-cover rounded-lg"
//               />
//             </div>
//           ))}
//         </div>
//         <button
//           className="bg-white border border-gray-300 rounded-full w-12 h-12 flex items-center justify-center text-2xl text-gray-600 hover:bg-green-500 hover:text-white focus:outline-none"
//           onClick={nextSlide}
//         >
//           &gt;
//         </button>
//       </div>
//     </div>
//   );
// }
