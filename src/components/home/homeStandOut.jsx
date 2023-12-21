import widevegetation from "../../assets/images/wideVegetation.png";
import widevegetationMobile from "../../assets/images/wideVegetationMobile.png";
import { FaHandHoldingHeart } from "react-icons/fa";
import { BsGlobe2 } from "react-icons/bs";
import { PiFlowerTulipBold } from "react-icons/pi";
import { SlDiamond } from "react-icons/sl";
import { LazyLoadImage } from "react-lazy-load-image-component";

const standouts = [
  {
    name: "Premium Quality Assurance",
    icon: SlDiamond,
    description:
      "Our produce is sourced from the finest farms in Africa, ensuring that every item you receive meets rigorous quality standards.",
  },
  {
    name: "Global Reach, Local Values",
    icon: BsGlobe2,
    description:
      "We work directly with African farmers, supporting their livelihoods while sharing the bounty of our continent with the world.",
  },
  {
    name: "Sustainability Champion",
    icon: PiFlowerTulipBold,
    description:
      "We adopt eco-friendly farming practices and supply chain solutions that promote environmental conservation and social responsibility.",
  },
  {
    name: "Community Empowerment",
    icon: FaHandHoldingHeart,
    description:
      "By engaging with us, you contribute to the prosperity of African farming communities and help us create a positive impact on the lives of many.",
  },
];

const HomeStandOut = () => {
  return (
    <>
      <div className="py-10 px4 sm:px8 max-w7xl mx-auto">
        <div className="relative overflow-hidden z-10 justify-center items-center w-full hfull lg:h-[620px] py-20 bg-gradient-to-b from-deepGreen via-midGrey to-deepGreen ">
          <div className="hidden absolute inset-0 md:flex justify-center items-center mix-blend-overlay">
            <LazyLoadImage
              className="w-full  object-center h-full md:object-cover"
              sizes="100vw"
              alt="widevegetation"
              src={widevegetation}
              effect="blur"
            />
          </div>
          <div className="absolute inset-0 md:hidden justify-center items-center mix-blend-overlay">
            <LazyLoadImage
              className="w-full h-full object-center object-contain "
              sizes="100vw"
              alt="widevegetationMobile"
              src={widevegetationMobile}
              effect="blur"
            />
          </div>
          <div className="absolut inset0 flex items-center justify-center z-50">
            <div className="z-[89] w-fit">
              <div className="py10">
                <h2 className="text-3xl lg:text-4xl font-bold text-white text-center ">
                  Why Afri Foods Stands Out
                </h2>
                <div className="flex justify-center mx-auto w-[120px] text-center py-2 ">
                  <span className="border-2 border-lemonGreen w-full"></span>
                </div>
                <p className="text-white text-center max-w-[400px] mx-auto py-2 px-2 font-normal ">
                  Discover the Reasons to Partner with Us for Fresh, Quality,
                  and Sustainable Agricultural Products
                </p>
              </div>
              <div className="px-4 lg:max-w-7xl 2xl:max-w-[1560px] mx-auto mt-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {standouts.map((stand) => (
                    <div
                      key={stand.name}
                      className="bg-white flex items-center rounded-md lg:rounded-lg p-3 md:p-5 gap-5"
                    >
                      <div className="flex justify-center">
                        <span className="bg-lemonGreen rounded-full p-2">
                          <stand.icon
                            className="text-white w-7 h-7 "
                            fill="#FFF"
                          />
                        </span>
                      </div>
                      <div>
                        <h3 className="text-base md:text-2xl font-bold py-2 text-greyBlack">
                          {stand.name}
                        </h3>
                        <p className="text-sm md:text-base text-[#475367]">
                          {stand.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeStandOut;
