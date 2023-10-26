import sustainWoman from "../../assets/images/sustainWoman.png";
import { NavLink } from "react-router-dom";
import { BiCube } from "react-icons/bi";
import { PiMoneyDuotone } from "react-icons/pi";
import { RiPlantLine } from "react-icons/ri";

const features = [
  {
    name: "Education and Training",
    summary:
      "We provide comprehensive educational programs, equipping women and youth with the knowledge and skills needed to thrive in sustainable farming.",
    icon: BiCube,
  },
  {
    name: "Fair Wages and Opportunities",
    summary:
      "We create opportunities for women and youth farmers by offering fair wages and sustainable employment, ensuring their hard work is rewarded justly.",
    icon: PiMoneyDuotone,
  },
  {
    name: "Sustainable Farming Practices",
    summary:
      "We champion eco-friendly farming techniques and responsible sourcing, not just for quality produce, but to preserve our planet and benefit local communities.",
    icon: RiPlantLine,
  },
];

const Approach = () => {
  return (
    <div className="pt-4 mt-10 ">
      <div className="px-[20px] pb-6 lg:px-[45px] xl:px-[100px] lg:py-10 bg-[#F7F9FC] mx-auto ">
        <div className="py-[4rem] text-center max-w-2xl mx-auto ">
          <div className="flex w-[120px] text-center mx-auto py-3 ">
            <span className="text-lemonGreen text-sm uppercase">
              our approach
            </span>
          </div>
          <h1 className="text-greyBlack text-3xl lg:text-5xl font-bold lg:trcking-wider lg:leading-none">
            Empowering The Future of Agriculture
          </h1>
          <div className="flex w-[120px] text-center mx-auto py-3 ">
            <span className="border-2 border-lemonGreen w-full"></span>
          </div>
          <div className="mx-auto max-w-[500px]">
            <p className="text-[#475367] py-3 text-base font-medium  ">
              Our Holistic Approach to Uplifting Women Farmers and Youth Through
              Education, Fair Opportunities, and Sustainable Farming
            </p>
          </div>
        </div>

        <div className="">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.name} className=" pb-2 lg:pb-8">
                <div className="text-center bg-white rounded-lg px-4 md:px-6">
                  <div className=" h-fit lg:h-[18rem] py-6 lg:py-[34px] ">
                    <div className="flex justify-center  ">
                      {feature.icon && (
                        <span className="p-2 bg-[#E9F0EB] rounded-full ">
                          <feature.icon
                            className="w-8 h-8 text-green "
                            aria-hidden="true"
                          />
                        </span>
                      )}
                    </div>
                    <h3 className="pt-4 lg:pt-6 text-[#1D2739] text-[18px] md:text-[20px] font-semibold flex-shrink-0 tracking-tighter tracking-tght">
                      {feature.name}
                    </h3>
                    <p className="mt-5 text-sm text-[#475367] tracking-wider lg:leading-normal font-light">
                      {feature.summary}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div>
        <div className=" mx-auto">
          <div className="py-6 lg:py16">
            <div className="px-4 xl:px-[100px]  bg-white ">
              <div className="flex flex-col gap-6 items-center md:gap[4rem] lg:flex-row lg:justify-between w-full">
                <div className="lg:w-1/2 h-auto justify-center">
                  <img
                    className="w[80%] h-auto md:w[60%] lg:w-full "
                    src={sustainWoman}
                    alt="fruit variety"
                  />
                </div>
                <div className="py-5 lg:w-1/2 ">
                  <div className="">
                    <h1 className=" text-3xl text-[#1D2739] leading-[1.1] lg:tracking-tight font-semibold text-blue lg:text-[40px] mb-2">
                      Supporting Sustainable Growth In Rwanda
                    </h1>
                    <div className="flex justify-start w-[120px] text-left ">
                      <span className="border-2 border-lemonGreen w-full"></span>
                    </div>
                    <div className="py-4 pt-8">
                      <p className="text-base py-4">
                        Agri Food’s overall aim is to increase our farmers’
                        household incomes by 40% by 2025. This is in line with
                        Rwanda’s National Strategy for Transformation – a
                        seven-year plan to lay the foundations for sustainable
                        growth to increase standards of living for the
                        communities we work with.
                      </p>
                      <p className="text-base py-4">
                        AfriFoods is proud to be part of this transformation by
                        developing skills and employment opportunities in the
                        private sector. Our business currently exports over
                        270MT of produce annually. We plan to increase
                        production by 100% over the next three years.
                      </p>
                      <p className="text-base py-4">
                        We have secure and reliable shipping and business
                        partners and are looking to expand our customer base.
                      </p>
                      <p className="text-base py-4">
                        Afri Foods is at a unique moment in Rwanda’s economic
                        and social development. We would love to work with you
                        to achieve a new, brighter future for every Rwandan.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#F7F9FC] py-4 px-4">
        <div className="text-center max-w-[520px] mx-auto py-4 lg:py-8  ">
          <h1 className="text-[#1D2739] text-[20px] lg:text-3xl font-bold ">
            Ready to Experience the Best of African Agriculture?
          </h1>
          <p className="text-[#475367] text-base py-6 max-w-[360px] mx-auto tracking-wider">
            Join Us in Our Mission for Quality, Sustainability, and Freshness
          </p>
          <NavLink
            className="bg-green  hover:bg-lemonGreen rounded-md px-4 py-3 text-white mt-3"
            to="/"
          >
            Get Started
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Approach;
