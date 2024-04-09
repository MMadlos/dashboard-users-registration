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
import { useState, useEffect } from "react";
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

const DEFAULT_OPTIONS = {};

const DATASET_TEMPLATE = {
  label: "",
  data: undefined,
  backgroundColor: ["rgba(6, 95, 70, 0.2)"],
  borderColor: ["#065f46"],
  borderWidth: 1,
  hoverBackgroundColor: "rgba(6, 95, 70, 1)",
};

const chartDataSelector = {
  registration: "registration-count",
  countries: "countries-count",
};

export default function BarChart({ userList }) {
  const [chartData, setChartData] = useState({
    labels: [],
    datasets: [],
  });
  const [selectedType, setSelectedType] = useState(
    chartDataSelector.registration
  );

  useEffect(() => {
    let labels = [];
    const dataset = { ...DATASET_TEMPLATE };
    const datasets = [dataset];

    if (selectedType === chartDataSelector.registration) {
      const yearsCount = getCountRegisterPerYear(userList);

      labels = Object.keys(yearsCount);

      dataset.label = "Usuarios registrados";
      dataset.data = Object.values(yearsCount);
    }

    if (selectedType === chartDataSelector.countries) {
      const countriesCount = getCountriesCount(userList);

      labels = Object.keys(countriesCount);

      dataset.label = "Usuarios por países";
      dataset.data = Object.values(countriesCount);
    }

    const newData = { labels, datasets };
    setChartData(newData);
  }, [selectedType, userList]);

  return (
    <div className="w-full flex flex-col gap-2">
      <div className="text-sm flex gap-4 items-center ">
        <label htmlFor="chart">Datos del gráfico</label>
        <select
          name="chart"
          id="chart-data"
          onChange={(e) => setSelectedType(e.target.value)}
          className="bg-stone-700 rounded-sm px-4 py-2 hover:cursor-pointer hover:opacity-80 dark:bg-stone-300"
        >
          <option value={chartDataSelector.registration}>
            Registros por año
          </option>
          <option value={chartDataSelector.countries}>
            Usuarios por países
          </option>
        </select>
      </div>

      <Bar
        options={DEFAULT_OPTIONS}
        data={chartData}
        className="bg-stone-800 p-4 rounded-xl border-stone-700 border max-h-[50vh] dark:bg-stone-200"
      />
    </div>
  );
}
