import React from "react";
import footGalleryOne from "../../assets/images/footGalleryOne.png";
import footGalleryTwo from "../../assets/images/footGalleryTwo.png";
import footGalleryThree from "../../assets/images/footGalleryThree.png";
import footGalleryFour from "../../assets/images/footGalleryFour.png";
import footGalleryFive from "../../assets/images/footGalleryFive.png";
import footGallerySix from "../../assets/images/footGallerySix.png";
import footGallerySeven from "../../assets/images/footGallerySeven.png";
import footGalleryEight from "../../assets/images/footGalleryEight.png";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Navigation } from "swiper/modules";


const items = [
  {
    id: 1,
    image: footGalleryOne,
  },
  {
    id: 2,
    image: footGalleryTwo,
  },
  {
    id: 3,
    image: footGalleryThree,
  },
  {
    id: 4,
    image: footGalleryFour,
  },
  {
    id: 5,
    image: footGalleryFive,
  },
  {
    id: 6,
    image: footGallerySix,
  },
  {
    id: 7,
    image: footGallerySeven,
  },
  {
    id: 8,
    image: footGalleryEight,
  },
];


const FootGallery = () => {
  return (
    <>
      <div className=" md:lg:max-w-7xl 2xl:max-w-[1560px] md:w-full mx-auto my-2 px-4">
        <Swiper
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,

          }}
          breakpoints={{
            280: {
              slidesPerView: 2,
            },
            320: {
              slidesPerView: 2,
            },
            400: {
              slidesPerView: 3,
            },
            480: {
              slidesPerView: 4,
            },
            620: {
              slidesPerView: 5,
            },
            800: {
              slidesPerView: 6,
            },
          }}
          loop
          modules={[Autoplay, Navigation]}

        >
          {items.map((item) => (
            <SwiperSlide key={item.id} className=" w-[200px] h-[200px] gap-10 ">
              <div
                className="m-2 md: mx-6 text-center"
              >
                <LazyLoadImage
                  className="w-full h-full "
                  src={item.image}
                  alt="footGallery"
                  effect="blur"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};

export default FootGallery;
