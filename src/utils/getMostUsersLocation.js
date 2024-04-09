export default function getMostUsersLocation(countriesCount) {
  const countries = Object.keys(countriesCount);
  const count = Object.values(countriesCount);

  const countMax = Math.max(...count);
  const maxIndex = count.indexOf(countMax);
  const countryMax = countries[maxIndex];

  const nextMaxIndex = count.indexOf(countMax, maxIndex + 1);
  const nextCountryMax = countries[nextMaxIndex];

  const location =
    countryMax && nextCountryMax
      ? `${countryMax} / ${nextCountryMax}`
      : countryMax;

  return location;
}
