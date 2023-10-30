import empowerWomanOne from "../../assets/images/empowerWomanOne.png";
import empowerWomanTwo from "../../assets/images/empowerWomanTwo.png";
import empowerWomanThree from "../../assets/images/empowerWomanThree.png";
import empowerWomenFarmers from "../../assets/images/womenFarmers.png";
import { LazyLoadImage } from "react-lazy-load-image-component";

const Empower = () => {
  return (
    <div className="px-[20px] lg:px-[45px] xl:px-[100px] md:bg-white max-w-7xl mx-auto">
      <div className="py-[3rem] sm:py-6 lg:py-10">
        <div className="pb-[4rem] text-center max-w-2xl mx-auto ">
          <h1 className="text-greyBlack text-3xl lg:text-5xl font-bold lg:trcking-wider lg:leading-none">
            Women Empowerment Through Sustainable Farming
          </h1>
          <div className="flex w-[120px] text-center mx-auto py-3 ">
            <span className="border-2 border-lemonGreen w-full"></span>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-2 lg:gap-x-10">
          <div className=" flex-row rounded-md text-[#344054] ">
            <p className="pb-4">
              Afri Foods is a fresh produce export company that follows
              sustainable farming practices, pays real living wages, and aims to
              empower women farmers in Rwanda.
            </p>
            <p className="pb-4">
              Over 70% of Rwandans rely on small-scale farming for sustenance
              and cash incomes. It is vital that agribusinesses use sustainable
              farming practices and pay living wages, to empower people,
              especially women farmers.
            </p>
            <p className="pb-4">
              Agri Foods works with more than 375 individual farmers and five
              cooperatives across the northern, eastern, and southern provinces.
              We work in the districts of Rwamagana, Kayonza, Gatsibo,
              Nyagatare, Bugesera, Nyanza, Huye, Gicumbi, and Musanze.
            </p>
            <p>
              We grow our premium fruit and vegetables in the mountains of
              Rwanda. The volcanic soils, plentiful rain, equatorial sunshine,
              and a high-altitude climate provide a rich environment for
              agriculture.
            </p>
          </div>

          <div className=" flex-row rounded-md text-[#344054] text-base ">
            <p className="text-base pb-4">
              We source our fresh produce by buying directly from small-scale
              and commercial farmers. Our sustainable farming methodology
              includes training in best agricultural practices and food
              handling. We want to ensure that the fruit and vegetables we
              supply are of the highest quality and can be traced to individual
              farms.
            </p>
            <p>
              Afri Foods’s impact goal is to increase our workforce to 2,000
              farmers in the next two years. This is a sustainable goal that we
              can achieve through capacity building, youth programs, and
              National Agriculture Development Board (NAEB) activities.
            </p>
          </div>
        </div>
        <div className="flex flex-col md:flex-row w-full justify-between items-center gap-4 my-4 lg:mt-10">
          <div className="w-full h-auto md:w-[350px] md:h-[300px] overflow-hidden rounded-lg">
            <img
              src={empowerWomanOne}
              className="w-full h-full hover:scale-110 hover:cursor-pointer transition-all ease-in-out duration-500"
              alt="empowerWomanOne"
            />
          </div>
          <div className="w-full h-auto md:w-[350px] md:h-[300px] lg:h-[480px] overflow-hidden rounded-lg">
            <img
              src={empowerWomanTwo}
              className="w-full object-coer object-center lg:h-full hover:scale-110 hover:cursor-pointer transition-all ease-in-out duration-500"
              alt="empowerWomanTwo"
            />
          </div>
          <div className="w-full h-auto md:w-[350px] md:h-[300px] overflow-hidden rounded-lg">
            <img
              src={empowerWomanThree}
              className="w-full h-full hover:scale-110 hover:cursor-pointer transition-all ease-in-out duration-500"
              alt="empowerWomanThree"
            />
          </div>
        </div>

        <div className="pb-[3rem] text-center max-w-2xl mx-auto md:pt-10 ">
          <h1 className="text-greyBlack text-3xl lg:text-5xl font-bold lg:trcking-wider lg:leading-none">
            Empowering Women Farmers And Youth
          </h1>
          <div className="flex w-[120px] text-center mx-auto py-3 ">
            <span className="border-2 border-lemonGreen w-full"></span>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-2 lg:gap-x-10">
          <div className=" flex-row rounded-md text-[#344054] ">
            <p className="pb-4">
              70% of our farmers are women and youth. Farming is their primary
              source of income and work. They live in small villages with no
              education beyond school and few economic prospects.
            </p>
            <p className="pb-4">
              At AfriFoods, we aim to empower women farmers by paying them a
              real living wage for their premium produce. This gives them
              independence, stature, and dignity. Our farmers take pride in
              their work and are encouraged to continue to grow high-quality
              fresh produce.
            </p>
          </div>

          <div className=" flex-row rounded-md text-[#344054] text-base ">
            <p className="text-base pb-4">
              It’s a win-win for Afri Foods and Rwandan women farmers. Education
              and opportunities are the two most impactful ways to improve the
              lives of Rwandan women.
            </p>
            <p>
              In 2021, we were pleased to start offering internships to women
              and youth in agricultural studies from University of Rwanda’s
              College of Agriculture, Animal Science and Veterinary Medicine &
              African Leadership University. 80% of which were for women.
            </p>
          </div>
        </div>
        <div className="pt-4">
          <LazyLoadImage src={empowerWomenFarmers} effect="blur" />
        </div>
      </div>
    </div>
  );
};

export default Empower;
