import { Fragment, useState } from "react";
import { Dialog, Popover } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import Logo from "../../src/assets/images/logo.png";
import { HiOutlineMenuAlt3 as MenuIcon } from "react-icons/hi";
import { NavLink } from "react-router-dom";

const navigation = [
  { name: "Home", href: "/" },
  { name: "Products", href: "/products" },
  { name: "About Us", href: "/about" },
  { name: "Media", href: "/media" },
  { name: "Sustainability", href: "/sustainability" },
  { name: "Contact Us", href: "/contact" },
  { name: "FAQ", href: "/faq" },
];


export default function TopNav() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white drop-shadow-md sticky z-[1000] top-0 w-full">
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
              target=""
              className={({ isActive }) => {
                return (
                  "px-2 py-2 text-sm font-medium font-raleway " +
                  (isActive
                    ? " text-green font-semibold text-lg"
                    : "text-blue text-opacity-80 border-blue border-opacity-0 hover:border-orange hover:text-orange hover-text-orange")
                );
              }}
            >
              {item.name}
            </NavLink>
          ))}
        </Popover.Group>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <a
            target="_blank"
            rel="noreferrer"
            href="/"
            className="font-raleway py-2 px-5 lg:px-6 text-base md:px-3 md:text-xs lg:text-lg font-medium rounded text-white bg-green outline-none hover:bg-lemonGreen lg:font-medium "
          >
            Get Started
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
          <div className="flex items-center justify-between">
            <div className="flex lg:flex-1">
              <NavLink to="/">
                <img
                  className="w-[50px] lg:h-full lg:w-[80px] sm:h-auto"
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
            <div className="-my-6 divide-y divide-fadeOrange">
              <div className="space-y-2 py-6">
                {navigation.map((item) => (
                  <Fragment key={item.name}>
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
