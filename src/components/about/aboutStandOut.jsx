import widevegetation from "../../assets/images/wideVegetation.png";
import widevegetationMobile from "../../assets/images/wideVegetationMobile.png";
import { FaHandHoldingHeart } from "react-icons/fa";
import { BsGlobe2 } from "react-icons/bs";
import { PiFlowerTulipBold } from "react-icons/pi";
import { SlDiamond } from "react-icons/sl";
import { LazyLoadImage } from "react-lazy-load-image-component";

const standouts = [
  {
    name: "Integrity",
    icon: SlDiamond,
    description:
      "Integrity is the cornerstone of our commitment. We uphold the promise to deliver products of the highest quality, ensuring that every product you receive reflects our unwavering dedication to honesty and trustworthiness",
  },
  {
    name: "Communication",
    icon: BsGlobe2,
    description:
      "Communication is not just a practice; it's a commitment. We prioritize real-time, proactive communications, so you are always informed and connected as we nurture a seamless and transparent experience.",
  },
  {
    name: "Relationships",
    icon: PiFlowerTulipBold,
    description:
      "We believe in the power of enduring relationships. Our aspiration is to build long-term partnerships with our clients and business associates, grounded in mutual respect, shared goals, and trust.",
  },
  {
    name: "Impact",
    icon: FaHandHoldingHeart,
    description:
      "Our purpose extends beyond our products. We are driven to create a real impact in the lives of our farmers. By ensuring fair wages and sustainable practices, we work to improve their livelihoods and empower the communities we serve.",
  },
];

const AboutStandOut = () => {
  return (
    <>
      <div className="py-10 px4 sm:px8 max-w7xl mx-auto">
        <div className="relative overflow-hidden z-10 justify-center items-center w-full h-full lg:h-[750px] py-20 bg-gradient-to-b from-deepGreen via-midGrey to-deepGreen ">
          <div className="hidden absolute inset-0 md:flex justify-center items-center mix-blend-overlay">
            <LazyLoadImage
              className="w-full object-center h-full md:object-cover"
              sizes="100vw"
              alt="widevegetation"
              src={widevegetation}
              effect="blur"
            />
          </div>
          <div className="absolute inset-0 flex md:hidden justify-center items-center mix-blend-overlay">
            <LazyLoadImage
              className="w-full h-full object-center hscreen object-cover"
              sizes="100vw"
              alt="widevegetationMobile"
              src={widevegetationMobile}
              effect="blur"
            />
          </div>
          <div className="absolut inset0 flex items-center justify-center z-50">
            <div className="z-[100] w-fit">
              <div className="py10">
                <div className="flex w-[120px] text-center mx-auto py-3 ">
                  <span className="text-lemonGreen text-sm uppercase">
                    our values
                  </span>
                </div>
                <h2 className="text-3xl lg:text-4xl font-bold text-white text-center ">
                  Why Afrifood Stands Out
                </h2>
                <div className="flex justify-center mx-auto w-[120px] text-center py-2 ">
                  <span className="border-2 border-lemonGreen w-full"></span>
                </div>
                <p className="text-white text-center max-w-[400px] mx-auto py-2 px-2 ">
                  Discover the Reasons to Partner with Us for Fresh, Quality,
                  and Sustainable Agricultural Products
                </p>
              </div>
              <div className="px-4 max-w-7xl mx-auto mt-10">
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

export default AboutStandOut;
