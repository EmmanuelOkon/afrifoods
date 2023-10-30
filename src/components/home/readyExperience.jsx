import readyExperience from "../../assets/images/readyExperience.png";
// import widevegetationMobile from "../../assets/images/wideVegetationMobile.png";

import { NavLink } from "react-router-dom";

const ReadyExperience = () => {
  return (
    <>
      <div className="py-10 px4 sm:px8 max-w7xl mx-auto">
        <div className="relative overflow-hidden z-10 justify-center items-center w-full h-[40vh] lg:h-[620px] py-20 bg-gradient-to-b from-deepGreen via-midGrey to-deepGreen ">
          <div className="absolute  inset-0 md:flex justify-center items-center mix-blend-overlay">
            <img
              className="w-full object-center h-[40vh] md:h-full md:object-cover overflowhidden"
              sizes="100vw"
              alt="widevegetation"
              src={readyExperience}
            />
          </div>

          <div className="absolute inset-0 flex items-center justify-center z-50">
            <div className="z-[100] w-fit">
              <div className=" pb-8 py-4 px-4">
                <div className="text-center max-w-[520px] mx-auto py-4 lg:py-8  ">
                  <h1 className="text-white text-[20px] lg:text-3xl font-bold ">
                    Ready to Experience the Best of African Agriculture?
                  </h1>
                  <p className="text-white text-base py-6 max-w-[360px] mx-auto tracking-wider">
                    Join Us in Our Mission for Quality, Sustainability, and
                    Freshness
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
          </div>
        </div>
      </div>
    </>
  );
};

export default ReadyExperience;
