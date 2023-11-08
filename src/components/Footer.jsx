import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "../assets/icons/whiteLogo.svg";
import { FaXTwitter, FaLinkedinIn } from "react-icons/fa6";
import { LuMail } from "react-icons/lu";

const navigation = {
  solutions: [
    { name: "Marketing", href: "#" },
    { name: "Analytics", href: "#" },
    { name: "Commerce", href: "#" },
    { name: "Insights", href: "#" },
  ],
  links: [
    { name: "Home", href: "/" },
    { name: "Support", href: "/support" },
    { name: "Products", href: "/products" },
    { name: "Terms of Service", href: "/termsofservice" },
    { name: "Sustainability", href: "/sustainability" },
    { name: "Privacy Policy", href: "/privacypolicy" },
    { name: "About Us", href: "/about" },
    { name: "FAQ", href: "/faq" },
    { name: "Contact Us", href: "/contact" },
  ],
  company: [
    { name: "About", href: "#" },
    { name: "Blog", href: "#" },
    { name: "Jobs", href: "#" },
    { name: "Press", href: "#" },
    { name: "Partners", href: "#" },
  ],
  legal: [
    { name: "Claim", href: "#" },
    { name: "Privacy", href: "#" },
    { name: "Terms", href: "#" },
  ],
  social: [
    {
      name: "Twitter",
      href: "https://twitter.com/afrifoodsrw",
      icon: FaXTwitter,
    },
    {
      name: "Instagram",
      href: "https://www.instagram.com/afrifoodsrw/",
      icon: (props) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      name: "Facebook",
      href: "https://web.facebook.com/people/AFri-Foods-Rwanda/100063930674684/",
      icon: (props) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },

    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/company/afri-foods-rwanda/",
      icon: FaLinkedinIn,
    },
  ],
};

const Footer = () => {
  return (
    <footer className="bg-deepGreen" aria-labelledby="footer-heading">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="grid md:grid-cols-2 gap-8 xl:col-span-2">
            <div className="md:grid md:grid-cols-2 md:gap-4">
              <div>
                <img
                  alt="logo"
                  width={14}
                  height={14}
                  src={Logo}
                  className="w-[30%] lg:w-[60%] h-auto"
                />
                <div className="my-4 text-white">
                  <p className="block flex-shrink-0 font-normal">
                    KK 621 St, Kigali, Rwanda, Gikondo
                  </p>
                  <NavLink
                    href="tel:+250786416032"
                    className="block flex-shrink-0"
                  >
                    +250 786 416 032
                  </NavLink>
                  <NavLink
                    to="mailto:afrifoodsrwanda@gmail.com"
                    className="block flex-shrink-0"
                  >
                    afrifoodsrwanda@gmail.com
                  </NavLink>
                </div>
                <div className="  ">
                  <p className="text-white pb-2">Follow us</p>
                  <div className="flex items-center space-x-4">
                    {navigation.social.map((item) => (
                      <NavLink
                        key={item.name}
                        to={item.href}
                        className="text-white hover:textgray-500 bg-green500 hover:bg-lemonGreen p-2 rounded-full"
                      >
                        <item.icon className="h-6 w-6 " aria-hidden="true" />
                      </NavLink>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 md:gap-8">
              <div className="mt-12 md:mt-0">
                <h3 className="text-2xl font-semibold text-white tracking-wider">
                  Useful Links
                </h3>
                <div className="h-[200px] md:w-[340px]  ">
                  <ul className="mt-4 space-y4 flex flex-wrap justify-between">
                    {navigation.links.map((item) => (
                      <li key={item.name} className="basis-1/2 py-[0.5rem] ">
                        <NavLink
                          to={item.href}
                          className="text-base font-normal text-white hover:text-lemonGreen"
                        >
                          {item.name}
                        </NavLink>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-8 xl:mt-0">
            <h3 className="text-xl lg:text-2xl font-semibold text-white tracking-wider">
              Subscribe to our Newsletter
            </h3>
            <p className="mt-4 text-base text-white">
              Signup to our newsletter to get update information, news, insight
              or promotions.
            </p>
            <form className="mt-4 ">
              <div className="flex items-center border border-gray-300 rounded-md px-3 py-1 mb-4">
                <LuMail className="text-gray-400 w-6 h-6 text-opacity-70 sm:h-auto" />
                <input
                  type="email"
                  name="email-address"
                  id="email-address"
                  autoComplete="email"
                  required
                  className="appearance-none min-w-0 w-full bg-transparent shadow-sm text-base text-white placeholder-gray-500 outline-0 ring-0 border-0 focus:outline-0 focus:ring-0 focus:placeholder-gray-400"
                  placeholder="Enter your email"
                />
              </div>
              <div className="mt-3 rounded-md sm:mt-0 sm3 sm:flex-shrink-0">
                <button
                  type="submit"
                  className="w-1/3 bg-green flex items-center justify-center border border-transparent rounded-md py-2 px-4 text-base font-medium text-white hover:bg-lemonGreen focus:ring-0"
                >
                  Subscribe
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="mt-8 border-t border-grey500 pt-8 flex items-center justify-center">
          <p className="mt-8 text-base text-grey500 md:mt-0">
            &copy; 2023 AfrifoodLtd. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
