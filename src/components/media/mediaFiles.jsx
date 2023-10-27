import mediaArticleOne from "../../assets/images/mediaArticleOne.png";
import mediaArticleTwo from "../../assets/images/mediaArticleTwo.png";
import mediaArticleThree from "../../assets/images/mediaArticleThree.png";
import mediaArticleFour from "../../assets/images/mediaArticleFour.png";
import { LiaLongArrowAltRightSolid } from "react-icons/lia";

const articles = [
  {
    title:
      "A 28 Ans, Sakina Usengimana Dirige Une Entreprise Prospère D’exportation De Fruits Et Légumes Au Rwanda",
    image: mediaArticleOne,
    descriptionOne:
      "(Agence Ecofin) – Les produits horticoles du Rwanda sont très sollicités sur le marché international. Sakina Usengimana, une jeune entrepreneure, a décidé de s’aventurer dans cette industrie en fondant Afri-Foods. Avec moins de 3 ans d’existence, elle réussit à exporter ses produits en Occident et au Moyen-Orient.",
    descriptionTwo: "",
    more: "https://www.agenceecofin.com/entreprendre/2209-91744-a-28-ans-sakina-usengimana-dirige-une-entreprise-prospere-d-exportation-de-fruits-et-legumes-au-rwanda",
  },
  {
    title:
      "How Agri-Business Entrepreneur Overcame Failures In Setting Up Venture, 2021",
    image: mediaArticleTwo,
    descriptionOne:
      "Setting up a business venture is not often without challenges and setbacks, especially in the case of start-ups and emerging ventures. While these setbacks can be discouraging, to Sakina Usengimana, they served to equip her with lessons and experiences that eventually led to her success.",
    descriptionTwo:
      "The 28-year-old is an entrepreneur with a company known as Afri-foods Ltd, based in Gatsibo and Nyanza Districts – involved in exporting fresh vegetables and fruits.",

    more: "https://www.newtimes.co.rw/article/189534/News/how-agri-business-entrepreneur-overcame-failures-in-setting-up-venture",
  },
  {
    title: "New Finance Boost For Women-Owned Start-Ups, 2021",
    image: mediaArticleThree,
    descriptionOne:
      "Global Women Fresh (GWF), the international network for women in produce, has got together with the ITC’s SheTrades initiative to launch a microfinance pilot programme for women-led SMEs in Rwanda’s Ag Fresh industry.",
    descriptionTwo:
      "Complex sets of circumstances often disqualify women in Africa from receiving investment capital and/or make it impossible to afford. GWF has been working in partnership with the ITC’s SheTrades Initiative for two years, supporting women entrepreneurs in the Ag Fresh industry. Most recently, it has launched a microfinance pilot programme for women-led SMEs in Rwanda.",
    more: "https://www.fruitnet.com/eurofruit/new-finance-boost-for-women-owned-start-ups/186278.article",
  },
  {
    title:
      "Rwanda: Horticulture Exporters Decry Hike In Airfreight Charges, 2020",
    image: mediaArticleFour,
    descriptionOne:
      "Statistics by NAEB show that the value of horticulture exports increased from over $27 million in the fiscal year 2018-2019, to more than $28 million in the year 2019-2020.",
    descriptionTwo:
      "Local exporters of horticulture produce have expressed concerns on the increase in airfreight fare brought about by the Covid-19 pandemic, calling for a review in these charges to ensure smooth operation.",
    more: "https://allafrica.com/stories/202008210927.html",
  },
];

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
              <div className="xl:px-100px]  bg-white ">
                <div className="flex flex-col gap-6 items-center lg:flex-row lg:justify-between w-full">
                  <div className="lg:w-1/2 h-auto justify-center">
                    <iframe
                      src="https://www.youtube.com/embed/jevPKTdRUPU?si=j641DS7kKS1emjM3&amp;controls=0"
                      title="How to Export to New Markets"
                      className="aspect-video w-full rounded-md"
                      allow="accelerometer; autoplay;"
                      allowfullscreen
                    ></iframe>
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
                        <span>
                          <a
                            target="_blank"
                            rel="noreferrer"
                            href="https://www.youtube.com/embed/jevPKTdRUPU?si=j641DS7kKS1emjM3&amp;controls=0"
                            className="border-[1.5px] border-green text-white rounded-md py-3  text-base font-semibold bg-green hover:bg-white hover:text-green px-4"
                          >
                            Watch Video
                          </a>
                        </span>
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
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 gap-y-10 justify-center lg:pb-10 ">
              {articles.map((article) => (
                <>
                  <div className="h-full w-full lg:w-[500px] lg:mx-auto pb-10 bg-[#F9FAFB] overflow-hidden rounded-lg flex flex-col justify-between ">
                    <div className="rounded-lg overflow-hidden">
                      <img
                        src={article.image}
                        alt={article.title}
                        className="w-ful h-fit hover:scale-110 hover:cursor-pointer transition-all ease-in-out duration-500"
                      />
                    </div>
                    <div className="p-4">
                      <h2 className="text-2xl font-bold text-[#1D2739] ">
                        {article.title}
                      </h2>
                      <p className="pb-4 pt-4 text-[#475367] ">
                        {article.descriptionOne}
                      </p>
                      <p className="pb-4 pt-4 text-[#475367] ">
                        {article.descriptionTwo}
                      </p>
                    </div>
                    <div className="p-4">
                      <span className="mt-3">
                        <a
                          href={article.more}
                          className="border-b-2  underline border-green text-green py-3 px4 text-base font-semibold transition-all ease-in-out duration-500 hover:px-2"
                        >
                          Read more
                          <LiaLongArrowAltRightSolid className="inline-flex ml-1 w-6 h-6" />
                        </a>
                      </span>
                    </div>
                  </div>
                </>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MediaFiles;
