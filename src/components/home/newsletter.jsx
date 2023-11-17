import { LuMail } from "react-icons/lu";
import { useState } from "react";
import { toast } from "sonner";

const Newsletter = () => {
  const [email, setEmail] = useState("");

  const warning = () =>
    toast.warning("Please enter a valid email address", {
      position: "top-center",
      autoClose: 3000,
      closeOnClick: true,
      pauseOnHover: false,
    });

  const success = () =>
    toast.success("Thank you for subscribing to our newsletter", {
      position: "top-center",
      autoClose: 3000,
      closeOnClick: true,
      pauseOnHover: false,
    });

  function isValidEmailFormat(email) {
    const regex = /^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return regex.test(email);
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email || email.trim() === "") {
      warning("Please enter a valid email address");
      return;
    } else if (!email.includes("@")) {
      warning("Email address must contain '@'");
      return;
    } else if (!isValidEmailFormat(email)) {
      warning("Invalid email format");
      return;
    } else {
      success("Thank you for subscribing to our newsletter");
      setEmail("");
      // Proceed with submission or further processing
    }
  };

  return (
    <div className="pt-4 md:mt-10 ">
      <div className="bg-[#F7F9FC] py-4 px-4">
        <div className="text-center max-w-[520px] mx-auto py-4 lg:py-8  ">
          <h1 className="text-[#1D2739] text-[20px] lg:text-3xl font-bold ">
            Subscribe To Our Newsletter
          </h1>
          <div className="flex w-[120px] text-center mx-auto py-3 ">
            <span className="border-2 border-lemonGreen w-full"></span>
          </div>
          <p className="text-[#475367] text-base py-6 max-w[360px] mx-auto">
            Subscribe to Our Newsletter for the Latest ICT Insights and Updates
          </p>
          <form
            className="mt-4 gap-4 flex flex-col md:flex-row items-center justify-between"
            onSubmit={handleSubmit}
          >
            <div className="flex w-full items-center border-2 border-gray-300 rounded-md px-3 border-gray-00 focus:border-lemonGreen">
              <LuMail className="text-gray-400 w-6 h-6 text-opacity-70 sm:h-auto" />
              <input
                type={email}
                autoComplete="off"
                className="appearance-none min-w0 w-full py-2 pl-2 bg-[#F7F9FC] active:bg-[#F7F9FC] focus:bg-transparent text-base text-deepGrey placeholder-gray-400 outline-0 ring-0 focus:outline-0 focus:ring-0 focus:placeholder-gray-500   placeholder:text-[#98A2B3] "
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="mt-3 w-full md:w-fit sm:mt-0 rounded-md sm:flex-shrink-0">
              <button
                type="submit"
                className="w-full  bg-green flex md:justify-end items-center justify-center border border-transparent rounded-md py-2 px-4 text-base font-medium text-white hover:bg-lemonGreen focus:ring-0"
              >
                Subscribe now
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
