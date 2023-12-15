

import { products } from "../../utils/data";
import { NavLink } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Navigation } from "swiper/modules";

import { LazyLoadImage } from "react-lazy-load-image-component";

export default function ProductsCategories() {
  return (
    <>
      <div className="maxw-[30rem] md:max-w-6xl md:w-full mx-auto my-2 px-4">
        <div className="py-6">
          <h2 className="text-2xl lg:text-4xl font-bold text-greyBlack text-center py-3 ">
            Product Categories
          </h2>
          <div className="flex justify-center mx-auto w-[120px] text-center ">
            <span className="border-2 border-lemonGreen w-full"></span>
          </div>
        </div>
        <Swiper

          breakpoints={{
            320: {
              slidesPerView: 1,
            },
            480: {
              slidesPerView: 2,
            },
            800: {
              slidesPerView: 3,
            },
          }}
          navigation={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          modules={[Autoplay, Navigation]}
          loop
        >
          {products.map((product) => (
            <SwiperSlide key={product.name} className=" w-[220px] bgblue-500 md:w-[300px]  ">
              <div className="m-2 md:mx-6 lg:mx-10 text-center bg-lightGrey overflow-hidden rounded-md lg:rounded-2xl mx-auto w-[220px] md:w-[300px]  ">
                <div className="overflowhidden h-[400px] max-w[250px]">
                  <div className="flex flex-col justify-between min-h-full">
                    <div className="p-4 text-left">
                      <h3 className="text-2xl uppercase font-bold py-2">
                        {product.name}
                      </h3>
                      <NavLink
                        to="/products"
                        className="border-b-2 border-green text-green py-2 px4 text-base font-semibold transition-all ease-in-out duration-500 hover:px-2"
                      >
                        Shop now
                      </NavLink>
                    </div>
                    <div className="bg-red800 relative">
                      <LazyLoadImage
                        className="absolute inset-0 hover:scale-110 w-full transition-all ease-in-out duration-700"
                        src={product.image}
                        width={400}
                        height={200}
                        alt={product.name}
                        effect="blur"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
}
