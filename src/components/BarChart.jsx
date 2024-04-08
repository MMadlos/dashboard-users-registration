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
import { useState } from "react";
import { mockUserList } from "@/mockUserList";
import { mapUserList } from "@/utils/mapUsers";
import getCountRegisterPerYear from "@/utils/getCountRegisterPerYear";
import getCountriesCount from "@/utils/getCountriesCount";

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

const DEFAULT_CHART_OPTIONS = {
  scales: {
    y: {
      suggestedMax: 6,
    },
  },
};

const DEFAULT_CHART_DATA = {
  labels: yearsCount.map((row) => row.year),
  datasets: [
    {
      label: "Usuarios registrados",
      data: yearsCount.map((row) => row.count),
      backgroundColor: ["rgba(6, 95, 70, 0.2)"],
      borderColor: ["#065f46"],
      borderWidth: 1,
      hoverBackgroundColor: "rgba(6, 95, 70, 1)",
    },
  ],
};

export default function BarChart() {
  const [chartData, setChartData] = useState({
    options: DEFAULT_CHART_OPTIONS,
    data: DEFAULT_CHART_DATA,
  });

  function handleCountUsersByCountry() {
    const countriesCount = getCountriesCount(userList);

    const options = {};
    const labels = Object.keys(countriesCount);
    const datasets = [
      {
        label: "Usuarios por países",
        data: Object.values(countriesCount),
        backgroundColor: ["rgba(6, 95, 70, 0.2)"],
        borderColor: ["#065f46"],
        borderWidth: 1,
        hoverBackgroundColor: "rgba(6, 95, 70, 1)",
      },
    ];

    const data = { options, data: { labels, datasets } };
    setChartData(data);
  }

  function handleCountByRegistrationDate() {
    setChartData({
      options: DEFAULT_CHART_OPTIONS,
      data: DEFAULT_CHART_DATA,
    });
  }

  return (
    <>
      <h1>Selecciona los datos que quieres que se muestren en el gráfico</h1>
      <button onClick={handleCountByRegistrationDate}>
        Registro de usuarios
      </button>
      <button onClick={handleCountUsersByCountry}>Usuarios por países</button>

      <Bar
        options={chartData.options}
        data={chartData.data}
        className="bg-stone-800 p-4 rounded-xl border-stone-700 border "
      />
    </>
  );
}
