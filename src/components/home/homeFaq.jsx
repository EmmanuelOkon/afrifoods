import { Disclosure } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

const faqs = [
  {
    question: "Where does Afrifood source its agricultural products?",
    answer: `Afri-Foods source its agricultural products from a dual-source strategy, comprising our proprietary farms located in Gatsibo and Nyanza, as well as collaborating with local farms throughout Rwanda. Our commitment to excellence is reflected in our close partnerships with farmers, guaranteeing the highest standards of quality, freshness, and consistency across all our products.`,
  },
  {
    question: "What payment methods are accepted?",
    answer: `AFRI-FOODS accommodates various payment methods to facilitate a seamless transaction process. Customers can opt for advance payment, leverage LC (Letter of Credit), or select from other mutually agreed-upon payment modalities outlined in the sales contract. Our commitment to flexibility in payment options is designed to meet the diverse preferences and needs of our valued clients while maintaining the company's financial security.`,
  },
  {
    question: "How can I track my order?",
    answer: `To track your order of fresh fruits and vegetables, we provide real-time communication. Once your shipment is dispatched, you will receive a shipment document along with relevant details. This allows you to stay informed about the progress of your shipment and ensures transparency in the delivery process. If you have any specific inquiries or need assistance with tracking, our customer support team is readily available to provide prompt and accurate information. For air freight clients, you can use the Air Waybill tracking number on the airline partner's website to monitor the real-time status and location of your order during its journey by air.`,
  },
];

const faqsTwo = [
  {
    question: "What is the minimum order quantity for your products?",
    answer: `The minimum order quantity for our products is contingent upon the destination and the specific produce in question. Generally, individual consignments do not fall below 500 kgs per produce, with a total consignment requirement starting at 1 ton. For a more tailored understanding based on your requirements, please feel free to reach out and contact us.`,
  },
  {
    question: "How can I place an order on AFRI-FOODS’ WEBSITE?",
    answer: `To place an order on AFRI-FOODS' website, please visit the "Contact" section and furnish the necessary details for your order. Include information such as your company details, required quantity, specific quality standards or certifications, preferred destination with a specific airport or port, price preference (FOB or CIF), desired payment modality, expected time of delivery, and any other relevant details. Our dedicated sales team will expeditiously reach out to you within the next 24 hours to provide a quotation and guide you through the order process.`,
  },
  {
    question:
      "Where does AFRI-FOODS deliver?",
    answer: `AFRI-FOODS extends its delivery services primarily to Europe, encompassing countries such as Germany, France, Italy, Belgium, Spain, and the Netherlands. Additionally, we cater to the United Kingdom and the United Arab Emirates. In alignment with the African Continental Free Trade Area (AfCFTA), we are actively exploring opportunities in Ghana and Egypt and have commenced exports to Kenya. We remain open to expanding our reach to more countries. As part of our strategic growth, we are diligently working towards entering the Asian market, with plans set for implementation by the fall of 2024.`,
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

function HomeFaq() {
  return (
    <div className="bg-white px-[20px] lg:px-[45px] ">
      <div className="  xl:px[100px]  lg:max-w-7xl 2xl:max-w-[1560px] px-2 mx-auto">
        <div className="py-[3rem] sm:py-6 lg:py-10">
          <div className="pb-[4rem] text-center max-w-2xl mx-auto ">
            <h1 className="text-greyBlack text-3xl lg:text-5xl font-bold lg:trcking-wider lg:leading-none">
              FAQs
            </h1>
            <div className="flex w-[120px] text-center mx-auto py-3 ">
              <span className="border-2 border-lemonGreen w-full"></span>
            </div>
            <div className="mx-auto max-w-[500px]">
              <p className="text-[#475367] pt-3 text-base font-medium  ">
                In-Depth Responses to Your Most Frequently Asked Questions and
                Inquiries about Our Products, Services, and Commitment to
                Quality.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-2 lg:gap-x-10">
            <div className=" flex-row rounded-md">
              <dl className=" diviy gap-y-6 divide-grey b   ">
                {faqs.map((faq) => (
                  <Disclosure as="div" key={faq.question} className="my-3">
                    {({ open }) => (
                      <>
                        <dt className="text-lg gap- rounded-md  gap-4">
                          <Disclosure.Button
                            className={classNames(
                              open
                                ? "bg-green text-white"
                                : "bg-lightGrey rounded-b-md text-[#181C23]",
                              "rounded-t-md gap-4 py-4 md:py-6 text-left w-full flex justify-between items-center outline-0 px-2 "
                            )}
                          >
                            <span className="font-bold text-base">
                              {faq.question}
                            </span>
                            <span className="ml-6 h-7 flex items-center">
                              <ChevronDownIcon
                                className={classNames(
                                  open ? "rotate-180" : "",
                                  "h-5 w-5 flex-none ml-2"
                                )}
                                aria-hidden="true"
                              />
                            </span>
                          </Disclosure.Button>
                        </dt>
                        <Disclosure.Panel
                          as="dd"
                          className="pb-6 text-grey leading-4 text-justify"
                        >
                          <p className="text-base bg-[#F9FAFB] text-[#475367] rounded-b-md p-2 ">
                            {faq.answer}
                          </p>
                        </Disclosure.Panel>
                      </>
                    )}
                  </Disclosure>
                ))}
              </dl>
            </div>

            <div className=" flex-row rounded-md">
              <dl className="">
                {faqsTwo.map((faq) => (
                  <Disclosure as="div" key={faq.question} className="my-3">
                    {({ open }) => (
                      <>
                        <dt className="text-lg gap- rounded-md  gap-4">
                          <Disclosure.Button
                            className={classNames(
                              open
                                ? "bg-green text-white"
                                : "bg-lightGrey rounded-b-md text-[#181C23]",
                              "rounded-t-md gap-4 py-4 md:py-6 text-left w-full flex justify-between items-center outline-0 px-2 "
                            )}
                          >
                            <span className="font-bold text-base">
                              {faq.question}
                            </span>
                            <span className="ml-6 h-7 flex items-center">
                              <ChevronDownIcon
                                className={classNames(
                                  open ? "rotate-180" : "",
                                  "h-5 w-5 flex-none ml-2"
                                )}
                                aria-hidden="true"
                              />
                            </span>
                          </Disclosure.Button>
                        </dt>
                        <Disclosure.Panel
                          as="dd"
                          className="pb-6 text-grey leading-4 text-justify"
                        >
                          <p className="text-base bg-[#F9FAFB] text-[#475367] rounded-b-md p-2 ">
                            {faq.answer}
                          </p>
                        </Disclosure.Panel>
                      </>
                    )}
                  </Disclosure>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeFaq;
