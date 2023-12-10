import React, { useEffect, useState } from "react";
import { BsFillGridFill } from "react-icons/bs";
import { LuListFilter, LuChevronsUpDown } from "react-icons/lu";
import { FiList, FiChevronDown } from "react-icons/fi";
import { IoGridOutline } from "react-icons/io5";
import { LazyLoadImage } from "react-lazy-load-image-component";
import HeadCategories from "./headCategories";
import { Link } from "react-router-dom";
import { fruits } from "../../utils/data";

const Fruits = () => {
  const [isGrid, setIsGrid] = useState(true);
  const [allProducts, setAllProducts] = useState(fruits);
  const [categories, setCategories] = useState("All Products");

  const filteredProducts =
    categories === "All Products"
      ? allProducts
      : allProducts.filter((product) => product.category === categories);

  useEffect(() => {
    if (categories) {
      setAllProducts(fruits);
    }
  }, [categories]);

  const toggleView = () => {
    setIsGrid(!isGrid);
  };

  return (
    <>
      <HeadCategories categories={categories} setCategories={setCategories} />
      <div className="pt- md:mt- bg-white ">
        <div className="px-[20px] pb-6 lg:px-[45px] xl:px-[100px] lg:py-10 bg- mx-auto ">
          <div className="lg:max-w-7xl 2xl:max-w-[1560px] mx-auto px-2 py-6">
            <div className="block md:flex items-center justify-between lg:px-2 py-4 border-b ">
              <div className="text-center md:text-left py-3">
                <span>Showing 1 - 12 of 20 results</span>
              </div>
              <div className="flex items-center gap-3 justify-between">
                <div className="hidden lg:flex items-center gap-3 text-[18px] border border-[#D0D5DD] p-2 rounded-md ">
                  {isGrid ? (
                    <BsFillGridFill
                      className="cursor-pointer text-green  w-4 h-4 md:h-6 md:w-6 "
                      onClick={toggleView}
                    />
                  ) : (
                    <IoGridOutline
                      className="cursor-pointer text-[#98A2B3]  w-4 h-4 md:h-6 md:w-6 "
                      onClick={toggleView}
                    />
                  )}

                  <FiList
                    className={`cursor-pointer h-6 w-6 ${!isGrid ? "text-green font-bold" : "text-[#98A2B3]"
                      }`}
                    onClick={toggleView}
                  />
                </div>
                <div className="flex items-center gap-3 border border-[#D0D5DD] p-2 rounded-md">
                  <LuListFilter className="cursor-pointer text-[#344054] w-4 h-4 md:h-6 md:w-6 " />
                  <div className="flex items-center">
                    <span className="text-[#344054] text-sm cursor-pointer flex-shrink-0 ">
                      All Season
                    </span>
                    <FiChevronDown className="text-[#667185] cursor-pointer w-4 h-4 md:h-6 md:w-6  " />
                  </div>
                </div>
                <div className="flex items-center gap-3 border border-[#D0D5DD] p-2 rounded-md">
                  <LuChevronsUpDown className=" w-4 h-4 md:h-6 md:w-6  text-[#344054] " />
                  <div className="flex items-center">
                    <span className="text-[#344054] text-sm cursor-pointer ">
                      Default sorting
                    </span>
                    <FiChevronDown className=" w-4 h-4 md:h-6 md:w-6  cursor-pointer text-[#667185]" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:max-w-7xl 2xl:max-w-[1560px] mx-auto px-2 pb-10 ">
            {isGrid ? (
              <div className="grid grid-cols-1 lgrid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-4">
                {filteredProducts.map((feature) => (
                  <Link
                    to={`/product/${feature.name
                      .replace(/\s+/g, "-")
                      .toLowerCase()}`}
                    key={feature.name}
                    className=" pb-2 lg:py-8 flex flex-col justify-end bg-[#F7F9FC] rounded-lg hover:bg-lemonGreen hover:bg-opacity-40  cursor-pointer "
                  >
                    <div className="flex justify-center hover:scale-110 transition-all delay-200 ease-in-out ">
                      <div className="w-[192px] flex justify-center ">
                        <LazyLoadImage
                          src={feature.image}
                          className="w-full h-full text-green "
                          alt={feature.name}
                          effect="blur"
                        />
                      </div>
                    </div>
                    <div className="px-4 ">
                      <span className="text-lemonGreen">
                        {feature.category}
                      </span>
                      <h3 className="pt-2 lg:pt4 text-greyBlack text-[18px] md:text-[20px] font-semibold tracking-tighter">
                        {feature.name}
                      </h3>
                      <div className="flex gap-2 items-end pt-2">
                        <span className="text-[#475367] text-[20px] font-semibold">
                          {/* {feature.price} */}
                        </span>
                        <span className="text-[#98A2B3] text-[14px] line-through">
                          {/* {feature.discount} */}
                        </span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            ) : (
              <ul className="">
                {filteredProducts.map((feature) => (
                  <Link
                    to={`/product/${feature.name
                      .replace(/\s+/g, "-")
                      .toLowerCase()}`}
                    key={feature.name}
                    className=" pb-2 lg:py-8 text-left "
                  >
                    <div className="flex flex-col my-10 md:flex-row gap-10 px-2 md:px-4 bg-[#F7F9FC] rounded-lg hover:bg-lemonGreen hover:bg-opacity-40  cursor-pointer ">
                      <div className="w-[25%] flex ">
                        <LazyLoadImage
                          src={feature.image}
                          className="w-full h-full text-green "
                          alt={feature.name}
                          effect="blur"
                        />
                      </div>
                      <div className="w-[70%] py-4 ">
                        <span className="text-lemonGreen">
                          {feature.category}
                        </span>
                        <h3 className="pt-4 lg:pt-6 text-greyBlack text-[18px] md:text-[20px] font-semibold tracking-tighter">
                          {feature.name}
                        </h3>
                        <div className="fex gap-2 items-end pt-2">
                          <p className="py-3">{feature.description}</p>
                          <span className="text-[#475367] text-[20px] font-semibold">
                            {feature.price}
                          </span>
                          <span className="text-[#98A2B3] text-[14px] line-through">
                            {feature.discount}
                          </span>
                        </div>
                        <div className="flex items-center gap-3 pt-2">
                          {feature.cartAdd && (
                            <button className="p-2 px-4 bg-green text-white rounded-lg flex items-center hover:bg-lemonGreen  ">
                              <feature.cartAdd
                                className="w-8 h-8 p-1 "
                                aria-hidden="true"
                              />
                              Add to cart
                            </button>
                          )}
                          {feature.wishlist && (
                            <button className="p-2 px-4 border-2 border-green rounded-lg flex items-center hover:bg-white text-[#475467] ">
                              <feature.wishlist
                                className="w-8 h-8 p-1 text-green "
                                aria-hidden="true"
                              />
                              Save to wishlist
                            </button>
                          )}
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Fruits;
