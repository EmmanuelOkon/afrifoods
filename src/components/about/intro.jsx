import fruitBasket from "../../assets/images/fruitBasket.png";

const Intro = () => {
  return (
    <>
      <div>
        <div className=" mx-auto">
          <div className="py-6 lg:py16">
            <div className="px-4 xl:px-[100px]  bg-white ">
              <div className="flex flex-col gap-6 items-center md:gap[4rem] lg:flex-row lg:justify-between w-full">
                <div className="py-5 lg:w-1/2">
                  <div className="">
                    <h1 className=" text-3xl text-[#1D2739] leading-[1.1] lg:tracking-tight font-semibold text-blue lg:text-[40px] mb-2">
                      Afri Foods - Rwanda’s Most Innovative Fresh Produce
                      Company
                    </h1>
                    <div className="flex justify-start w-[120px] text-left ">
                      <span className="border-2 border-lemonGreen w-full"></span>
                    </div>
                    <div className="py-4 pt-8">
                      <p className="text-base py-4">
                        At Afrifood, our journey is rooted in a profound love
                        for the rich agricultural heritage of Africa. We are
                        more than a company; we are a passionate community of
                        individuals committed to bringing the very best of
                        African produce to the world.
                      </p>
                      <p className="text-base py-4">
                        From the heart of the continent, we embark on a
                        remarkable mission. Our story is one of growth,
                        resilience, and unwavering dedication to the values that
                        define us. We are proud to share this journey with you,
                        for it's your trust and support that fuels our ambition.
                      </p>
                      <p className="text-base py-4">
                        Welcome to Afrifood, where quality, sustainability, and
                        community engagement intersect to cultivate a better
                        future for all.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="lg:w-1/2 h-auto justify-center">
                  <img
                    className="w[80%] rounded-lg md:rounded-2xl h-auto md:w[60%] lg:w-full lg:h[500px] lg:w[750px] "
                    src={fruitBasket}
                    alt="aboutIntroWoman"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Intro;
