import { Swiper, SwiperSlide } from "swiper/react";
import { customers } from "../../utils/data";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Navigation } from "swiper/modules";

export default function CustomerReview() {
  return (
    <div className="max-w-[30rem] md:max-w-6xl mx-auto my-2">
      <div className="py-6">
        <h2 className="text-2xl lg:text-4xl font-bold text-greyBlack text-center py-3">
          Customer Review
        </h2>
        <div className="flex justify-center mx-auto w-[120px] text-center">
          <span className="border-2 border-lemonGreen w-full"></span>
        </div>
      </div>

      <Swiper
        slidesPerView={1}
        breakpoints={{
          320: {
            slidesPerView: 1,
          },
          // 480: {
          //   slidesPerView: 2,
          // },
          // 800: {
          //   slidesPerView: 3,
          // },
        }}
        navigation={true}
        modules={[Navigation]}
      >
        {customers.map((customer) => (
          <SwiperSlide>
            <div className="m-2 md:mx-6 lg:mx-10 text-center py-5 bg-white overflow-hidden rounded-md lg:rounded-2xl mx-auto w-[220px] md:w-[560px] lg:w-full ">
              <div className="overflowhidden h-full w-full max- md:w-[560px] mx-auto">
                <div className="flex flex-col justify-center max-w[10rem] w[860px] py-4 bg-red700 ">
                  <div className="flex justify-center">
                    <img
                      className="w-[56px] h-[56px] rounded-full bg-[#FFE7CC]"
                      src={customer.image}
                      alt={customer.name}
                    />
                  </div>
                  <div className="textcenter ">
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
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
