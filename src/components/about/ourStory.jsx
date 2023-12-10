import aboutUsStory from "../../assets/images/aboutUsStory.png";
import { RiDoubleQuotesL } from "react-icons/ri";

const OurStory = () => {
  return (
    <>
      <div className="px-[20px]  xl:px-[100px] md:bg-white mx-auto  lg:max-w-7xl 2xl:max-w-[1560px]">
        <div className="py-[3rem] sm:py-6 lg:py-10">
          <div className="pb-[2rem] text-center ">
            <h1 className="text-greyBlack text-3xl lg:text-5xl font-bold lg:trcking-wider lg:leading-none">
              Our Story
            </h1>
            <div className="flex w-[120px] text-center mx-auto py-3 ">
              <span className="border-2 border-lemonGreen w-full"></span>
            </div>
          </div>
          <div className="text-left md:text-center max-w-[800px] md:mx-auto text-[#1D2739] ">
            <p className="text-[#1D2739] py-4 text-base">
              Afri Foods is a dynamic, gourmet horticulture company. We export
              fresh Rwandan bird’s eye chilli, avocado and other produce across
              the world. Our founder and CEO is Sakina Usengimana, a proud
              Rwandan woman. Her national pride and entrepreneurial mindset are
              at the centre of everything she does. Sakina graduated from the
              prestigious Akilah Institute in Business Management and
              Entrepreneurship in Kigali. She began a career in fashion,
              developing a jewellery business.
            </p>
            <p className="text-[#1D2739] py-4 text-base">
              Then, in 2017, Sakina was at a YouthConnekt training for Rwandan
              entrepreneurs. One of the key speakers made a remark that changed
              her life. She said, ‘In Africa, you have land, but you are hungry.
              Where does food come from? It comes from the land.’ And Sakina
              thought, ‘Yes. Now, what can I do about it?’ She decided then to
              throw her energies into developing an agribusiness growing fresh
              produce to sell domestically and globally.
            </p>
            <p className="text-[#1D2739] py-4 text-base">
              Sakina had always wanted to produce something she could sell
              internationally. The seeds of what would become Afri Foods were
              planted then.
            </p>
          </div>
          <div className="py-10">
            <img src={aboutUsStory} className="w-full rounded-md md:rounded-2xl" alt="aboutUsStory" />
          </div>
        </div>
        <div className="">
          <div className="py-[2rem] sm:py-6 flex max-w-[450px] mx-auto text-center relative ">
            <RiDoubleQuotesL className="h-20 w-20 text-[#E4E7EC] absolute -top-4 " />
            <p className="relative text-[#475367] italic text-base md:text-xl z-[1] ">
              I’m passionate about what we do. We need to feed ourselves and we
              need to feed Africa
            </p>
            <RiDoubleQuotesL className="h-20 w-20 text-[#E4E7EC] rotate-180 absolute -bottom-4 right-0 -z-0  " />
          </div>
          <div className="text-center">
            <p className="font-bold ">Sakina Usengimana</p>
            <span className="text-[#475367] text-xs font-normal">
              Afri Foods Founder & CEO
            </span>
          </div>
        </div>
        <div className="pt-[3rem] pb-[1rem] text-center max-w-2xl mx-auto ">
          <h1 className="text-greyBlack text-3xl lg:text-5xl font-bold lg:trcking-wider lg:leading-none">
            Launching Afri Foods
          </h1>
          <div className="flex w-[120px] text-center mx-auto py-3 ">
            <span className="border-2 border-lemonGreen w-full"></span>
          </div>
        </div>
        <div className="pb-6 grid grid-cols-1 md:grid-cols-2 gap-y-2 lg:gap-x-10">
          <div className=" flex-row rounded-md text-[#344054] ">
            <p className="pb-4">
              Using her savings, Sakina started growing tomatoes and pepper but
              the venture soon failed. She recognized that she didn’t have the
              technical skills and experience.
            </p>
            <p className="pb-4">
              She tried a second time a year later with two friends, again with
              pepper and tomatoes. But after three harvests, their yields were
              still too low to be financially viable. By then Sakina had
              exhausted all her money. It was almost enough to make her give up.
              But she didn’t.
            </p>
            <p className="pb-4">
              In August 2019, she tried a third time. This time, she consulted
              agriculture and agribusiness experts, and established her own
              company, Afri Foods Ltd.
            </p>
          </div>

          <div className=" flex-row rounded-md text-[#344054] text-base ">
            <p className="text-base pb-4">
              Finally, things started to do well. Sakina’s perseverance had paid
              off. She left tomatoes, and moved into avocados, Habanero chilli,
              and bird’s eye chilli. Both quality and yields improved
              substantially. Afri Foods started to grow rapidly.
            </p>
            <p>
              Just two years later and Afri Foods is well-known in Rwanda for
              exporting fresh, spicy chillies and avocados. Our CEO, Sakina, has
              not slowed down either. Her drive, enthusiasm, and desire for
              continual improvement, powers the company’s every step.
            </p>
          </div>
        </div>

      </div>
    </>
  );
};

export default OurStory;
