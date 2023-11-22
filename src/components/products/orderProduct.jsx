import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { GrClose as XIcon } from "react-icons/gr";
import { FaMinus, FaPlus } from "react-icons/fa6";
import DeliveryForm from "./deliveryForm";

const OrderProduct = ({ product, onClose, selectedCount, ...props }) => {
  console.log(product);
  console.log(selectedCount);
  const totalPrice = selectedCount * 100;

  return (
    <Transition appear show={true} as={Fragment}>
      <Dialog as="div" className="relative z-[1010] " onClose={onClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-greyBlack bg-opacity-70" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto scrollbar-none">
          <div className="flex min-h-full items-center justify-center p-4 ">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="bg-white w-full lg:h[80vh] h-fit md:w-[80%] lg:w-1/2 max-w-[600px] transform overflow-y-auto scrollbar-none py-4 rounded lg:rounded-lg  px-4 xl:px-6 align-middle shadow-xl transition-all">
                <Dialog.Panel className="rounded lg:rounded-lg  ">
                  <Dialog.Panel className="teamMember h-[75vh] xl:h-fit rounde l:rounded-lg bg-white align-middle overflow-y-auto">
                    <Dialog.Title
                      as="div"
                      className="flex items-center justify-between pb-3 border-b border-[#E4E7EC] "
                    >
                      <div>
                        <h2 className="text-lg md:text-[28px] text-greyBlack font-semibold">
                          Order Details
                        </h2>
                      </div>
                      <button
                        type="button"
                        className="flex items-center gap-2 text-[#667185] hover:text-white text-base justify-center rounded-md lg:px-4 lg:py-2 outline-0 hover:bg-red-500 hover:bg-opacity40 "
                        onClick={onClose}
                      >
                        <XIcon className="w-4 h-4 text-[#667185] " />
                        Close
                      </button>
                    </Dialog.Title>
                    <div className="mt-2 flex flex-col md:flex-row items-start gap-4">
                      <div className="w-full md:w-[40%] flex justify-center ">
                        <img
                          src={product?.image}
                          alt={product?.name}
                          className="object-cover w-[70%] md:w-[100%] mb4 rounded-lg"
                        />
                      </div>
                      <div className=" w-full w[100%] md:w[70%] text[#475367] ">
                        <div className="flex justify-between text-greyBlack ">
                          <h2 className="text-lg md:text-[24px]  font-semibold">
                            {product?.name}
                          </h2>

                          <span className="text-[20px] font-semibold pl-1">
                            ${totalPrice}.00
                            <span className="text-green text-[20px] font-semibold">
                              {/* ${totalPrice}.00 */}
                            </span>
                          </span>
                        </div>
                        <div className="text-[#475367] flex flex-col text-left ">
                          <h2 className="text-lg hidden md:text-[28px] font-semibold">
                            {product?.name}
                          </h2>
                          <p className="py-3">
                            Price :
                            <span className="text-base font-semibold pl-1">
                              $100 per ton
                            </span>
                          </p>
                        </div>

                        <div className=" gap-2 items-center py-">
                          <div className="flex w-fit gap-2 items-center p-1 px-3 border border-[#F0F2F5] rounded-[40px] bg-[#F9FAFB] ">
                            <button
                              className={
                                (props.disabled
                                  ? " text-red-900 text[#667185] bg-[#F9FAFB] "
                                  : " text-green  ",
                                " p-2 hover:bg-lemonGreen hover:bg-opacity-30 rounded-full text-[18px] ")
                              }
                              onClick={props.decrement}
                              disabled={props.count === 1}
                            >
                              <FaMinus className=" w-4 h-4" />
                            </button>
                            <span className="text-green text-[18px] font-bold px-4 py-1">
                              {selectedCount}
                            </span>
                            <button
                              className={
                                (props.disabled
                                  ? " text-red-900 text[#667185] bg-[#F9FAFB] "
                                  : " text-green  ",
                                " p-2 text-red900 hover:bg-lemonGreen hover:bg-opacity-30 rounded-full text-[18px]")
                              }
                              onClick={props.increment}
                              disabled={props.count === 10}
                            >
                              <FaPlus className="w-5 h-5" />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div>
                      <DeliveryForm />
                    </div>
                  </Dialog.Panel>
                </Dialog.Panel>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export default OrderProduct;
