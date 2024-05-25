import { countryDialCode } from "./dialCodes";
const API_URL = "https://restcountries.com/v3.1";

export const fetchCountries = async () => {
  try {
    const response = await fetch(`${API_URL}/all`);
    const data = await response.json();
    

    const countriesData = data.map((country) => {
      const countryDialInfo = countryDialCode.find(
        (info) => info.name === country.name.common
      );

      const name = countryDialInfo ? countryDialInfo.name : "";
      const phone = countryDialInfo ? countryDialInfo.dialCode : "";

      return {
        name: name,
        flag: country.flags.svg,
        phone: phone,
      };
    });

    
    const sortedCountries = countriesData.sort((a, b) =>
      a.name.localeCompare(b.name)
    );

    
    return sortedCountries;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};

// import { countryDialCode } from "./dialCodes";
// const API_URL = "https://restcountries.com/v3.1";

// export const fetchCountries = async () => {
//   try {
//     const response = await fetch(`${API_URL}/all`);
//     const data = await response.json();
//     console.log(data);

//     const countriesData = await Promise.all(
//       data.map(async (country) => {
//         if (!country.name?.common) {
//           // If common name is not available, fetch from the alternative API
//           try {
//             const alternativeResponse = await fetch(
//               `${API_URL}/name/${country.name.official}`
//             );
//             const alternativeData = await alternativeResponse.json();
//             const alternativeCommonName =
//               alternativeData[0]?.name?.common || "";
//             return {
//               name: alternativeCommonName,
//               flag: country.flags.svg,
//               phone: "", // You may need to modify this based on your data
//             };
//           } catch (alternativeError) {
//             console.error("Error fetching alternative data:", alternativeError);
//             return null; // Handle the case where alternative data fetch fails
//           }
//         }

//         const countryDialInfo = countryDialCode.find(
//           (info) => info.name === country.name.common
//         );

//         const name = countryDialInfo ? countryDialInfo.name : "";
//         const phone = countryDialInfo ? countryDialInfo.dialCode : "";

//         return {
//           name: name,
//           flag: country.flags.svg,
//           phone: phone,
//         };
//       })
//     );

//     // Filtering out null values (cases where alternative data fetch failed)
//     const validCountriesData = countriesData.filter(
//       (country) => country !== null
//     );

//     // Sorting by country name
//     const sortedCountries = validCountriesData.sort((a, b) =>
//       a.name.localeCompare(b.name)
//     );

//     console.log(sortedCountries);
//     return sortedCountries;
//   } catch (error) {
//     console.error("Error fetching data:", error);
//     throw error;
//   }
// };
