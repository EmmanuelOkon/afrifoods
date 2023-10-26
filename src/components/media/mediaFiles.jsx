import mediaYoutubeOne from "../../assets/images/mediaYoutubeOne.png";

function MediaFiles() {
  return (
    <div className="px-[20px]  xl:px-[100px] md:bg-white mx-auto">
      <div className="py-[3rem] sm:py-6 lg:py-10">
        <div className="pb-[4rem] text-center max-w-2xl mx-auto ">
          <h1 className="text-greyBlack text-3xl lg:text-5xl font-bold lg:trcking-wider lg:leading-none">
            Discover Our Latest Stories, News, and Media Coverage
          </h1>
          <div className="flex w-[120px] text-center mx-auto py-3 ">
            <span className="border-2 border-lemonGreen w-full"></span>
          </div>
          <div className="mx-auto max-w-[500px]">
            <p className="text-[#475367] pt-3 text-base font-medium  ">
              Stay Informed and Engaged with the Latest Updates, Insights, and
              Press Releases from Afrifood
            </p>
          </div>
        </div>
        <div>
          <div className=" mx-auto">
            <div className="py-6 lg:py16">
              <div className="px-4 xl:px-100px]  bg-white ">
                <div className="flex flex-col gap-6 items-center md:gap[4rem] lg:flex-row lg:justify-between w-full">
                  <div className="lg:w-1/2 h-auto justify-center">
                    <img
                      className="w[80%] h-auto md:w[60%] lg:w-full hover:cursor-pointer "
                      src={mediaYoutubeOne}
                      alt="fruit variety"
                    />
                  </div>
                  <div className="py-5 lg:w-1/2 ">
                    <div className="">
                      <h1 className=" text-3xl text-[#1D2739] leading-[1.1] lg:tracking-tight font-semibold text-blue lg:text-[40px] mb-2">
                        How To Export To New Markets | How To Grow Your
                        Horticulture Business, 2021
                      </h1>
                      <div className="flex justify-start w-[120px] text-left ">
                        <span className="border-2 border-lemonGreen w-full"></span>
                      </div>
                      <div className="py-4 pt-8">
                        <p className="text-base py-4">
                          The 60X Business Show, one-on-one conversation with
                          Sakina Usengimana, CEO and Founder of Afri Foods Ltd.
                        </p>
                        <p className="text-base py-4">
                          Today we have the CEO and founder of Afri Foods, which
                          is a horticulture export company of fresh foods. They
                          export banana, pineapple, chillies and other products
                          to the EU and Middle Eastern markets. Welcome, Sakina
                          Usengimana.
                        </p>
                        <button className="border-[1.5px] border-green text-white rounded-md py-3 w-[150px] text-base font-semibold bg-green hover:bg-white hover:text-green ">
                          Watch Video
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="pb-[4rem] text-center max-w-2xl mx-auto ">
              <h1 className="text-greyBlack text-3xl lg:text-5xl font-bold lg:trcking-wider lg:leading-none">
                All Articles
              </h1>
              <div className="flex w-[120px] text-center mx-auto py-3 ">
                <span className="border-2 border-lemonGreen w-full"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MediaFiles;
