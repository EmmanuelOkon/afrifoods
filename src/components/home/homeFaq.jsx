import { Disclosure } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

const faqs = [
  {
    question: "Where does Afri Foods source its agricultural products?",
    answer: `Afri Foods sources its agricultural products directly from local farms across Rwanda. We work closely with farmers to ensure the quality and freshness of our products.`,
  },
  {
    question: "What payment methods are accepted?",
    answer: `Afri Foods sources its agricultural products directly from local farms across Rwanda. We work closely with farmers to ensure the quality and freshness of our products.`,
  },
  {
    question: "How can I track my order?",
    answer: `Afri Foods sources its agricultural products directly from local farms across Rwanda. We work closely with farmers to ensure the quality and freshness of our products.`,
  },
  {
    question: "What is the minimum order quantity for your products?",
    answer: `Afri Foods sources its agricultural products directly from local farms across Rwanda. We work closely with farmers to ensure the quality and freshness of our products.`,
  },
  {
    question: "Can I return or exchange products if I'm not satisfied?",
    answer: `Afri Foods sources its agricultural products directly from local farms across Rwanda. We work closely with farmers to ensure the quality and freshness of our products.`,
  },
];

const faqsTwo = [
  {
    question: "How can I place an order on Afri Foods' website?",
    answer: `Ordering with us is easy! Simply browse our products, select the items you want, and add them to your cart. Then, proceed to checkout, provide your shipping details, and complete your order.`,
  },
  {
    question: "Where does Afri Foods deliver?",
    answer: `Ordering with us is easy! Simply browse our products, select the items you want, and add them to your cart. Then, proceed to checkout, provide your shipping details, and complete your order.`,
  },
  {
    question: "Are Afri Foods' products organic and sustainably sourced?",
    answer: `Ordering with us is easy! Simply browse our products, select the items you want, and add them to your cart. Then, proceed to checkout, provide your shipping details, and complete your order.`,
  },
  {
    question: "Do you offer bulk or wholesale pricing for businesses?",
    answer: `Ordering with us is easy! Simply browse our products, select the items you want, and add them to your cart. Then, proceed to checkout, provide your shipping details, and complete your order.`,
  },
  {
    question: "How can I get in touch with Afri Foods' customer support?",
    answer: `Ordering with us is easy! Simply browse our products, select the items you want, and add them to your cart. Then, proceed to checkout, provide your shipping details, and complete your order.`,
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

function HomeFaq() {
  return (
    <div className="bg-white px-[20px] lg:px-[45px] ">
      <div className="  xl:px[100px]  max-w-7xl px-2 mx-auto">
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
