import React from "react";
import footGalleryOne from "../../assets/images/footGalleryOne.png";
import footGalleryTwo from "../../assets/images/footGalleryTwo.png";
import footGalleryThree from "../../assets/images/footGalleryThree.png";
import footGalleryFour from "../../assets/images/footGalleryFour.png";
import footGalleryFive from "../../assets/images/footGalleryFive.png";
import footGallerySix from "../../assets/images/footGallerySix.png";

const items = [
  {
    image: footGalleryOne,
  },
  {
    image: footGalleryTwo,
  },
  {
    image: footGalleryThree,
  },
  {
    image: footGalleryFour,
  },
  {
    image: footGalleryFive,
  },
  {
    image: footGallerySix,
  },
];

const FootGallery = () => {
  return (
    <>
      <div className="flex gap-1 p-1 md:gap-2 md:p-2 ">
        {items.map((item, index) => (
          <div key={index} className="w-1/2  ">
            <img
              src={item.image}
              alt="footGallery"
              className="w-full h-auto object-cover object-center"
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default FootGallery;
