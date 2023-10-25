import React from "react";
import { NavLink } from "react-router-dom";
import { BsTelephone, BsChevronDown } from "react-icons/bs";
import { LuMail } from "react-icons/lu";
import { Fragment, useState } from "react";
import { Menu, Transition, Popover } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import Rwanda from "../assets/icons/rwanda.svg"

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

const Header = () => {
  const [languageMenuOpen, setLanguageMenuOpen] = useState(false);
  const [countryMenuOpen, setCountryMenuOpen] = useState(false);

  return (
    <>
      <header className="hidden lg:block bg-deepGrey text-white text-opacity-70 w-full ">
        <nav
          className="mx-auto flex max-w-7xl items-center justify-between py-3 px-4 p6 lg:px-8"
          aria-label="Global"
        >
          <div className="flex dividex dividewhite divide-opacity-70 text-sm ">
            <NavLink
              to="tel:+250786416032"
              className="flex items-center gap-2 "
            >
              <BsTelephone className="text-white w-6 h-6 text-opacity-70 p-[2px] sm:h-auto" />
              <span>+250 786 416 032</span>
            </NavLink>
            <div className="border-l border-white border-opacity-70 mx-4"></div>
            <NavLink
              to="mailto:contact@afrifoodsltd.com"
              className="flex items-center gap-2"
            >
              <LuMail
                className="text-white w-6 h-6 text-opacity-70 p-[2px] sm:h-auto"
                src="/icons/mail.svg"
              />
              <span>contact@afrifoodsltd.com</span>
            </NavLink>
          </div>
          <div className="flex items-center gap-4">
            <Menu as="div" className="relative inline-block text-left">
              <div>
                <Popover as="div" className="relative">
                  {({ open }) => (
                    <>
                      <Menu.Button
                        onClick={() => setLanguageMenuOpen(!languageMenuOpen)}
                        className="inline-flex w-full justify-center gap-x-1.5 rounded-md px-3 py-2 text-sm font-semibold text-white text-opacity-70 shadow-sm ring-0"
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
                        className="inline-flex items-center w-full justify-center gap-x-1.5 rounded-md px-3 py-2 text-sm font-semibold text-white text-opacity-70 shadow-sm ring-0"
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
                        <Menu.Items className="absolute right-0 z-[2000] mt-2 w-full origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                          <div className="py-1">
                            {countries.map((item, index) => (
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
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
