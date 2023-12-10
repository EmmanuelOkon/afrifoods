import { NavLink } from "react-router-dom";
import aboutFutureBright from "../../assets/images/aboutFutureBright.png";
import aboutOurTeam from "../../assets/images/aboutOurTeam.png";
import { LazyLoadImage } from "react-lazy-load-image-component";

const FutureBright = () => {
  return (
    <div className="pt- ">
      <div className="mx-auto lg:max-w-7xl 2xl:max-w-[1560px] px-2">
        <div className="">
          <div className="py-6 lg:py16">
            <div className="px-4 xl:px-[100px]  bg-white ">
              <div className="flex flex-col gap-6 items-center md:gap[4rem] lg:flex-row lg:justify-between w-full">
                <div className="pt-5 lg:py-5 lg:w-1/2 ">
                  <div className="">
                    <h1 className=" text-3xl text-[#1D2739] leading-[1.1] lg:tracking-tight font-semibold text-blue lg:text-[40px] mb-2">
                      The Future Is Bright For Afri Foods
                    </h1>
                    <div className="flex justify-start w-[120px] text-left ">
                      <span className="border-2 border-lemonGreen w-full"></span>
                    </div>
                    <div className="py- p8">
                      <p className="text-base py-4">
                        In 2021-22, Afri Foods is moving into a new phase of
                        growth and expansion. From an initial output of 400kg,
                        we now produce 300 tonnes a year, most of which is
                        exported to the Middle East and Europe.
                      </p>
                      <p className="text-base py-4">
                        Our projections also show that we can increase our
                        output by 100% over the next three years. We have
                        established reliable shipping routes and partners and
                        are also looking for new customers.
                      </p>
                      <p className="text-base py-4">
                        We also have big news that is a game changer for Afri
                        Foods.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="lg:w-1/2 h-auto justify-center rounded-lg overflow-hidden">
                  <LazyLoadImage
                    className="w[80%] h-auto md:w[60%] lg:w-full"
                    src={aboutFutureBright}
                    alt="fruit variety"
                    effect="blur"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="pt-10 ">
          <div className="py-6 lg:py16">
            <div className="px-4 xl:px-[100px]  bg-white ">
              <div className="flex flex-col-reverse md:flex-col gap-6 items-center md:gap[4rem] lg:flex-row lg:justify-between w-full">
                <div className="lg:w-1/2 h-auto rounded-lg justify-center overflow-hidden">
                  <LazyLoadImage
                    className="w[80%] h-auto md:w[60%] lg:w-full"
                    src={aboutOurTeam}
                    alt="fruit variety"
                    effect="blur"
                  />
                </div>
                <div className="pt-5 lg:py-5 lg:w-1/2 ">
                  <div className="">
                    <h1 className=" text-3xl text-[#1D2739] leading-[1.1] lg:tracking-tight font-semibold text-blue lg:text-[40px] mb-2">
                      Our Team
                    </h1>
                    <div className="flex justify-start w-[120px] text-left ">
                      <span className="border-2 border-lemonGreen w-full"></span>
                    </div>
                    <div className="py- p8">
                      <p className="text-base py-4">
                        Sakina has hired 10 permanent staff, including six
                        women, to work full time at Afri Foods. As well, there’s
                        a larger team of casual staff, 90% of whom are women.
                      </p>
                      <p className="text-base py-4">
                        Afri Foods is already a recognized brand in the Rwandan
                        export market for our Habanero and bird’s eye chillies
                        and Hass avocados. Now, we are branching into other
                        produce such as passionfruit, bitter lemon, eggplant,
                        plantain, pineapple, and apple banana.
                      </p>
                      <p className="text-base py-4">
                        Moreover, we are developing chilli powder from our
                        Rwandan bird’s eye chilli and looking into processing
                        options to add value and reduce harvest losses.
                      </p>
                      <p className="text-base py-4">
                        Sakina also attends exhibitions nationally and
                        internationally, giving Afri Foods exposure to new
                        clients, markets, and other experts.
                      </p>
                      <p className="text-base py-4">
                        We are very proud that Afri Foods is one of Rwanda’s
                        most innovative and exciting new agribusinesses.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white pb-8 py-4 px-4">
        <div className="text-center max-w-[520px] mx-auto py-4 lg:py-8  ">
          <h1 className="text-[#1D2739] text-[20px] lg:text-3xl font-bold ">
            Ready to Experience the Best of African Agriculture?
          </h1>
          <p className="text-[#475367] text-base py-6 max-w-[360px] mx-auto tracking-wider">
            Join Us in Our Mission for Quality, Sustainability, and Freshness
          </p>
          <NavLink
            className="bg-green  hover:bg-lemonGreen rounded-md px-4 py-3 text-white mt-3"
            to="/products"
          >
            Get Started
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default FutureBright;
