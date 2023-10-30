import React, { useEffect, useState } from "react";
import fuerteAvocado from "../../assets/images/products/items/fuerteAvocado.png";
import hassAvocado from "../../assets/images/products/items/hassAvocado.png";
import appleBanana from "../../assets/images/products/items/appleBanana.png";
import pineapple from "../../assets/images/products/items/pineapple.png";
import yellowPassion from "../../assets/images/products/items/yellowPassionFruit.png";
import rosePassion from "../../assets/images/products/items/rosePassionFruit.png";
import bitterLemon from "../../assets/images/products/items/bitterLemonFruit.png";
import redPepper from "../../assets/images/products/items/redPepper.png";
import longRedPepper from "../../assets/images/products/items/longRedPepper.png";
import gardenEgg from "../../assets/images/products/items/gardenEgg.png";
import plantain from "../../assets/images/products/items/plantain.png";
import carrot from "../../assets/images/products/items/carrot.png";
import { BsFillGridFill } from "react-icons/bs";
import { LuListFilter, LuChevronsUpDown } from "react-icons/lu";
import { FiList, FiChevronDown } from "react-icons/fi";
import { IoGridOutline } from "react-icons/io5";
import { TbShoppingCartPlus } from "react-icons/tb";
import { AiOutlineHeart } from "react-icons/ai";
import { LazyLoadImage } from "react-lazy-load-image-component";
import HeadCategories from "./headCategories";

