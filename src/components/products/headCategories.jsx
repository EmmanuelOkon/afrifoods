import categoryAll from "../../assets/images/products/productCategoryAll.png";
import categoryVegetable from "../../assets/images/products/productCategoryVegetable.png";
import categoryFruits from "../../assets/images/products/productCategoryFruits.png";
import categoryRootCrops from "../../assets/images/products/productCategoryRootCrops.png";

const features = [
  {
    name: "All Products",
    image: categoryAll,
    backgroundColor: "#F0F2F5",
  },
  {
    name: "Vegetables",
    image: categoryVegetable,
    backgroundColor: "#BAD1C0",
  },
  {
    name: "Fruits",
    image: categoryFruits,
    backgroundColor: "#E8F2D9",
  },
  {
    name: "Root Crops",
    image: categoryRootCrops,
    backgroundColor: "#FEF6E7",
  },
];

const HeadCategories = ({ categories, setCategories }) => {
  return (
    <div className="pt- md:mt- ">
      <div className="px-[20px] pb-6 lg:px-[45px] xl:px-[100px] lg:py-10 bg-white mx-auto ">
        <div className="py-[1.5rem] text-center max-w-2xl mx-auto ">
          <div className="flex w-[270px] justify-center mx-auto py-3 ">
            <span className="text-lemonGreen text-sm uppercase tracking-wider ">
              PREMIUM RWANDAN FRESH PRODUCE
            </span>
          </div>
          <h1 className="text-greyBlack text-3xl lg:text-5xl md:w-[580px] mx-auto font-bold lg:trcking-wider lg:leading-none">
            Explore Our Fresh Agricultural Products
          </h1>
          <div className="flex w-[120px] text-center mx-auto py-3 ">
            <span className="border-2 border-lemonGreen w-full"></span>
          </div>

        </div>
      </div>
      <div className="lg:max-w-7xl 2xl:max-w-[1560px] mx-auto px-2 ">
        <div className="flex overflow-x-auto md: lg:grid lgrid-cols-2 gap-3 space-x- sm:grid-cols-3 lg:grid-cols-4">
          {features.map((feature) => (
            <div key={feature.name} className="pb-2 lg:pb-8 flex flex-col items-center">
              <div
                onClick={() => setCategories(feature.name)}
                className={`bg-white drop-shadowmd rounded-full h-[150px] w-[150px]  md:h-[282px] md:w-[282px] overflow-hidden cursor-pointer ${feature.name === categories
                    ? "border-4 md:border-8 border-green shadowlg md:drop-shadow2xl"
                    : ""
                  }`}
              >
                <div
                  className="h-full "
                  style={{ backgroundColor: feature.backgroundColor }}
                >
                  <img
                    src={feature.image}
                    className="w-full h-full text-green hover:scale-110 transition-all duration-500 ease-in-out "
                    alt={feature.name}
                  />
                </div>
              </div>
              <h3 className="pt-4 lg:pt-6 text-[#1D2739] text-[18px] md:text-[20px] font-semibold flex-shrin tracking-tighter">
                {feature.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeadCategories;
