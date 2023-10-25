import doorstepDelivery from "../../assets/images/doorstepDelivery.png";
import affordableRate from "../../assets/images/affordableRate.png";
import customerService from "../../assets/images/customerService.png";
import expressDelivery from "../../assets/images/expressDelivery.png";
import tracking from "../../assets/images/tracking.png";
import downloadGoogleplay from "../../assets/images/downloadGoogleplay.png";
import phoneMockup from "../../assets/images/phoneMockup.png";

const features = [
  {
    name: "Doorstep Delivery",
    image: doorstepDelivery,
  },
  {
    name: "Affordable Rate",
    image: affordableRate,
  },
  {
    name: "Friendly Customer Service",
    image: customerService,
  },
  {
    name: "Express Delivery",
    image: expressDelivery,
  },
  {
    name: "Live Tracking",
    image: tracking,
  },
];

const SolutionProvider = () => {
  return (
    <>
      <div className="bg-offwhite md:bg-white py-4 lg:py-16 ">
        <div className="px-[20px] lg:px-[45px] xl:px-[100px] md:bg-white bg-offwhite  mx-auto ">
          <div className="xl:grid xl:gridcols-3 xl:gap-8">
            <div className=" text-center font-poppins">
              <h2 className="text-blue font-roboto text-3xl lg:text-[45px] font-bold lg:leading-none tracking-tight">
                The solution provider with services that fits your needs.
              </h2>
              <p className=" text-black pt-3 text-base md:text-lg font-medium sm:text-xl ">
                From personal needs to platform integrations, we are ready to
                work with you.
              </p>
            </div>
          </div>
          <div className="mt-4 md:mt-8 px-8 bg-white  rounded-2xl shadow-2xl ">
            <div className="grid lg:grid-cols-5 divide-y-[2px] lg:divide-y-0 lg:divide-x-[2px] divide-[#C1C1C1] py-10 ">
              {features.map((feature) => (
                <div key={feature.name} className="pt-6 pb-2 ">
                  <div className="flex justify-center items-center lg:text-left text-blue rounded-lg px-4 md:px6">
                    <div className=" py6 lg:py[34px] ">
                      <img
                        src={feature.image}
                        alt={feature.name}
                        className="flex justify-center w-1/2 mx-auto lg:h-[75px] lg:w-[75px] drop-shadow-md "
                      />
                      <h3 className="pt-6 font-poppins text-[20px] font-semibold tracking-tight">
                        {feature.name}
                      </h3>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="hidden md:flex mt-10 px-[20px] items-center lg:px-[45px] xl:px-[100px] bg-orange w-full h-[400px]  mx-auto ">
        <div className="w-1/2 flex flex-col gap-8">
          <h1 className="text-white font-roboto font-bold text-3xl lg:text-4xl tracking-wider">
            SHIPA, the app that house major international and local shipping
            companies.
          </h1>
          <a href="/">
            <img src={downloadGoogleplay} alt="Download on Google Play" />
          </a>
        </div>

        <div className="w-1/2 flex justify-center">
          <img className="w-2/3" src={phoneMockup} alt="Phone" />
        </div>
      </div>
    </>
  );
};

export default SolutionProvider;
