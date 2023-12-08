import { useState, useEffect } from "react";
import { Listbox } from "@headlessui/react";
import { toast } from "sonner";
import { fetchCountries } from "../../utils/countries";
import { CiGlobe } from "react-icons/ci";

const DeliveryForm = () => {



  const [companyName, setCompanyName] = useState("");
  const [lastName, setLastName] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [email, setEmail] = useState("");
  const [product, setProduct] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [streetAddress, setStreetAddress] = useState("");
  const [city, setCity] = useState("");
  const [countries, setCountries] = useState([]);
  const [zipCode, setZipCode] = useState(0);
  const [selectedCountry, setSelectedCountry] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [emailCheck, setEmailCheck] = useState(false);
  const [numberCheck, setNumberCheck] = useState(false);



  useEffect(() => {
    const fetchData = async () => {
      try {
        const sortedCountries = await fetchCountries();
        setCountries(sortedCountries);
        console.log(sortedCountries);
      } catch (error) {
        // Handle error
      }
    };

    fetchData();
  }, []);

  console.log(countries);

  const [formSubmitted, setFormSubmitted] = useState(false);

  const fieldErrorMessages = {
    companyName: "Please enter your company name.",
    lastName: "Please enter your last name.",
    mobileNumber: "Please enter a valid mobile number.",
    email: "Please enter a valid email address.",
    streetAddress: "Please enter your street address.",
    city: "Please enter your city/town.",
    selectedCountry: "Please select your country.",
    zipCode: "Please enter your zip code.",
  };

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
    const mobileNumberRegex = /^[0-9]\d{2}[2-9](?!11)\d{6}$/;
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    // Check if mobile number is empty or does not match the regex
    const numberCheck = mobileNumber === "" || !mobileNumberRegex.test(mobileNumber);
    const emailCheck = email === "" || !emailRegex.test(email);

    setNumberCheck(numberCheck);
    setEmailCheck(emailCheck);

    if (numberCheck || emailCheck) {
      if (numberCheck) {
        setErrorMessage(fieldErrorMessages.mobileNumber);
      } else {
        setErrorMessage(fieldErrorMessages.email);
      }
      return false;
    }


    setErrorMessage(""); // Clear error message if all validations pass


    const requiredFields = [
      companyName,
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

      setCompanyName("");
      setLastName("");
      setMobileNumber("");
      setEmail("");
      setStreetAddress("");
      setCity("");
      setSelectedCountry("");
      setZipCode("");
      setFormSubmitted(false);
    }

    if (numberCheck) {
      setErrorMessage(fieldErrorMessages.mobileNumber);
      return false;
    }

    if (emailCheck) {
      setErrorMessage(fieldErrorMessages.email);

      return false;
    }



  };

  return (
    <>
      <div className="h-fit w-full">
        <h2>Delivery Information</h2>
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col lg:flex-row lg:gap-4 w-full">
            <div className="flex flex-col gap-1 w-full">
              <label
                htmlFor="companyName"
                className="text-sm text-[#101928] font-semibold mt-3 "
              >
                Company Name
              </label>
              <input
                id="companyName"
                type={companyName}
                value={companyName}
                onChange={(e) => setCompanyName(e.target.value)}
                placeholder="Company Name"
                className="appearance-none font-semibold block w-full bg-white text-greyBlack placeholder:font-medium border-2 border-gray-200 rounded-md py-3 px-2 mb3 leading-tight focus:outline-0 focus:ring-0 focus:ringlemonGreen focus:bg-white focus:border-lemonGreen placeholder:text-[#98A2B3] capitalize placeholder:text-sm"
              />
              {
                formSubmitted && companyName === "" && (
                  <span className="text-red-500 text-sm">
                    {fieldErrorMessages.companyName}
                  </span>
                )
              }
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
              {
                formSubmitted && lastName === "" && (
                  <span className="text-red-500 text-sm">
                    {fieldErrorMessages.lastName}
                  </span>
                )
              }
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
                type="text"
                id="mobileNumber"
                value={mobileNumber}
                onChange={(e) => setMobileNumber(e.target.value)}
                placeholder="Mobile number"
                className="appearance-none font-semibold block w-full bg-white text-greyBlack placeholder:font-medium border-2 border-gray-200 rounded-md py-3 px-2 mb3 leading-tight focus:outline-0 focus:ring-0 focus:ringlemonGreen focus:bg-white focus:border-lemonGreen placeholder:text-[#98A2B3] placeholder:text-sm"
              />
              {
                formSubmitted && numberCheck && (
                  <span className="text-red-500 text-sm">
                    {fieldErrorMessages.mobileNumber}
                  </span>
                )
              }
            </div>
            <div className="flex flex-col gap-1 w-full">
              <label
                htmlFor="emailAddress"
                className="text-sm text-[#101928] font-semibold mt-3"
              >
                Email Address
              </label>
              <input
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                id="emailAddress"
                placeholder="Enter your address"
                className="appearance-none font-semibold block w-full bg-white text-greyBlack placeholder:font-medium border-2 border-gray-200 rounded-md py-3 px-2 mb3 leading-tight focus:outline-0 focus:ring-0 focus:ringlemonGreen focus:bg-white focus:border-lemonGreen placeholder:text-[#98A2B3] placeholder:text-sm"
              />
              {
                formSubmitted && emailCheck && (
                  <span className="text-red-500 text-sm">
                    {fieldErrorMessages.email}
                  </span>
                )
              }
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
              {
                formSubmitted && streetAddress === "" && (
                  <span className="text-red-500 text-sm">
                    {fieldErrorMessages.streetAddress}
                  </span>
                )
              }
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
              {
                formSubmitted && city === "" && (
                  <span className="text-red-500 text-sm">
                    {fieldErrorMessages.city}
                  </span>
                )
              }
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
                className="appearance-none font-semibold block w-full bg-white text-greyBlack border-2 border-gray-200 rounded-md  leading-tight focus:outline-0 focus:ring-0 focus:ringlemonGreen focus:bg-white focus:border-lemonGreen "
              >
                <Listbox.Button className="w-full text-left px2 relive ">
                  {
                    <div className=" flex items-center ">
                      {selectedCountry ? (
                        <div className="bg-gray-200 py-2 px-2 w-full flex items-center">
                          <img
                            src={
                              countries.find(
                                (country) => country.name === selectedCountry
                              )?.flag
                            }
                            alt={`${selectedCountry} flag`}
                            className="w-auto h-6 mr-2"
                          />
                          {selectedCountry}
                        </div>
                      ) : (
                        <>
                          <div className="py-2 px-2 w-full flex items-center">
                            <CiGlobe
                              className="w-auto h-6 mr-2"
                              aria-hidden="true"
                            />
                            <span className=" text-sm font-medium text-[#98A2B3] ">Country</span>
                          </div>
                        </>
                      )}
                    </div>
                  }
                </Listbox.Button>


                <Listbox.Options className="w-fit mt-1 absol bg-slate-200 text-gray-800 max-h-[300px] overflow-auto border border-gray-300 rounded shadow-md focus:outline-none scrollbar-none ">
                  {countries.map((country, index) => (
                    <Listbox.Option
                      key={index}
                      value={country.name}
                      className={({ active }) =>
                        `py-2 px-2 hover:cursor-pointer ${active ? "bg-lemonGreen text-white" : ""
                        }`
                      }
                    >
                      {({ selected, active }) => (
                        <div className={`flex items-center`}>
                          <div className="bg-gray200 p-1 w-14 mr-2 rounded flex justify-center ">
                            <img
                              src={country.flag}
                              alt={`${country.name} flag`}
                              className="w-auto h-6"
                            />
                          </div>
                          <span
                            className={`${selected ? "font-semibold" : "font-normal"
                              }`}
                          >
                            {country.name}
                          </span>
                        </div>
                      )}
                    </Listbox.Option>
                  ))}
                </Listbox.Options>
              </Listbox>
              {
                formSubmitted && selectedCountry === "" && (
                  <span className="text-red-500 text-sm">
                    {fieldErrorMessages.selectedCountry}
                  </span>
                )
              }
            </div>
            <div className="flex flex-col gap-1 w-full">
              <label
                htmlFor="zipCode"
                className="text-sm text-[#101928] font-semibold mt-3"
              >
                Zip Code
              </label>
              <input
                type="number"
                value={zipCode}
                onChange={(e) => setZipCode(e.target.value)}
                id="zipCode"
                placeholder="Zip Code"
                className="appearance-none font-semibold block w-full bg-white text-greyBlack placeholder:font-medium border-2 border-gray-200 rounded-md py-3 px-2 mb3 leading-tight focus:outline-0 focus:ring-0 focus:ringlemonGreen focus:bg-white focus:border-lemonGreen placeholder:text-[#98A2B3] capitalize placeholder:text-sm"
              />
              {
                formSubmitted && zipCode === "" && (
                  <span className="text-red-500 text-sm">
                    {fieldErrorMessages.zipCode}
                  </span>
                )
              }
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
