export default function getCountRegisterPerYear(userList) {
  const userListDates = userList.map((userData) =>
    Number(userData.date.slice(0, 4))
  );

  const yearsCount = [];
  const smallestYear = Math.min(...userListDates);
  const highestYear = Math.max(...userListDates);

  for (let i = smallestYear; i <= highestYear; i++) {
    yearsCount.push({ year: i, count: 0 });
  }

  userListDates.forEach((year) => {
    yearsCount.map((object) => {
      if (object.year === year) {
        object.count++;
      }
    });
  });

  return yearsCount;
}
