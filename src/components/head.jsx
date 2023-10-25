import { Fragment, useState } from "react";
import { Dialog, Disclosure, Popover, Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import Logo from "../../src/assets/images/logo.png";
import { HiOutlineMenuAlt3 as MenuIcon } from "react-icons/hi";
import { NavLink } from "react-router-dom";

const products = [
  {
    name: "Terms of Use",
    href: "/termsofuse",
  },
  {
    name: "Terms and Services",
    href: "/termsandservices",
  },
  {
    name: "Privacy Policy",
    href: "/privacypolicy",
  },
];

const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Blog", href: "/blog" },
  {
    name: "Products",
    href: "/products",
    subItems: products,
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Head() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white drop-shadow-md sticky z-0 lg:z-[1000] top-0 w-full">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between py-3 px-4 p6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <NavLink to="/">
            <img
              className="w-2/4 lg:h-full lg:w-[68%] sm:h-auto"
              src={Logo}
              alt="AAJ Express Logo"
            />
          </NavLink>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <MenuIcon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <Popover.Group className="hidden lg:flex lg:gap-x-12 items-center">
          {navigation.map((item) => (
            <Fragment key={item.name}>
              {item.subItems ? (
                <Popover className="relative" as="div">
                  {({ open }) => {
                    const isActive = !open;
                    return (
                      <>
                        <Popover.Button
                          className={() => {
                            return (
                              "flex items-center gap-x1 leading-6 text-grey outline-0 border-b-2 px-2 py-2 text-sm font-medium font-raleway " +
                              (!isActive
                                ? "  text-orange"
                                : "border-blue text-blue text-opacity-80 border-opacity-0 hover:border-orange hover:text-orange")
                            );
                          }}
                        >
                          {item.name}
                          <ChevronDownIcon
                            className={classNames(
                              open ? "rotate-180" : "",
                              "h-5 w-5 flex-none ml-2"
                            )}
                            aria-hidden="true"
                          />
                        </Popover.Button>
                        <Transition
                          as={Fragment}
                          enter="transition ease-out duration-200"
                          enterFrom="opacity-0 translate-y-1"
                          enterTo="opacity-100 translate-y-0"
                          leave="transition ease-in duration-150"
                          leaveFrom="opacity-100 translate-y-0"
                          leaveTo="opacity-0 translate-y-1"
                        >
                          <Popover.Panel className="absolute left-0 top-full mt-3 w-[250px] overflow-hidden rounded-md bg-white shadow-lg ring-1 ring-orange">
                            <div className="p-4">
                              {item.subItems.map((product) => (
                                <div
                                  key={product.name}
                                  className="group relative flex flex-shrink- items-center gap-x-6 rounded-md text-sm leading-6 font-poppins "
                                >
                                  <div className="flex-aut flex-shrink-0 ">
                                    <NavLink
                                      to={product.href}
                                      className={({ isActive }) => {
                                        return (
                                          "block font-raleway my-2 text-grey font-semibold px-2 py-2 4 w-fit border-b-2  " +
                                          (isActive
                                            ? " border-orange text-orange"
                                            : " text-blue border-blue border-opacity-0 hover:border-orange hover:bg-opacity-40 hover:text-orange ")
                                        );
                                      }}
                                    >
                                      {product.name}
                                    </NavLink>
                                  </div>
                                </div>
                              ))}
                            </div>
                          </Popover.Panel>
                        </Transition>
                      </>
                    );
                  }}
                </Popover>
              ) : (
                <NavLink
                  to={item.href}
                  target=""
                  className={({ isActive }) => {
                    return (
                      "px-2 py-2 text-sm font-medium font-raleway border-b-2 " +
                      (isActive
                        ? " text-orange font-semibold text-lg"
                        : "text-blue text-opacity-80 border-blue border-opacity-0 hover:border-orange hover:text-orange hover-text-orange")
                    );
                  }}
                >
                  {item.name}
                </NavLink>
              )}
            </Fragment>
          ))}
        </Popover.Group>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <a
            target="_blank"
            rel="noreferrer"
            href="https://dashboard.aajexpress.org/quote/"
            className="font-raleway py-2 px-5 lg:px-6 text-base md:px-3 md:text-xs lg:text-lg font-medium rounded text-white bg-orange outline-none hover:bg-fadeOrange hover:text-orange lg:font-medium border-2 border-orange"
          >
            Get Estimate
          </a>
        </div>
      </nav>
      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white drop-shadow-md h-fit px-6 py-6 sm:ring-1 sm:ring-orange">
          <div className="flex items-center justify-end">
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-fadeOrange">
              <div className="space-y-2 py-6">
                {navigation.map((item) => (
                  <Fragment key={item.name}>
                    {item.subItems ? (
                      <Disclosure as="div" className="-mx-3">
                        {({ open }) => (
                          <>
                            <Disclosure.Button
                              className={classNames(
                                open
                                  ? "text-orange font-semibold"
                                  : "text-blue text-opacity-80 border-blue border-opacity-0 hover:border-orange hover:text-orange ",
                                "flex items-center font-raleway justify-between py-2 pl-3 pr-3.5 text-base leading-7 w-fit outline-none border-l-2 "
                              )}
                            >
                              Product
                              <ChevronDownIcon
                                className={classNames(
                                  open ? "rotate-180" : "",
                                  "h-5 w-5 flex-none ml-2"
                                )}
                                aria-hidden="true"
                              />
                            </Disclosure.Button>
                            <Disclosure.Panel className="mt-2 space-y-2">
                              {products.map((item) => (
                                <NavLink
                                  key={item.name}
                                  to={item.href}
                                  className={({ isActive }) => {
                                    return (
                                      "block py-2 pl-4 mx-3 pr3 text-sm leading-7 text-grey border-l-2 hover: " +
                                      (isActive
                                        ? " bg- text-orange font-semibold"
                                        : " border-blue border-opacity-0  hover:border-orange hover:bg-opacity-40 hover-text-orange")
                                    );
                                  }}
                                >
                                  {item.name}
                                </NavLink>
                              ))}
                            </Disclosure.Panel>
                          </>
                        )}
                      </Disclosure>
                    ) : (
                      <NavLink
                        to={item.href}
                        className={({ isActive }) => {
                          return (
                            "-mx-3 block border-l-2 px-3 py-2 text-base leading-7 w-fit " +
                            (isActive
                              ? "  text-orange font-semibold"
                              : "text-blue text-opacity-80 border-blue border-opacity-0 hover:border-orange hover:text-orange")
                          );
                        }}
                      >
                        {item.name}
                      </NavLink>
                    )}
                  </Fragment>
                ))}
              </div>
              <div className="py-6">
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://dashboard.aajexpress.org/quote/"
                  className="-mx-3 block font-raleway border-2 hover:text-orange rounded-md px-3 py-2.5 text-base font-semibold leading-7 text-white bg-orange hover:bg-fadeOrange w-fit"
                >
                  Get Estimate
                </a>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
}
