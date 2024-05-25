import { countryDialCode } from "./dialCodes";

export const fetchCountries = () => {
  try {
    const countriesData = countryDialCode.map((country) => {
      const name = country.name;
      const phone = country.dialCode;

      return {
        name: name,
        phone: phone,
      };
    });

    const sortedCountries = countriesData.sort((a, b) =>
      a.name.localeCompare(b.name)
    );
    return sortedCountries;
  } catch (error) {
    throw error;
  }
};



