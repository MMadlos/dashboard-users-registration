export default function getCountriesCount(userList) {
  const countriesArray = userList.map((userData) => userData.country);
  const countriesCount = {};
  countriesArray.forEach((country) => {
    if (countriesCount[country] === undefined) countriesCount[country] = 0;
    countriesCount[country]++;
  });

  return countriesCount;
}
