import fuerteAvocado from "../../assets/images/products/items/fuerteAvocado.png";
import hassAvocado from "../../assets/images/products/items/hassAvocado.png";
import appleBanana from "../../assets/images/products/items/appleBanana.png";
import pineapple from "../../assets/images/products/items/pineapple.png";
import { NavLink } from "react-router-dom";

const productsFilter = [
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

const features = [
  {
    name: "Fuerte Avocado",
    price: "$40.29",
    discount: "$60.29",
    image: fuerteAvocado,
  },
  {
    name: "Hass Avocado",
    price: "$40.29",
    discount: "$60.29",
    image: hassAvocado,
  },
  {
    name: "Banana",
    price: "$40.29",
    discount: "$60.29",
    image: appleBanana,
  },
  {
    name: "Pineapple",
    price: "$40.29",
    discount: "$60.29",
    image: pineapple,
  },
];

const FeaturedProducts = () => {
  return (
    <div className="pt- md:mt- bg-[#F7F9FC] ">
      <div className="px-[20px] pb-6 lg:px-[45px] xl:px-[100px] lg:py-10 bg- mx-auto ">
        <div className="py-6">
          <h2 className="text-2xl lg:text-4xl font-bold text-greyBlack text-center py-3 ">
            Featured Products
          </h2>
          <div className="flex justify-center mx-auto w-[120px] text-center ">
            <span className="border-2 border-lemonGreen w-full"></span>
          </div>
          <div className="flex justify-center list-none max-w-2xl mx-auto py-6 ">
            {productsFilter.map((product) => (
              <li
                key={product.name}
                className={`border-b text-sm font-semibold px-4 hover:cursor-pointer py-3 ${
                  product.name === "Fruits"
                    ? "text-green border-green"
                    : "border-[#E4E7EC] text-[#344054]"
                }`}
              >
                {product.name}
              </li>
            ))}
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-2 pb-10 ">
          <div className="flex overflow-x-scroll md:overflow-hidden lg:grid lgrid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-4">
            {features.map((feature) => (
              <div
                key={feature.name}
                className=" pb-2 lg:py-8 text-left bg-white  rounded-lg"
              >
                <div className="flex justify-center">
                  <div className="w-[192px] flex justify-center ">
                    <img
                      src={feature.image}
                      className="w-full h-full text-green "
                      alt={feature.name}
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
        </div>
        <div className="flex justify-center">
          <button className="bg-green hover:bg-lemonGreen text-white py-3 px-8 rounded-md">
            <NavLink to="/products">Browse all products</NavLink>
          </button>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProducts;
