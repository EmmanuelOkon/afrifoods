const API_URL = "https://restcountries.com/v3.1";

export const fetchCountries = async () => {
  try {
    const response = await fetch(`${API_URL}/all`);
    const data = await response.json();
    console.log(data);

    const countriesData = data.map((country) => {
      const suffix = country.idd.suffixes;
      const phone = country.idd.root + suffix;

      return {
        name: country.name.common,
        flag: country.flags.svg,
        phone: `${phone}`,
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
