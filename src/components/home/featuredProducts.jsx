import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { fruits } from "../../utils/data";
import Loading from "../loader";

const categories = [
  {
    name: "All",
  },
  {
    name: "Fruits",
  },
  {
    name: "Vegetables",
  },
  {
    name: "Root Crops",
  },
];

const FeaturedProducts = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  }, []);

  const displayedFruits = fruits
    .filter(
      (fruit) =>
        selectedCategory === "All" || fruit.category === selectedCategory
    )
    .slice(0, 4);

  return (
    <div className="pt- md:mt- bg-[#F7F9FC]">
      <div className="px-[20px] pb-6 lg:px-[45px] xl:px-[100px] lg:py-10 bg- mx-auto">
        <div className="py-6">
          <h2 className="text-2xl lg:text-4xl font-bold text-greyBlack text-center py-3">
            Featured Products
          </h2>
          <div className="flex justify-center mx-auto w-[120px] text-center">
            <span className="border-2 border-lemonGreen w-full"></span>
          </div>
          <div className="flex justify-center list-none max-w-2xl mx-auto py-6">
            {categories.map((category) => (
              <li
                key={category.name}
                className={`border-b text-sm font-semibold px-4 hover:cursor-pointer py-3 ${
                  category.name === selectedCategory
                    ? "text-green border-green"
                    : "border-[#E4E7EC] text-[#344054]"
                }`}
                onClick={() => setSelectedCategory(category.name)}
              >
                {category.name}
              </li>
            ))}
          </div>
        </div>
        <div className="lg:max-w-7xl 2xl:max-w-[1560px] mx-auto px-2 pb-10">
          <div className="flex overflow-x-scroll md:overflow-hidden lg:grid lgrid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-4">
            {displayedFruits.map((fruit) => (
              <Link
                to={`/product/${fruit.name.replace(/\s+/g, "-").toLowerCase()}`}
                key={fruit.name}
                className=" pb-2 lg:py-8 text-left bg-white rounded-lg hover:bg-lemonGreen hover:bg-opacity-40 cursor-pointer "
              >
                <div className="flex justify-center">
                  <div className="w-[192px] flex justify-center">
                    {loading ? (
                      <div className="w-[327px] h-[250px] lg:w-[480px] flex items-center justify-center">
                        <Loading />
                      </div>
                    ) : (
                      <img
                        src={fruit.image}
                        className="w-full h-full text-green"
                        alt={fruit.name}
                      />
                    )}
                  </div>
                </div>
                <div className="px-4">
                  <h3 className="pt-4 lg:pt-6 text-greyBlack text-[18px] md:text-[20px] font-semibold tracking-tighter">
                    {fruit.name}
                  </h3>
                  <div className="flex gap-2 items-end pt-2">
                    <span className="text[#475367] text[20px] fontsemibold text-lemonGreen font-medium text-[16px]">
                      {/* {fruit.price} */}
                      {fruit.category}
                    </span>
                    <span className="text-[#98A2B3] text-[14px] line-through">
                      {/* {fruit.discount} */}
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
        <div className="flex justify-center">
          <NavLink
            to="/products"
            className="bg-green hover:bg-lemonGreen text-white py-3 px-8 rounded-md"
          >
            Browse all products
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProducts;
