import cultivateSuccessImage from "../../assets/images/cultivateSuccessTwo.png";
import { LazyLoadImage } from "react-lazy-load-image-component";

const successData = [
  {
    count: "500+",
    title: "Farmers",
    description:
      "Empowered Over 500 Local Farmers with Fair Trade Practices, Promoting Sustainable Agriculture.",
  },
  {
    count: "30+",
    title: "Products",
    description:
      "Our Diverse Product Range Features More Than 30 Fresh Agricultural Goods.",
  },
  {
    count: "10+",
    title: "Countries",
    description:
      "We've Expanded Our Reach to Over 10 Countries, Sharing the Bounty of Our Farms with the Global Community",
  },
  {
    count: "7+",
    title: "Years of Experience",
    description:
      "With a Rich Legacy of over 7 Years, We Bring Expertise to Every Aspect of Farming and Exporting.",
  },
];

function CultivateSuccess() {
  return (
    <>
      <div className=" max-w-7xl mx-auto">
        <div className="  py-6 lg:py16">
          <div className="px-4 lg:px[45px] xl:px-[100px] bg-white mx-auto ">
            <div className="flex gap-6 flex-col-reverse items-center md:gap-[4rem] lg:flex-row lg:justify-between w-full lg:px10">
              <div className="hidde lg:w-1/2 h-auto justify-center">
                <LazyLoadImage
                  className="w[80%] h-auto md:w[60%] lg:w-full "
                  alt="cultivateSuccessImage"
                  src={cultivateSuccessImage}
                  effect="blur"
                />
              </div>
              <div className=" py-5 lg:w-1/2 ">
                <div className=" text-center">
                  <h1 className=" text-3xl leading-[1.1] lg:tracking-tighter font-semibold text-blue lg:text-[40px] mb-2">
                    Cultivating Success, Nurturing Communities
                  </h1>
                  <div className="flex justify-center w-[120px] mx-auto ">
                    <span className="border-2 border-lemonGreen w-full"></span>
                  </div>
                  <p className="text-sm text-[#475367] py-4 lg:py-2">
                    Exploring the Profound Impact of Afri Foods' Years of
                    Unwavering Commitment to Farmers' Livelihoods, a Diverse
                    Range of Quality Products, and a Global Presence Serving
                    Multiple Countries Worldwide.
                  </p>
                  <div className="grid lg:grid-cols-2 gap-4 py-4 pt-8">
                    {successData.map((data) => (
                      <div key={data.title} className="px-3 lg:px-0 flex flex-col items-center justify-center lg:h-[170px] ">
                        <h1 className="text-4xl font-bold text-green">
                          {data.count}
                        </h1>
                        <p className="text-base py-2 text-greyBlack font-bold">
                          {data.title}
                        </p>
                        <p className="text-sm text-[#475367] py-4">
                          {data.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CultivateSuccess;
