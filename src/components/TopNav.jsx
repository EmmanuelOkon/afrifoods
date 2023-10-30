import { Fragment, useState } from "react";
import { Dialog, Popover, Menu, Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import Logo from "../../src/assets/images/logo.png";
import { FiMenu as MenuIcon } from "react-icons/fi";
import { NavLink } from "react-router-dom";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import Rwanda from "../assets/icons/rwanda.svg"

const navigation = [
  { name: "Home", href: "/" },
  { name: "Products", href: "/products" },
  { name: "About Us", href: "/about" },
  { name: "Media", href: "/media" },
  { name: "Sustainability", href: "/sustainability" },
  { name: "Contact Us", href: "/contact" },
  { name: "FAQ", href: "/faq" },
];

const language = [
  { text: "FR", href: "#" },
  { text: "ES", href: "#" },
];

const countries = [
  { text: "Nigeria", href: "#" },
  { text: "Togo", href: "#" },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function TopNav() {
  const [languageMenuOpen, setLanguageMenuOpen] = useState(false);
  const [countryMenuOpen, setCountryMenuOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white drop-shadow-md sticky lg:z-[900] top-0 w-full">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between py-3 px-4 p6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <NavLink to="/">
            <img
              className="w-[50px] lg:h-full lg:w-[80px] sm:h-auto"
              src={Logo}
              alt="Afri Foods Logo"
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
        <Popover.Group className="hidden lg:flex lg:gap-x-4 items-center">
          {navigation.map((item) => (
            <NavLink
              to={item.href}
              key={item.name}
              className={({ isActive }) => {
                return (
                  "px-2 py-2 text-sm font-medium font-raleway " +
                  (isActive
                    ? " text-green font-semibold text-lg"
                    : "text-blue hover:text-lemonGreen text-opacity-80")
                );
              }}
            >
              {item.name}
            </NavLink>
          ))}
        </Popover.Group>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <NavLink
            rel="noreferrer"
            to="/products"
            className="font-raleway py-2 px-5 lg:px-6 text-base md:px-3 md:text-xs lg:text-lg font-medium rounded text-white bg-green outline-none hover:bg-lemonGreen lg:font-medium "
          >
            Get Started
          </NavLink>
        </div>
      </nav>
      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        {/* <div className="fixed inset-0 z-10" /> */}
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white drop-shadow-md h-fit px6 py6 sm:ring-1 sm:ring-green">
          <div className="flex px-6 py-4 items-center justify-between bg-white drop-shadow-md">
            <div className="">
              <NavLink to="/">
                <img
                  className="w-[60px] lg:h-full sm:h-auto"
                  src={Logo}
                  alt="Afri Foods Logo"
                />
              </NavLink>
            </div>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 ">
              <div className="space-y-2 py-6 px-6">
                {navigation.map((item) => (
                  <Fragment key={item.name}>
                    <NavLink
                      to={item.href}
                      className={({ isActive }) => {
                        return (
                          "-mx-3 block px3 py-2 text-base leading-7 w-full border-b border-[#F0F2F5] " +
                          (isActive
                            ? "  text-green font-semibold"
                            : "text-greyBlack  hover:text-green")
                        );
                      }}
                    >
                      {item.name}
                    </NavLink>
                  </Fragment>
                ))}
              </div>
              <div className="py-6 text-center">
              <Menu as="div" className=" inline-block text-left">
              <div>
                <Popover as="div" className="relative">
                  {({ open }) => (
                    <>
                      <Menu.Button
                        onClick={() => setLanguageMenuOpen(!languageMenuOpen)}
                        className="inline-flex w-full justify-center gap-x-1.5 rounded-md px-3 py-2 text-sm font-semibold text-[#344054] text-opacity-70  ring-0"
                      >
                        EN
                        <ChevronDownIcon
                          className={classNames(
                            open ? "rotate-180" : "",
                            "h-5 w-5 flex-none ml-2"
                          )}
                          aria-hidden="true"
                        />
                      </Menu.Button>
                      <Transition
                        as={Fragment}
                        show={languageMenuOpen}
                        enter="transition ease-out duration-100"
                        enterFrom="transform opacity-0 scale-95"
                        enterTo="transform opacity-100 scale-100"
                        leave="transition ease-in duration-75"
                        leaveFrom="transform opacity-100 scale-100"
                        leaveTo="transform opacity-0 scale-95"
                      >
                        <Menu.Items className="absolute z-[2000] right-0 mt-2 w-full origin-top-right rounded-md bg-white shadow-lg ring-0 focus:outline-none">
                          <div className="py-1">
                            {language.map((item, index) => (
                              <Menu.Item key={index}>
                                {({ active }) => (
                                  <a
                                    href={item.href}
                                    className={classNames(
                                      active
                                        ? "bg-gray-100 text-gray-900"
                                        : "text-gray-700",
                                      "block px-4 py-2 text-sm"
                                    )}
                                  >
                                    {item.text}
                                  </a>
                                )}
                              </Menu.Item>
                            ))}
                          </div>
                        </Menu.Items>
                      </Transition>
                    </>
                  )}
                </Popover>
              </div>
            </Menu>

            <Menu as="div" className="relative inline-block text-left">
              <div>
                <Popover as="div" className="relative">
                  {({ open }) => (
                    <>
                      <Menu.Button
                        onClick={() => setCountryMenuOpen(!countryMenuOpen)}
                        className="inline-flex items-center w-full justify-center gap-x-1.5 rounded-md px-3 py-2 text-sm font-semibold text-[#344054] text-opacity-70 ring-0"
                      >
                        <img
                          src={Rwanda}
                          width={20}
                          height={20}
                          alt="Rwanda"
                        />
                        Rwanda
                        <ChevronDownIcon
                          className={classNames(
                            open ? "rotate-180" : "",
                            "h-5 w-5 flex-none ml-2"
                          )}
                          aria-hidden="true"
                        />
                      </Menu.Button>
                      <Transition
                        as={Fragment}
                        show={countryMenuOpen}
                        enter="transition ease-out duration-100"
                        enterFrom="transform opacity-0 scale-95"
                        enterTo="transform opacity-100 scale-100"
                        leave="transition ease-in duration-75"
                        leaveFrom="transform opacity-100 scale-100"
                        leaveTo="transform opacity-0 scale-95"
                      >
                        <Menu.Items className="absolute right-0 z-[2000] mt-2 w-full origin-top-right rounded-md bg-white shadow-lg ring-1 ring-green focus:outline-none">
                          <div className="py-1 dividy-y divide-black">
                            {countries.map((item, index) => (
                              <Menu.Item key={index} className="dividy-y divide-black">
                                {({ active }) => (
                                  <a
                                    href={item.href}
                                    className={classNames(
                                      active
                                        ? "bg-gray-100 text-gray-900"
                                        : "text-gray-700",
                                      "block px-4 py-2 text-sm"
                                    )}
                                  >
                                    {item.text}
                                  </a>
                                )}
                              </Menu.Item>
                            ))}
                          </div>
                        </Menu.Items>
                      </Transition>
                    </>
                  )}
                </Popover>
              </div>
            </Menu>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
}
