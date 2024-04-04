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

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export default function BarChart() {
  const options = {};

  const labels = [
    "Rent",
    "Groceries",
    "Utilities",
    "Entertainment",
    "Transportation",
  ];
  const datasets = [
    {
      label: "Expenses",
      data: [1200, 300, 150, 180, 100],
      backgroundColor: ["#065f46"],
      borderColor: ["#064e3b"],
      borderWidth: 1,
    },
  ];
  const data = { labels, datasets };

  return <Bar options={options} data={data} />;
}
