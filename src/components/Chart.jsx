import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { mapUserList } from "@/utils/mapUsers";
import { mockUserList } from "@/mockUserList";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const userList = mapUserList(mockUserList.results);
const userListDates = userList
  .map((userData) => Number(userData.date.slice(0, 4)))
  .sort();

export default function BarChart() {
  const yearsCount = [];
  const smallestYear = Math.min(...userListDates);
  const highestYear = Math.max(...userListDates);

  for (let i = smallestYear; i <= highestYear; i++) {
    const year = { year: i, count: 0 };
    yearsCount.push(year);
  }

  userListDates.forEach((year) => {
    yearsCount.map((object) => {
      if (object.year === year) {
        object.count++;
      }
    });
  });

  const options = {};

  const labels = yearsCount.map((row) => row.year);
  const datasets = [
    {
      label: "Users registered",
      data: yearsCount.map((row) => row.count),
      backgroundColor: ["#065f46"],
      borderColor: ["#064e3b"],
      borderWidth: 1,
    },
  ];
  const data = { labels, datasets };

  return <Bar options={options} data={data} />;
}
