import { useState, useEffect } from "react";
import Hero from "./hero";
import { NavLink, useParams } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { fruits } from "../../utils/data";
import { FaMinus, FaPlus } from "react-icons/fa6";
import { BsFillHandbagFill } from "react-icons/bs";
import { HiShoppingCart } from "react-icons/hi";
import { RiVerifiedBadgeFill } from "react-icons/ri";
import React from "react";
import { Link } from "react-router-dom";
import OrderProduct from "./orderProduct";
import { toast } from "sonner";
import Loading from "../loader";

const ProductDetailsCard = () => {
  const { productName } = useParams();
  const [count, setCount] = useState(1);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [selectedCount, setSelectedCount] = useState(1);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  }, []);

  const errorMessages = {
    count: "Quantity must be between 1 and 10",
  };

  const product = fruits.find(
    (product) => product.name.replace(/\s+/g, "-").toLowerCase() === productName
  );

  if (!product) {
    return (
      <div className="items-center py-5 h-[60vh] flex justify-center text-lg flex-col">
        Product not found
        <NavLink
          className="text-white bg-green hover:bg-lemonGreen px-4 py-3 rounded-md"
          to="/products"
        >
          View products
        </NavLink>
      </div>
    );
  }

  const increment = () => {
    if (count < 10) {
      const newCount = count + 1;
      setCount(newCount);
      setSelectedCount(newCount);
    }
  };
  // console.log(product);
  const decrement = () => {
    const newCount = count - 1;
    if (count > 1) {
      setCount(newCount);
      setSelectedCount(newCount);
    }
  };

  const disabled = count === 1 || count === 10;

  const handleButtonClick = () => {
    if (disabled) {
      // Show error message if button is disabled
      toast.error(errorMessages.count, {
        position: "top-center",
        autoClose: 3000,
        closeOnClick: true,
        pauseOnHover: false,
      });
    } else {
      // Proceed with the button click logic
      // For example, you can increment/decrement the count
      setCount(count + 1);
    }
  };

  const relatedProducts = fruits
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 3);

  const openSelectedProductModal = () => {
    setSelectedProduct(product);
  };

  const closeSelectedProductModal = () => {
    setSelectedProduct(null);
  };

  // console.log(selectedCount);

  return (
    <div>
      <Hero title="Products" subTitle="Fruits" pathName={product.name} />
      <div className="pt-10 mx-auto lg:max-w-7xl 2xl:max-w-[1560px] px-2">
        <div className="py-6 lg:py16">
          <div className="px-4 xl:px-[100px] bg-white divide-y-2 divide-[#F0F2F5]  ">
            <div className="flex flex-col gap-6 items-center md:gap[4rem] lg:flex-row lg:justify-between w-full pb-4 lg:pb-10 ">
              <div className="w-[327px] sm:w-[400px] lg:w-1/2 h-auto rounded-lg justify-center overflow-hidden">
                <div className="rounded-lg flex justify-center overflow-hidden bg-[#E7F6EC]">
                  {loading ? (
                    <div className="w-[327px] h-[327px] lg:h-[480px] lg:w-[480px] flex items-center justify-center ">
                      <Loading />
                    </div>
                  ) : (
                    <img
                      className="w[80%] h-auto md:w[60%] lg:w-full p-10 mx-auto "
                      src={product.image}
                      alt={product.name}
                    />
                  )}
                </div>
                <div className="flex py-4 gap-4 mx-10">
                  {Array.from({ length: 3 }).map((_, index) => (
                    <>
                      {loading ? (
                        <div className="p-4 lg:p-10 border border-[#D0D5DD] bg-[#F7F9FC] mx-auto rounded-lg">
                          <Loading />
                        </div>
                      ) : (
                        <div>
                          <img
                            key={index}
                            className="w[80%] h-auto md:w[60%] lg:w-full bg-[#F7F9FC] p-2 lg:p-6 mx-auto rounded-lg border border-[#D0D5DD]"
                            src={product.image}
                            alt={product.name}
                          />
                        </div>
                      )}
                    </>
                  ))}
                </div>
              </div>
              <div className="pt-5 lg:py-5 lg:w-1/2 ">
                <div className="">
                  <h1 className=" text-3xl text-[#1D2739] leading-[1.1] lg:tracking-tight font-semibold text-blue lg:text-[40px] mb-2">
                    {product.name}
                  </h1>
                  <div className="py- p8 divide-y-2 divide-[#F0F2F5] ">
                    <div className="fle gap-2 items-end py-2">
                      <p className="text-base py-4">{product.description}</p>
                      <span className="text-[#101828] text-[28px] font-semibold">
                        {/* $100.00 */}
                        {/* {product.price} */}
                      </span>
                      {/* <span className="text-grey700 text-[18px] pl-1 ">
                        per ton
                      </span> */}
                    </div>
                    <div className="text-[#101928] text-base py-2 ">
                      <p className="font-semibold py-1 ">
                        Category:
                        <span className="pl-1 font-normal ">
                          {product.category}
                        </span>
                      </p>
                      <p className="font-semibold py-1 ">
                        <span className="">Tags:</span>
                        <span className="pl-1 font-normal ">
                          fresh, {product.category}, {product.name}
                        </span>
                      </p>
                    </div>
                    <div className="text-[#101928] text-base py-2 ">
                      <p className="font-semibold py-1 ">Quantity</p>
                      <div className="flex gap-2 items-center py-2">
                        <div className="flex gap-2 items-center p-2 px-4 px10 border border-[#F0F2F5] rounded-[40px] bg-[#F9FAFB] ">
                          <button
                            onClick={handleButtonClick}
                            className={
                              (disabled
                                ? " text-red-900 text[#667185] bg-[#F9FAFB] "
                                : " text-green  ",
                              " p-2 hover:bg-lemonGreen hover:bg-opacity-30 rounded-full text-[18px] ")
                            }
                            // onClick={decrement}
                            disabled={count === 1}
                          >
                            <FaMinus className=" w-5 h-5" />
                          </button>
                          <span className="text-green text-[18px] font-bold px-3 py-1">
                            {count}
                          </span>
                          <button
                            className={
                              (disabled
                                ? " text-red-900 text[#667185] bg-[#F9FAFB] "
                                : " text-green  ",
                              " p-2 text-red900 hover:bg-lemonGreen hover:bg-opacity-30 rounded-full text-[18px]")
                            }
                            onClick={increment}
                            disabled={count === 10}
                          >
                            <FaPlus className="w-5 h-5" />
                          </button>
                        </div>
                      </div>
                      <button
                        onClick={() => openSelectedProductModal(product)}
                        className="bg-green hover:bg-lemonGreen text-white flex items-center justify-center py-3 px-8 rounded-md mt-4 w-full "
                      >
                        <BsFillHandbagFill className="inline-block w-6 h-6 mr-1" />
                        Order now
                      </button>
                      {selectedProduct && (
                        <OrderProduct
                          product={product}
                          onClose={closeSelectedProductModal}
                          selectedCount={selectedCount}
                          increment={increment}
                          decrement={decrement}
                          disabled={disabled}
                        />
                      )}
                      <div className=" ">
                        <p className="py-4 flex items-start gap-2">
                          <HiShoppingCart className="inline-block w-6 h-6 mr-1 text-green" />
                          <span>
                            0rder in the next
                            <span className="text-lemonGreen underline px-1 ">
                              07 hours
                            </span>
                            to get it in
                            <span className="text-lemonGreen underline pl-1">
                              3-5 days
                            </span>
                          </span>
                        </p>
                        <p className="flex items-center gap-2">
                          <RiVerifiedBadgeFill className="inline-block w-6 h-6 mr-1 text-lemonGreen" />
                          <span className="text-[#475367] text-sm underline ">
                            100% Satisfaction guarantee
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col md:flex-col gap-6 items-start md:gap[4rem] lg:flex-row lg:justify-between w-full pt-4 lg:pt-10">
              <div className="w-full lg:w-1/2">
                <h1 className="text-[#101928] text-2xl font-semibold py-2">
                  Product Details
                </h1>
                <div className="text-grey700 flex-col text-base ">
                  <p className="py-2">{product?.productDetails[0].textOne}</p>
                  <p className="py-2">{product?.productDetails[1].textTwo}</p>
                  <p className="py-2">{product?.productDetails[2].textThree}</p>

                  <p className="py-2">{product?.productDetails[3].textFour}</p>
                </div>
                <h2 className="text-[#101928] text-2xl font-semibold pt-4 pb-2">
                  Health benefits:
                </h2>
                <div className="text-base text-grey700 ">
                  <p className="text-base">{product?.healthBenefit}</p>
                </div>
              </div>
              <div className="w-full lg:w-1/2">
                <h1 className="text-[#101928] text-2xl font-semibold py-2">
                  Specifications
                </h1>
                <div className="px-2 md:px-4 divide-y divide-[#F0F2F5]">
                  <div className="text-grey700 flex items-start text-base py-3">
                    <h2 className="text-[#101928] text-lg font-semibold w-[200px] ">
                      Weight
                    </h2>
                    <p className="w-[360px]">
                      {product?.specifications[0].weight}
                    </p>
                  </div>
                  <div className="text-grey700 flex items-start text-base py-3">
                    <h2 className="text-[#101928] text-lg font-semibold w-[200px] ">
                      Harvesting Season
                    </h2>
                    <p className="py2  w-[360px]">
                      {product?.specifications[1].harvestingSeason}
                    </p>
                  </div>
                  <div className="text-grey700 flex items-start text-base py-3">
                    <h2 className="text-[#101928] text-lg font-semibold w-[200px] ">
                      Nutritional Content
                    </h2>
                    <p className="w-[360px]">
                      {product?.specifications[2].nutritionalContent}
                    </p>
                  </div>
                  <div className="text-grey700 flex items-start text-base py-3">
                    <h2 className="text-[#101928] text-lg font-semibold w-[200px] ">
                      Storage
                    </h2>
                    <p className="w-[360px] ">
                      {product?.specifications[3].storage}
                    </p>
                  </div>
                  <div className="text-grey700 flex items-start text-base py-3">
                    <h2 className="text-[#101928] text-lg font-semibold w-[200px] ">
                      Culinary Uses
                    </h2>
                    <p className="w-[360px] ">
                      {product?.specifications[4].culinaryUses}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="container lg:max-w-7xl 2xl:max-w-[1560px] mx-auto px-4">
              <div className="py-8">
                <div className="pb-[2rem] text-center max-w-2xl mx-auto ">
                  <h1 className="text-greyBlack text-3xl lg:text-5xl font-bold lg:leading-none">
                    Related Products
                  </h1>
                  <div className="flex w-[120px] text-center mx-auto py-3 ">
                    <span className="border-2 border-lemonGreen w-full"></span>
                  </div>
                </div>
                <div className="flex overflow-scroll md:overflow-hidden md:grid grid-cols-1 lgrid-cols-2 gap-4 md:grid-cols-2 lg:grid-cols-3 lg:mx-32 ">
                  {relatedProducts.map((item) => (
                    <div key={item.id} className="mx-auto ">
                      <Link
                        to={`/product/${item.name
                          .replace(/\s+/g, "-")
                          .toLowerCase()}`}
                        key={item.name}
                        className="w-[250px]  lg:w-[300px] pb-2 lg:py-8 flex flex-col justify-end bg-[#F7F9FC] rounded-lg hover:bg-lemonGreen hover:bg-opacity-40 cursor-pointer "
                      >
                        <div className="flex justify-center hover:scale-110 transition-all delay-200 ease-in-out ">
                          <div className="w-[192px] flex justify-center ">
                            <LazyLoadImage
                              src={item.image}
                              className="w-full h-full text-green "
                              alt={item.name}
                              effect="blur"
                            />
                          </div>
                        </div>
                        <div className="px-4 ">
                          <span className="text-lemonGreen">
                            {item.category}
                          </span>
                          <h3 className="pt-2 lg:pt4 text-greyBlack text-[18px] md:text-[20px] font-semibold tracking-tighter">
                            {item.name}
                          </h3>
                          {/* <div className="flex gap-2 items-end pt-2">
                            <span className="text-[#475367] text-[20px] font-semibold">
                              {item.price}
                            </span>
                            <span className="text-[#98A2B3] text-[14px] line-through">
                              {item.discount}
                            </span>
                          </div> */}
                        </div>
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsCard;
