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

const chartDataSelector = {
  registration: "registration-count",
  countries: "countries-count",
};

export default function BarChart() {
  const [chartData, setChartData] = useState({
    options: DEFAULT_CHART_OPTIONS,
    data: DEFAULT_CHART_DATA,
  });

  function setCountUsersByCountry() {
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

  function setCountByRegistrationDate() {
    setChartData({
      options: DEFAULT_CHART_OPTIONS,
      data: DEFAULT_CHART_DATA,
    });
  }

  function handleDataChartSelector(e) {
    const { value } = e.target;

    if (value === chartDataSelector.registration) setCountByRegistrationDate();
    if (value === chartDataSelector.countries) setCountUsersByCountry();
  }

  return (
    <>
      <div>
        <label htmlFor="chart">Datos del gráfico</label>
        <select name="chart" id="chart-data" onClick={handleDataChartSelector}>
          <option value={chartDataSelector.registration}>
            Registros por año
          </option>
          <option value={chartDataSelector.countries}>
            Usuarios por países
          </option>
        </select>
      </div>

      <Bar
        options={chartData.options}
        data={chartData.data}
        className="bg-stone-800 p-4 rounded-xl border-stone-700 border "
      />
    </>
  );
}
