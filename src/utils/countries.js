// import { countryDialCode } from "./dialCodes";
// const API_URL = "https://restcountries.com/v3.1";

// export const fetchCountries = async () => {
//   try {
//     const response = await fetch(`${API_URL}/all`);
//     const data = await response.json();
//     console.log(data);

//     const countriesData = data.map((country) => {
//       const countryDialInfo = countryDialCode.find(
//         (info) => info.name === country.name.common
//       );

//       const name = countryDialInfo ? countryDialInfo.name : "";
//       const phone = countryDialInfo ? countryDialInfo.dialCode : "";


//       return {
//         name: name,
//         // flag: country.flags.svg,
//         phone: phone,
//       };
//     });

//     // Sorting by country name
//     const sortedCountries = countriesData.sort((a, b) =>
//       a.name.localeCompare(b.name)
//     );

//     console.log(sortedCountries);
//     return sortedCountries;
//   } catch (error) {
//     console.error("Error fetching data:", error);
//     throw error;
//   }
// };

import { countryDialCode } from "./dialCodes";

export const fetchCountries = () => {
  try {
    const countriesData = countryDialCode.map((country) => {
      const name = country.name;
      const phone = country.dialCode;

      return {
        name: name,
        // flag: country.flags.svg, // Assuming this property is not available in the countryDialCode array
        phone: phone,
      };
    });

    // Sorting by country name
    const sortedCountries = countriesData.sort((a, b) =>
      a.name.localeCompare(b.name)
    );

    console.log(sortedCountries);
    return sortedCountries;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};



