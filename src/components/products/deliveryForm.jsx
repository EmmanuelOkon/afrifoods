import { useState, useEffect } from "react";
import { Listbox } from "@headlessui/react";
import { toast } from "sonner";
import { fetchCountries } from "../../utils/countries";
import { CiGlobe } from "react-icons/ci";
import Loading from "../loader";

const DeliveryForm = ({ product, selectedCount }) => {
  // console.log(product.name)
  // console.log(selectedCount)

  const [companyName, setCompanyName] = useState("");

  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [quantity, setQuantity] = useState(0);
  const [selectedProduct, setSelectedProduct] = useState({
    name: product.name,
  });
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [countries, setCountries] = useState([]);
  const [country, setCountry] = useState("");
  const [zipCode, setZipCode] = useState(0);
  const [errorMessage, setErrorMessage] = useState("");
  const [emailCheck, setEmailCheck] = useState(false);
  const [numberCheck, setNumberCheck] = useState(false);
  const [countryImg, setCountryImg] = useState("");
  const [countryPhoneCode, setCountryPhoneCode] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const sortedCountries = fetchCountries();
        setCountries(sortedCountries);

        // console.log(sortedCountries);
      } catch (error) {
        console.log("error fetching countries");
      }
    };

    fetchData();
  }, []);

  console.log(countries.length);

  const [formSubmitted, setFormSubmitted] = useState(false);

  const fieldErrorMessages = {
    companyName: "Please enter your company name.",
    email: "Please enter a valid email address.",
    phone: "Please enter a valid Phone Number.",
    address: "Please enter your Address.",
    city: "Please enter your city/town.",
    country: "Please select your country.",
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
    const phoneRegex = /^\d{1,10}$/;
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    const numberCheck = phone === "" || !phoneRegex.test(phone);
    const emailCheck = email === "" || !emailRegex.test(email);

    setNumberCheck(numberCheck);
    setEmailCheck(emailCheck);

    if (numberCheck || emailCheck) {
      if (numberCheck) {
        setErrorMessage(fieldErrorMessages.phone);
      } else {
        setErrorMessage(fieldErrorMessages.email);
      }
      return false;
    }

    setErrorMessage("");
    const requiredFields = [
      companyName,
      email,
      phone,
      selectedProduct,
      quantity,
      address,
      city,
      country,
      zipCode,
    ];
    console.log(requiredFields);
    if (
      requiredFields.some(
        (field) =>
          field === "" ||
          field === null ||
          (Array.isArray(field) && field.length === 0)
      )
    ) {
      warning();
      setLoading(false);
      return false;
    }

    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    setFormSubmitted(true);


    if (validateForm()) {
      setLoading(true);
      try {
        const fullPhoneNumber = countryPhoneCode + phone;
        const payload = {
          companyName,
          phone: fullPhoneNumber,
          email,
          product: selectedProduct.name,
          quantity: selectedCount,
          address,
          city,
          country,
          zipCode,
        };

        const response = await fetch(
          "https://apis.afrifoodsltd.com/sendOrder",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(payload),
          }
        );

        if (response.ok) {
          console.log("Payload sent to server:", payload);
          setLoading(false);
          success();

          setCompanyName("");
          setSelectedProduct("");
          setPhone("");
          setEmail("");
          setAddress("");
          setCity("");
          setCountry("");
          setZipCode("");
          setFormSubmitted(false);
        } else {
          const responseData = await response.json();
          console.error("Failed to submit the order:", responseData.message);
          setErrorMessage(
            responseData.message || "Failed to submit the order."
          );
          // setLoading(false);
        }
      } catch (error) {
        // Handle fetch error
        setLoading(false);
        console.error("Error submitting order:", error);
        setErrorMessage("Failed to submit the order. Please try again.");
      }
    }

    if (numberCheck) {
      setErrorMessage(fieldErrorMessages.phone);
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
              {formSubmitted && companyName === "" && (
                <span className="text-red-500 text-sm">
                  {fieldErrorMessages.companyName}
                </span>
              )}
            </div>
          </div>
          <div className="flex flex-col lg:flex-row lg:gap-4 w-full">
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
              {formSubmitted && emailCheck && (
                <span className="text-red-500 text-sm">
                  {fieldErrorMessages.email}
                </span>
              )}
            </div>
            <div className="flex flex-col gap-1 w-full">
              <label
                htmlFor="product"
                className="text-sm text-[#101928] font-semibold mt-3 "
              >
                Product
              </label>
              <input
                type="text"
                id="product"
                value={product.name}
                onChange={(e) =>
                  setSelectedProduct({ product: e.target.value })
                }
                placeholder="Product"
                className="appearance-none font-semibold block w-full bg-white text-greyBlack placeholder:font-medium border-2 border-gray-200 rounded-md py-3 px-2 mb3 leading-tight focus:outline-0 focus:ring-0 focus:ringlemonGreen focus:bg-white focus:border-lemonGreen placeholder:text-[#98A2B3] placeholder:text-sm"
              />
              {formSubmitted && selectedProduct === "" && (
                <span className="text-red-500 text-sm">
                  {fieldErrorMessages.product}
                </span>
              )}
            </div>
          </div>
          <div className="flex flex-col lg:flex-row lg:gap-4 w-full">
            <div className="flex flex-col gap-1 w-full">
              <label
                htmlFor="address"
                className="text-sm text-[#101928] font-semibold mt-3 "
              >
                Address
              </label>
              <input
                type={address}
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                id="address"
                placeholder="Address"
                className="appearance-none font-semibold block w-full bg-white text-greyBlack placeholder:font-medium border-2 border-gray-200 rounded-md py-3 px-2 mb3 leading-tight focus:outline-0 focus:ring-0 focus:ringlemonGreen focus:bg-white focus:border-lemonGreen placeholder:text-[#98A2B3] placeholder:text-sm"
              />
              {formSubmitted && address === "" && (
                <span className="text-red-500 text-sm">
                  {fieldErrorMessages.address}
                </span>
              )}
            </div>
            <div className="flex flex-col gap-1 w-full">
              <label
                htmlFor="quantity"
                className="text-sm text-[#101928] font-semibold mt-3 "
              >
                Quantity
              </label>
              <input
                type="number"
                id="quantity"
                value={selectedCount}
                onChange={(e) => setQuantity({ quantity: e.target.value })}
                placeholder="Product"
                className="appearance-none font-semibold block w-full bg-white text-greyBlack placeholder:font-medium border-2 border-gray-200 rounded-md py-3 px-2 mb3 leading-tight focus:outline-0 focus:ring-0 focus:ringlemonGreen focus:bg-white focus:border-lemonGreen placeholder:text-[#98A2B3] placeholder:text-sm"
              />
              {formSubmitted && quantity === 0 && (
                <span className="text-red-500 text-sm">
                  {fieldErrorMessages.quantity}
                </span>
              )}
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
                value={country}
                onChange={(selectedCountry) => {
                  setCountry(selectedCountry);
                  const selectedCountryObject = countries.find(
                    (country) => country.name === selectedCountry
                  );
                  setCountryPhoneCode(
                    selectedCountryObject ? selectedCountryObject.phone : ""
                  );
                  // setCountryImg(
                  //   selectedCountryObject ? selectedCountryObject.flag : ""
                  // );
                }}
                className="appearance-none font-semibold block w-full bg-white text-greyBlack border-2 border-gray-200 rounded-md  leading-tight focus:outline-0 focus:ring-0 focus:ringlemonGreen focus:bg-white focus:border-lemonGreen "
              >
                <Listbox.Button className="w-full text-left px2 relive ">
                  {
                    <div className=" flex items-center ">
                      {country ? (
                        <div className="bg-gray-200 py-2 px-2 w-full flex items-center">
                          <img
                            src={countryImg}
                            alt={`${countryImg} flag`}
                            className="hidden w-auto h-6 mr-2"
                          />
                          {country}
                        </div>
                      ) : (
                        <>
                          <div className="py-2 px-2 w-full flex items-center">
                            <CiGlobe
                              className="w-auto h-6 mr-2"
                              aria-hidden="true"
                            />
                            <span className=" text-sm font-medium text-[#98A2B3] ">
                              Country
                            </span>
                          </div>
                        </>
                      )}
                    </div>
                  }
                </Listbox.Button>

                <Listbox.Options className="w-fit mt-1 bg-slate-200 bg-opacity-50 text-gray-800 max-h-[300px] overflow-auto border border-gray-300 rounded shadow-md focus:outline-none scrollbar-none divide-y-2 divide-white ">
                  {countries.map((country, index) => (
                    <Listbox.Option
                      key={index}
                      value={country.name}
                      className={({ active }) =>
                        `py-2 px-2 hover:cursor-pointer ${
                          active ? "bg-lemonGreen text-white" : ""
                        }`
                      }
                    >
                      {({ selected, active }) => (
                        <div className={`flex items-center`}>
                          <div className="hidden bg-gray200 p-1 w-14 mr-2 rounded fle justify-center ">
                            <img
                              src={country.flag}
                              alt={`${country.name} flag`}
                              className="w-auto h-6"
                            />
                          </div>
                          <span
                            className={`${
                              (selected
                                ? "font-semibold bg-black "
                                : "font-normal",
                              "py-2")
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
              {formSubmitted && country === "" && (
                <span className="text-red-500 text-sm">
                  {fieldErrorMessages.country}
                </span>
              )}
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
              {formSubmitted && city === "" && (
                <span className="text-red-500 text-sm">
                  {fieldErrorMessages.city}
                </span>
              )}
            </div>
          </div>
          <div className="flex flex-col lg:flex-row lg:gap-4 w-full">
            <div className="flex flex-col gap-1 w-full">
              <label
                htmlFor="phone"
                className="text-sm text-[#101928] font-semibold mt-3 "
              >
                Phone
              </label>
              <div className="flex items-center bg-gray-100 rounded-md">
                {countryPhoneCode ? (
                  <span className="bgray-100 px-1">{countryPhoneCode}</span>
                ) : (
                  <span className="bgray-100 px-1">+000</span>
                )}

                <input
                  type="text"
                  id="phone"
                  // value={countryPhoneCode + phone}
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="123-4567-890"
                  className="appearance-none font-semibold bock w-full bg-white text-greyBlack placeholder:font-medium border-2 border-gray-200 rounded-md py-3 ml-1 px-2 leading-tight focus:outline-0 focus:ring-0 focus:ringlemonGreen focus:bg-white focus:border-lemonGreen placeholder:text-[#98A2B3] placeholder:text-sm"
                />
              </div>
              {formSubmitted && numberCheck && (
                <span className="text-red-500 text-sm">
                  {fieldErrorMessages.phone}
                </span>
              )}
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
              {formSubmitted &&
                (zipCode === 0 || zipCode.toString().length < 5) && (
                  <span className="text-red-500 text-sm">
                    {fieldErrorMessages.zipCode}
                  </span>
                )}
            </div>
          </div>
          <button
            type="submit"
            className={
              (loading
                ? " w[190px] h-[52px] bordergreen"
                : "bg-green bordertransparent text-white hover:bg-white hover:text-green ",
              " text-base rounded-md focus:outline-none focus:shadow-outline border2 mt-5 w-full mx-auto font-semibold transition-all")
            }
          >
            {loading ? (
              <>
                <div className="bg-white border-2 border-green rounded-md h-[52px] w[190px] flex items-center justify-center">
                  <Loading />
                </div>
              </>
            ) : (
              <div className=" py-3 px-10 rounded-md bg-green text-white hover:bg-lemonGreen">
                {/* Continue */}
                Place Order
              </div>
            )}
          </button>
          {/* <button
            type="submit"
            className="bg-green hover:bg-lemonGreen  mt-5 w-full text-white py-3 rounded-md"
          >
            hey
          </button> */}
        </form>
      </div>
    </>
  );
};

export default DeliveryForm;
