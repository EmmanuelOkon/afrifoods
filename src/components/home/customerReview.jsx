import React, { useState } from "react";
import { Carousel } from "primereact/carousel";
import customerImage from "../../assets/images/customer.png";

export default function CustomerReview() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const responsiveOptions = [
    {
      breakpoint: "1199px",
      numVisible: 1,
      numScroll: 1,
    },
    {
      breakpoint: "991px",
      numVisible: 1,
      numScroll: 1,
    },
    {
      breakpoint: "767px",
      numVisible: 1,
      numScroll: 1,
    },
  ];

  const customers = [
    {
      name: "Ignacio Laiseca",
      image: customerImage,
      description:
        "Our company has been working with AfriFoods since February 2020. Ms Sakina and her team have built a relationship based on trust and commitment.",
      title: "CEO, Golden Tree Food Stuff LLC, Dubai, UAE",
    },
    {
      name: "Mary Laiseca",
      image: customerImage,
      description:
        "We have been working with AfriFoods since February 2020. Ms Sakina and her team have built a relationship based on trust and commitment.",
      title: "CTO, Silver Tree Food Stuff LLC, Dubai, UAE",
    },
    {
      name: "Sarah Laiseca",
      image: customerImage,
      description:
        "Rapid response, great communication, and excellent service. We have been working with AfriFoods since February 2020. Ms Sakina and her team have built a relationship based on trust and commitment.",
      title: "MD, Wooden Tree Food Stuff LLC, Dubai, UAE",
    },
  ];

  return (
    <div className="card max-w-[30rem] md:max-w-6xl mx-auto my-2">
      <div className="py-6">
        <h2 className="text-2xl lg:text-4xl font-bold text-greyBlack text-center py-3">
          Customer Review
        </h2>
        <div className="flex justify-center mx-auto w-[120px] text-center">
          <span className="border-2 border-lemonGreen w-full"></span>
        </div>
      </div>
      <div className="w-full flex max-w-6xl mx-auto ">
        <Carousel
          value={customers}
          numVisible={1}
          numScroll={1}
          responsiveOptions={responsiveOptions}
          className="px-2 md:px-5 z-0 bg-gren w-full "
          itemTemplate={(customer) => (
            <div className="border-1 surface-border m-2 md:mx-6 lg:mx-10 text-center py-5 bg-white overflow-hidden rounded-md lg:rounded-2xl mx-auto">
              <div className="overflow-hidden w-full max-w-[560px] mx-auto">
                <div className="flex flex-col justify-between min-h-full">
                  <div className="fle flex-col justify-center w-full">
                    <div className="flex justify-center">
                      <img
                        className="w-[56px] h-[56px] rounded-full bg-[#FFE7CC]"
                        src={customerImage}
                        alt={customer.name}
                      />
                    </div>
                    <div className="text-center ">
                      <p className="text-[#475367] text-base py-4 ">
                        {customer.description}
                      </p>
                      <p className="text-greyBlack">{customer.name}</p>
                      <span className="text-[#475367] italic text-sm">
                        CEO, Golden Tree Food Stuff LLC, Dubai, UAE
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
          onPageChange={(e) => setCurrentIndex(e.index)}
        />
        {currentIndex < customers.length - 1 && (
          <button
            className="p-button p-button-link p-button-rounded p-button-sm"
            onClick={() => setCurrentIndex(currentIndex + 1)}
          >
            <i className="pi pi-chevron-right"></i>
          </button>
        )}
      </div>
    </div>
  );
}
