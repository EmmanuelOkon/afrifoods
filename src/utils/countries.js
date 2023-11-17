const API_URL = "https://restcountries.com/v3.1";

export const fetchCountries = async () => {
  try {
    const response = await fetch(`${API_URL}/region/africa`);
    const data = await response.json();

    // Extracting country names
    const countryNames = data
      .map((country) => country.name.common)
      .sort((a, b) => a.localeCompare(b));

    console.log(countryNames);
    return countryNames;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};



/* <select
  value={selectedCountry}
  onChange={(e) => setSelectedCountry(e.target.value)}
  id="country"
  className="appearance-none font-semibold block w-full bg-white text-greyBlack placeholder:font-medium border-2 border-gray-200 rounded-md py-3 px-2 mb3 leading-tight focus:outline-0 focus:ring-0 focus:ringlemonGreen focus:bg-white focus:border-lemonGreen placeholder:text-sm"
>
  <option value="" className=" " disabled>
    Country
  </option>
  {countries.map((country) => (
    <option className="space-y-3 py-3 my-3 " key={country} value={country}>
      <li className="my-2 bg-green bg-opacity-40 scrollbar-none">{country}</li>
    </option>
  ))}
</select>; */
