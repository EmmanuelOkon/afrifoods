import { Carousel } from "primereact/carousel";
import vegetables from "../../assets/images/productCategoriesOne.png";
import fruits from "../../assets/images/productCategoriesTwo.png";
import rootCrops from "../../assets/images/productCategoriesThree.png";
import { NavLink } from "react-router-dom";

export default function ProductsCategories() {
  const responsiveOptions = [
    {
      breakpoint: "1199px",
      numVisible: 1,
      numScroll: 1,
    },
    {
      breakpoint: "991px",
      numVisible: 2,
      numScroll: 1,
    },
    {
      breakpoint: "767px",
      numVisible: 1,
      numScroll: 1,
    },
  ];

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

  return (
    <div className="card max-w-[30rem] md:max-w-6xl mx-auto my-2">
      <div className="py-6">
        <h2 className="text-2xl lg:text-4xl font-bold text-greyBlack text-center py-3 ">
          Product Categories
        </h2>
        <div className="flex justify-center mx-auto w-[120px] text-center ">
          <span className="border-2 border-lemonGreen w-full"></span>
        </div>
      </div>
      <Carousel
        value={products}
        numVisible={3}
        numScroll={3}
        responsiveOptions={responsiveOptions}
        autoplayInterval={10000}
        circular
        className="z-0"
        itemTemplate={(product) => (
          <div className="border-1 surface-border border-round m-2 md:mx-6 lg:mx-10 text-center py5 bg-lightGrey overflow-hidden rounded-md lg:rounded-2xl mx-auto w-[220px] md:w-[300px] ">
            <div className="bglightGrey overflow-hidden h-[400px] w-fi  max-w[250px]">
              <div className="flex flex-col justify-between min-h-full">
                <div className="p-4 text-left">
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
                    src={product.image}
                    className=""
                    width={400}
                    height={200}
                    alt={product.name}
                  />
                </div>
              </div>
            </div>
          </div>
        )}
      />
    </div>
  );
}
