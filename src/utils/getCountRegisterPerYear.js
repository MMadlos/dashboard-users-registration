export default function getCountRegisterPerYear(userList) {
  const userListDates = userList.map((userData) =>
    Number(userData.date.slice(0, 4))
  );

  const count = {};
  userListDates.forEach((year) => {
    if (count[year] === undefined) count[year] = 0;
    count[year]++;
  });

  return count;
}
