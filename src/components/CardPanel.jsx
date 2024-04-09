import getCountRegisterPerYear from "@/utils/getCountRegisterPerYear";
import Card from "./Card";
import getCountriesCount from "@/utils/getCountriesCount";
import getMostUsersLocation from "@/utils/getMostUsersLocation";

const CURRENT_YEAR = 2021;

export default function CardPanel({ userList }) {
  const totalUsers = userList.length;
  const yearsCount = getCountRegisterPerYear(userList);
  const countUsersCurrentYear = yearsCount[CURRENT_YEAR];

  const countriesCount = getCountriesCount(userList);
  const mostUsersLocation = getMostUsersLocation(countriesCount);

  return (
    <div className="grid grid-cols-3 gap-2 lg:gap-4 justify-start max-w-fit">
      <Card
        title="Total usuarios"
        data={totalUsers}
        className="text-4xl sm:text-4xl"
      />
      <Card
        title="Registrados este año"
        data={countUsersCurrentYear}
        className="text-4xl sm:text-4xl"
      />
      <Card
        title="País con más usuarios"
        data={mostUsersLocation}
        className="text-xl sm:text-2xl"
      />
    </div>
  );
}
