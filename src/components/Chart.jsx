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
import { mockUserList } from "@/mockUserList";
import { mapUserList } from "@/utils/mapUsers";
import getCountRegisterPerYear from "@/utils/getCountRegisterPerYear";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const userList = mapUserList(mockUserList.results);
const yearsCount = getCountRegisterPerYear(userList);

export default function BarChart() {
  const options = {};

  const labels = yearsCount.map((row) => row.year);
  const datasets = [
    {
      label: "Total de usuarios registrados por año",
      data: yearsCount.map((row) => row.count),
      backgroundColor: ["#065f46"],
      borderColor: ["#065f46"],
      borderWidth: 1,
    },
  ];
  const data = { labels, datasets };

  return (
    <Bar
      options={options}
      data={data}
      className="bg-stone-800 p-4 rounded-xl border-stone-700 border "
    />
  );
}
