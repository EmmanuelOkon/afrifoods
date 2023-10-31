import { FiMail } from "react-icons/fi";
import { BsTelephone } from "react-icons/bs";
import { BiMap } from "react-icons/bi";
import { NavLink } from "react-router-dom";

const features = [
  {
    name: "Email",
    summary: "Our friendly team is here to help",
    href: "mailto:contact@afrifoodsltd.com",
    info: "contact@afrifoodsltd.com",
    icon: FiMail,
  },
  {
    name: "Phone",
    summary: "Contact our help line",
    href: "tel:+250786416032",
    info: "+250 786 416 032",
    icon: BsTelephone,
  },
  {
    name: "Headquarters",
    summary: "Visit our office",
    address: "KK 621 St, Kigali, Rwanda, Gikondo",
    icon: BiMap,
  },
];

const ContactMap = () => {
  return (
    <>
      <div className="max-w-[1000px] mx-auto py-10 ">
        <iframe
          title="Google Maps"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3987.457213797721!2d30.078872474237553!3d-1.9712435367568315!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x19dca66dce1ba487%3A0xe8ca8a3794d6ac9c!2sKK%20621%20St%2C%20Kigali%2C%20Rwanda!5e0!3m2!1sen!2sng!4v1698381474099!5m2!1sen!2sng"
          className="w-full  lg:h-[500px]"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.name} className=" pb-2 lg:pb-8">
                <div className="text-center bg-white rounded-lg px-4 md:px-6">
                  <div className=" h-fit lg:h-[18rem] py-6 lg:py-[34px] ">
                    <div className="flex justify-center  ">
                      {feature.icon && (
                        <span className="p-2 bg-[#E9F0EB] rounded-full ">
                          <feature.icon
                            className="w-8 h-8 p-1 text-green "
                            aria-hidden="true"
                          />
                        </span>
                      )}
                    </div>
                    <h3 className="pt-4 lg:pt-6 text-[#1D2739] text-[18px] md:text-[20px] font-semibold flex-shrink-0 tracking-tighter tracking-tght">
                      {feature.name}
                    </h3>
                    <p className="mt-5 mb-4 text-sm text-[#475367] tracking-wider lg:leading-normal font-light">
                      {feature.summary}
                    </p>
                    {feature.href ? (
                      <NavLink
                        to={feature.href}
                        className="text-green hover:text-lemonGreen hover:underline font-semibold cursor-pointer transition-all ease-in-out duration-500  "
                      >
                        {feature.info}
                      </NavLink>
                    ) : (
                      <span className="mt-6">
                        <p className="text-green font-semibold mt-4 flex-shrink-0">
                          {feature.address}
                        </p>
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactMap;
