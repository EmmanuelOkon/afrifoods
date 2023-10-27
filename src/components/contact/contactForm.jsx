import React, { useState } from "react";

const ContactForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // handle form submission here
  };

  return (
    <>
      <div className="px-[20px]  xl:px-[100px] md:bg-white mx-auto">
        <div className="py-[3rem] sm:py-6 lg:py-10">
          <div className="pb-[4rem] text-center max-w-2xl mx-auto ">
            <h1 className="text-greyBlack text-3xl lg:text-5xl font-bold lg:trcking-wider lg:leading-none">
              Get in touch with us
            </h1>
            <div className="flex w-[120px] text-center mx-auto py-3 ">
              <span className="border-2 border-lemonGreen w-full"></span>
            </div>
            <div className="mx-auto max-w-[500px]">
              <p className="text-[#475367] pt-3 text-base font-medium  ">
                Do you have any questions? Don't hesitate to contact us. We will
                get back to you as quickly as possible.
              </p>
            </div>
          </div>
          <div className="flx max-w-[780px] mx-auto ">
            <form onSubmit={handleSubmit}>
              <div className="flex flex-wrap justify-between ">
                <div className="w-full md:w-[48%] mb-6 md:mb-0">
                  <label
                    className="block tracking-wide text-greyBlack text-sm font-semibold mb-2"
                    htmlFor="first-name"
                  >
                    First Name
                  </label>
                  <input
                    className="appearance-none font-semibold block w-full bg-white text-greyBlack placeholder:font-medium border-2 border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-0 focus:ring-0 focus:ringlemonGreen focus:bg-white focus:border-lemonGreen placeholder:text-[#98A2B3]"
                    id="first-name"
                    type="text"
                    placeholder="First Name"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                  />
                </div>
                <div className="w-full md:w-[48%] ">
                  <label
                    className="block tracking-wide text-greyBlack text-sm font-semibold mb-2"
                    htmlFor="last-name"
                  >
                    Last Name
                  </label>
                  <input
                   className="appearance-none font-semibold block w-full bg-white text-greyBlack placeholder:font-medium border-2 border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-0 focus:ring-0 focus:ringlemonGreen focus:bg-white focus:border-lemonGreen placeholder:text-[#98A2B3]"
                    id="last-name"
                    type="text"
                    placeholder="Last Name"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                  />
                </div>
              </div>
              <div className="w-full mb-6 md:mb-0">
                <label
                  className="block tracking-wide text-greyBlack text-sm font-semibold mb-2"
                  htmlFor="email"
                >
                  Email Address
                </label>
                <input
                  className="appearance-none font-semibold block w-full bg-white text-greyBlack placeholder:font-medium border-2 border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-0 focus:ring-0 focus:ringlemonGreen focus:bg-white focus:border-lemonGreen placeholder:text-[#98A2B3]"
                  id="email"
                  type="email"
                  placeholder="Email Address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="w-full mb-6 md:mb-0">
                <label
                  className="block tracking-wide text-greyBlack text-sm font-semibold mb-2"
                  htmlFor="phone"
                >
                  Phone Number
                </label>
                <input
                  className="appearance-none font-semibold block w-full bg-white text-greyBlack placeholder:font-medium border-2 border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-0 focus:ring-0 focus:ringlemonGreen focus:bg-white focus:border-lemonGreen placeholder:text-[#98A2B3]"
                  id="phone"
                  type="tel"
                  placeholder="Phone Number"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>
              <div className="w-full mb-6 md:mb-0">
                <label
                  className="block tracking-wide text-greyBlack text-sm font-semibold mb-2"
                  htmlFor="message"
                >
                  Message
                </label>
                <textarea
                  className="appearance-none font-semibold block w-full bg-white text-greyBlack placeholder:font-medium border-2 border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-0 focus:ring-0 focus:ringlemonGreen focus:bg-white focus:border-lemonGreen placeholder:text-[#98A2B3] resize-none"
                  cols={30}
                  rows={10}
                  id="message"
                  placeholder="Type your message..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                ></textarea>
              </div>
              <div className="mt-8 text-center">
                <button
                  className="bg-green text-white font-semibold w-fit py-3 text-base px-10 rounded focus:outline-none focus:shadow-outline border-2 border-green hover:bg-white hover:text-green transition-all"
                  type="submit"
                >
                  Send message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactForm;
