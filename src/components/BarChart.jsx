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
  const options = {
    scales: {
      y: {
        suggestedMax: 6,
      },
    },
  };

  const labels = yearsCount.map((row) => row.year);
  const datasets = [
    {
      label: "Usuarios registrados",
      data: yearsCount.map((row) => row.count),
      backgroundColor: ["rgba(6, 95, 70, 0.2)"],
      borderColor: ["#065f46"],
      borderWidth: 1,
      hoverBackgroundColor: "rgba(6, 95, 70, 1)",
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