const fruits = [
  {
    id: 1,
    name: "Fuerte Avocado",
    image: fuerteAvocado,
    category: "Fruits",
    price: "$40.29",
    discount: "$60.29",
    description:
      "Fuerte avocado, or Persea americana 'Fuerte,' is a popular and delicious avocado variety known for its smooth, pear-shaped fruit. This avocado cultivar is native to Central America and is widely cultivated in various parts of the world with suitable climates",
    cartAdd: TbShoppingCartPlus,
    wishlist: AiOutlineHeart,
  },
  {
    id: 2,
    name: "Hass Avocado",
    image: hassAvocado,
    category: "Fruits",
    price: "$40.29",
    discount: "$60.29",
    description:
      "The Hass avocado is one of the most well-known and widely cultivated avocado varieties worldwide. It was first discovered and developed by a California postman named Rudolph Hass in the 1920s, and it has since become a staple in the world of avocados. Hass avocados are easily recognizable by their distinctive pebbly-textured, purplish-black skin.",
    cartAdd: TbShoppingCartPlus,
    wishlist: AiOutlineHeart,
  },
  {
    id: 3,
    name: "Apple Banana",
    image: appleBanana,
    category: "Fruits",
    price: "$40.29",
    discount: "$60.29",
    description:
      "The apple banana, also known as the Manzano banana or the Apple Cultivar, is a distinct banana variety characterized by its small size and apple-like flavor. Its creamy, sweet flesh and unique taste make it a favorite among banana enthusiasts. ",
    cartAdd: TbShoppingCartPlus,
    wishlist: AiOutlineHeart,
  },
  {
    id: 4,
    name: "Pineapple",
    image: pineapple,
    category: "Fruits",
    price: "$40.29",
    discount: "$60.29",
    description:
      "Pineapple is a tropical fruit renowned for its sweet and tangy flavor. It is characterized by its spiky, rough skin and vibrant yellow or orange flesh. Pineapples are known for their juicy, succulent texture and a refreshing taste that strikes a perfect balance between sweetness and acidity.",
    cartAdd: TbShoppingCartPlus,
    wishlist: AiOutlineHeart,
  },
  {
    id: 5,
    name: "Yellow Passion Fruit",
    image: yellowPassion,
    category: "Fruits",
    price: "$40.29",
    discount: "$60.29",
    description:
      "Yellow passionfruit, scientifically known as Passiflora edulis f. flavicarpa, is a tropical fruit celebrated for its aromatic, sweet-tart taste and vibrant yellow skin. This fruit is slightly larger than its purple-skinned counterpart and is filled with juicy, seed-studded pulp. The flavor of yellow passionfruit is a tantalizing blend of sweet and tangy, with a tropical, floral undertone.",
    cartAdd: TbShoppingCartPlus,
    wishlist: AiOutlineHeart,
  },
  {
    id: 6,
    name: "Rose Passion Fruit",
    image: rosePassion,
    category: "Fruits",
    price: "$40.29",
    discount: "$60.29",
    description: `"Rose passionfruit," also known as "Passiflora ligularis" or "sweet granadilla," is a captivating tropical fruit with a unique appearance and delightful taste. This fruit is named "rose passionfruit" due to its rosy or pale pink outer skin. The flesh inside is translucent and dotted with black seeds, offering a visually striking contrast.`,
    cartAdd: TbShoppingCartPlus,
    wishlist: AiOutlineHeart,
  },
  {
    id: 7,
    name: "Bitter Lemon Fruit",
    image: bitterLemon,
    category: "Fruits",
    price: "$40.29",
    discount: "$60.29",
    description: `Bitter lemon, also known as "Citrus limon," is a citrus fruit characterized by its distinctive taste, which is more tart and bitter than that of the common lemon. The fruit typically has a bright yellow or greenish-yellow color, and its peel is rough and textured.`,
    cartAdd: TbShoppingCartPlus,
    wishlist: AiOutlineHeart,
  },
  {
    id: 8,
    name: "Red Pepper",
    image: redPepper,
    category: "Vegetables",
    price: "$40.29",
    discount: "$60.29",
    cartAdd: TbShoppingCartPlus,
    wishlist: AiOutlineHeart,
  },
  {
    id: 9,
    name: "Long Red Pepper",
    image: longRedPepper,
    category: "Vegetables",
    price: "$40.29",
    discount: "$60.29",
    cartAdd: TbShoppingCartPlus,
    wishlist: AiOutlineHeart,
  },
  {
    id: 10,
    name: "Garden Egg",
    image: gardenEgg,
    category: "Vegetables",
    price: "$40.29",
    discount: "$60.29",
    cartAdd: TbShoppingCartPlus,
    wishlist: AiOutlineHeart,
  },
  {
    id: 11,
    name: "Plantain",
    image: plantain,
    category: "Vegetables",
    price: "$40.29",
    discount: "$60.29",
  },
  {
    id: 12,
    name: "Carrot",
    image: carrot,
    category: "Root Crops",
    price: "$40.29",
    discount: "$60.29",
  },
];

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
          <div className="py-6">
            <div className="block md:flex items-center justify-between px-2 py-4 border-b ">
              <div className="text-center md:text-left py-3">
                <span>Showing 1 - 12 of 20 results</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="hidden lg:flex items-center gap-3 text-[18px] border border-[#D0D5DD] p-2 rounded-md ">
                  {isGrid ? (
                    <BsFillGridFill
                      className="cursor-pointer text-green h-6 w-6"
                      onClick={toggleView}
                    />
                  ) : (
                    <IoGridOutline
                      className="cursor-pointer text-[#98A2B3] h-6 w-6"
                      onClick={toggleView}
                    />
                  )}

                  <FiList
                    className={` cursor-pointer h-6 w-6 ${
                      !isGrid ? "text-green font-bold" : "text-[#98A2B3]"
                    }`}
                    // stroke="6"
                    onClick={toggleView}
                  />
                </div>
                <div className="flex items-center gap-3 border border-[#D0D5DD] p-2 rounded-md">
                  <LuListFilter className="cursor-pointer text-[#344054] h-6 w-6 " />
                  <div className="flex items-center">
                    <span className="text-[#344054] text-sm cursor-pointer ">
                      All Season
                    </span>
                    <FiChevronDown className="text-[#667185] cursor-pointer h-6 w-6 " />
                  </div>
                </div>
                <div className="flex items-center gap-3 border border-[#D0D5DD] p-2 rounded-md">
                  <LuChevronsUpDown className="h-6 w-6 text-[#344054] " />
                  <div className="flex items-center">
                    <span className="text-[#344054] text-sm cursor-pointer ">
                      Default sorting
                    </span>
                    <FiChevronDown className="h-6 w-6 cursor-pointer text-[#667185]" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="max-w-7xl mx-auto px-2 pb-10 ">
            {isGrid ? (
              <div className="grid  grid-cols-1 lgrid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-4">
                {filteredProducts.map((feature) => (
                  <div
                    key={feature.name}
                    className=" pb-2 lg:py-8 text-left bg-[#F7F9FC]  rounded-lg"
                  >
                    <div className="flex justify-center">
                      <div className="w-[192px] flex justify-center ">
                        <LazyLoadImage
                          src={feature.image}
                          className="w-full h-full text-green "
                          alt={feature.name}
                          effect="blur"
                        />
                      </div>
                    </div>
                    <div className="px-4">
                      <h3 className="pt-4 lg:pt-6 text-greyBlack text-[18px] md:text-[20px] font-semibold tracking-tighter">
                        {feature.name}
                      </h3>
                      <div className="flex gap-2 items-end pt-2">
                        <span className="text-[#475367] text-[20px] font-semibold">
                          {feature.price}
                        </span>
                        <span className="text-[#98A2B3] text-[14px] line-through">
                          {feature.discount}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <ul className="">
                {filteredProducts.map((feature) => (
                  <li
                    key={feature.name}
                    className="pb-2 lg:py-8 text-left my-3 bg-[#F7F9FC] rounded-lg "
                  >
                    <div className="flex flex-col md:flex-row gap-3 px-2 md:px-4">
                      <div className="w-[25%] flex ">
                        <LazyLoadImage
                          src={feature.image}
                          className="w-full h-full text-green "
                          alt={feature.name}
                          effect="blur"
                        />
                      </div>
                      <div className="w-[70%] ">
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
                              />{" "}
                              Add to cart
                            </button>
                          )}

                          {feature.wishlist && (
                            <button className="p-2 px-4 border-2 border-green rounded-lg flex items-center hover:bg-white text-[#475467] ">
                              <feature.wishlist
                                className="w-8 h-8 p-1 text-green "
                                aria-hidden="true"
                              />{" "}
                              Save to wishlist
                            </button>
                          )}
                        </div>
                      </div>
                    </div>
                  </li>
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
