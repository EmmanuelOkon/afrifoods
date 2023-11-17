import { useState, useEffect } from "react";
import { Listbox } from "@headlessui/react";
import { toast } from "sonner";
import { fetchCountries } from "../../utils/countries";

const DeliveryForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [email, setEmail] = useState("");
  const [streetAddress, setStreetAddress] = useState("");
  const [city, setCity] = useState("");
  const [countries, setCountries] = useState([]);
  const [zipCode, setZipCode] = useState("");
  const [selectedCountry, setSelectedCountry] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const countryNames = await fetchCountries();
        setCountries(countryNames);
      } catch (error) {
        // Handle error
      }
    };

    fetchData();
  }, []);

  const [formSubmitted, setFormSubmitted] = useState(false);

  const warning = () => {
    toast.error("Please fill in all required fields", {
      position: "top-center",
      autoClose: 5000,
      closeOnClick: true,
      pauseOnHover: false,
    });
  };

  const success = () => {
    toast.success("Your Order has been placed successfully", {
      position: "top-center",
      autoClose: 3000,
      closeOnClick: true,
      pauseOnHover: false,
    });
  };

  const validateForm = () => {
    const requiredFields = [
      firstName,
      lastName,
      mobileNumber,
      email,
      streetAddress,
      city,
      selectedCountry,
      zipCode,
    ];
    if (requiredFields.some((field) => field === "")) {
      warning();
      return false;
    }

    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);

    if (validateForm()) {
      success();
      // Proceed with submission or further processing
      // Reset form fields
      setFirstName("");
      setLastName("");
      setMobileNumber("");
      setEmail("");
      setStreetAddress("");
      setCity("");
      setSelectedCountry("");
      setZipCode("");
      setFormSubmitted(false);
    }

    // formSubmitted && validateForm();
  };

  return (
    <>
      <div className="h-fit w-full">
        <h2>Delivery Information</h2>
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col lg:flex-row lg:gap-4 w-full">
            <div className="flex flex-col gap-1 w-full">
              <label
                htmlFor="firstName"
                className="text-sm text-[#101928] font-semibold mt-3 "
              >
                First Name
              </label>
              <input
                id="firstName"
                type={firstName}
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                placeholder="First Name"
                className="appearance-none font-semibold block w-full bg-white text-greyBlack placeholder:font-medium border-2 border-gray-200 rounded-md py-3 px-2 mb3 leading-tight focus:outline-0 focus:ring-0 focus:ringlemonGreen focus:bg-white focus:border-lemonGreen placeholder:text-[#98A2B3] capitalize placeholder:text-sm"
              />
            </div>
            <div className="flex flex-col gap-1 w-full">
              <label
                htmlFor="lastName"
                className="text-sm text-[#101928] font-semibold mt-3"
              >
                Last Name
              </label>
              <input
                type={lastName}
                value={lastName}
                id="lastName"
                placeholder="Last Name"
                onChange={(e) => setLastName(e.target.value)}
                className="appearance-none font-semibold block w-full bg-white text-greyBlack placeholder:font-medium border-2 border-gray-200 rounded-md py-3 px-2 mb3 leading-tight focus:outline-0 focus:ring-0 focus:ringlemonGreen focus:bg-white focus:border-lemonGreen placeholder:text-[#98A2B3] capitalize placeholder:text-sm"
              />
            </div>
          </div>

          <div className="flex flex-col lg:flex-row lg:gap-4 w-full">
            <div className="flex flex-col gap-1 w-full">
              <label
                htmlFor="mobileNumber"
                className="text-sm text-[#101928] font-semibold mt-3 "
              >
                Mobile Number
              </label>
              <input
                type={mobileNumber}
                id="mobileNumber"
                value={mobileNumber}
                onChange={(e) => setMobileNumber(e.target.value)}
                placeholder="Mobile number"
                className="appearance-none font-semibold block w-full bg-white text-greyBlack placeholder:font-medium border-2 border-gray-200 rounded-md py-3 px-2 mb3 leading-tight focus:outline-0 focus:ring-0 focus:ringlemonGreen focus:bg-white focus:border-lemonGreen placeholder:text-[#98A2B3] placeholder:text-sm"
              />
            </div>
            <div className="flex flex-col gap-1 w-full">
              <label
                htmlFor="emailAddress"
                className="text-sm text-[#101928] font-semibold mt-3"
              >
                Email Address
              </label>
              <input
                type={email}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                id="emailAddress"
                placeholder="Enter your address"
                className="appearance-none font-semibold block w-full bg-white text-greyBlack placeholder:font-medium border-2 border-gray-200 rounded-md py-3 px-2 mb3 leading-tight focus:outline-0 focus:ring-0 focus:ringlemonGreen focus:bg-white focus:border-lemonGreen placeholder:text-[#98A2B3] placeholder:text-sm"
              />
            </div>
          </div>
          <div className="flex flex-col lg:flex-row lg:gap-4 w-full">
            <div className="flex flex-col gap-1 w-full">
              <label
                htmlFor="streetAddress"
                className="text-sm text-[#101928] font-semibold mt-3 "
              >
                Street Address
              </label>
              <input
                type={streetAddress}
                value={streetAddress}
                onChange={(e) => setStreetAddress(e.target.value)}
                id="streetAddress"
                placeholder="Street Address"
                className="appearance-none font-semibold block w-full bg-white text-greyBlack placeholder:font-medium border-2 border-gray-200 rounded-md py-3 px-2 mb3 leading-tight focus:outline-0 focus:ring-0 focus:ringlemonGreen focus:bg-white focus:border-lemonGreen placeholder:text-[#98A2B3] placeholder:text-sm"
              />
            </div>
            <div className="flex flex-col gap-1 w-full">
              <label
                htmlFor="city"
                className="text-sm text-[#101928] font-semibold mt-3"
              >
                City/Town
              </label>
              <input
                type={city}
                value={city}
                onChange={(e) => setCity(e.target.value)}
                id="city"
                placeholder="City/Town"
                className="appearance-none font-semibold block w-full bg-white text-greyBlack placeholder:font-medium border-2 border-gray-200 rounded-md py-3 px-2 mb3 leading-tight focus:outline-0 focus:ring-0 focus:ringlemonGreen focus:bg-white focus:border-lemonGreen placeholder:text-[#98A2B3] capitalize placeholder:text-sm"
              />
            </div>
          </div>
          <div className="flex flex-col lg:flex-row lg:gap-4 w-full">
            <div className="flex flex-col gap-1 w-full">
              <label
                htmlFor="country"
                className="text-sm text-[#101928] font-semibold mt-3"
              >
                Country
              </label>
              <Listbox
                as={"div"}
                id="country"
                value={selectedCountry}
                onChange={(e) => setSelectedCountry(e)}
                className="appearance-none font-semibold block w-full bg-white text-greyBlack placeholder:font-medium border-2 border-gray-200 rounded-md py-3 mb3 leading-tight focus:outline-0 focus:ring-0 focus:ringlemonGreen focus:bg-white focus:border-lemonGreen placeholder:text-sm"
              >
                <Listbox.Button className="w-full text-left px-2 relive ">
                  {selectedCountry || "Country"}
                </Listbox.Button>
                <Listbox.Options className="w-fit mt-1 absol bg-white text-gray-800 max-h-[300px] overflow-auto border border-gray-300 rounded-md shadow-md focus:outline-none scrollbar-none ">
                  {countries.map((country) => (
                    <Listbox.Option
                      key={country}
                      value={country}
                      className={({ active }) =>
                        `py-2 px-4 ${active ? "bg-lemonGreen text-white" : ""}`
                      }
                    >
                      {({ selected, active }) => (
                        <div
                          className={`${
                            selected ? "font-semibold" : "font-normal"
                          }`}
                        >
                          {country}
                        </div>
                      )}
                    </Listbox.Option>
                  ))}
                </Listbox.Options>
              </Listbox>
            </div>
            <div className="flex flex-col gap-1 w-full">
              <label
                htmlFor="zipCode"
                className="text-sm text-[#101928] font-semibold mt-3"
              >
                Zip Code
              </label>
              <input
                type={zipCode}
                value={zipCode}
                onChange={(e) => setZipCode(e.target.value)}
                id="zipCode"
                placeholder="Zip Code"
                className="appearance-none font-semibold block w-full bg-white text-greyBlack placeholder:font-medium border-2 border-gray-200 rounded-md py-3 px-2 mb3 leading-tight focus:outline-0 focus:ring-0 focus:ringlemonGreen focus:bg-white focus:border-lemonGreen placeholder:text-[#98A2B3] capitalize placeholder:text-sm"
              />
            </div>
          </div>
          <button
            type="submit"
            className="bg-green hover:bg-lemonGreen  mt-5 w-full text-white py-3 rounded-md"
          >
            Continue
          </button>
        </form>
      </div>
    </>
  );
};

export default DeliveryForm;
