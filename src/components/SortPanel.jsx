import { useState } from "react";

export default function SortPanel({ onSubmit }) {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div>
      <button
        className="bg-stone-700 rounded-sm py-1 px-8 hover:opacity-80 w-fit data-[opened=true]:bg-emerald-700"
        onClick={() => setIsVisible(!isVisible)}
        data-opened={isVisible}
      >
        {isVisible ? "Cerrar" : "Ordenar"}
      </button>
      {isVisible && <SortOptions onSubmit={onSubmit} />}
    </div>
  );
}

function SortOptions({ onSubmit }) {
  const [sortSelected, setSortSelected] = useState("default");

  const options = {
    default: "Selecciona columna",
    firstName: "Nombre",
    lastName: "Apellido",
    country: "País",
    date: "Fecha registro",
  };

  function handleOnChange(e) {
    const { value } = e.target;
    setSortSelected(value);
  }

  const isDefault = sortSelected === "default";

  return (
    <div className="relative">
      <form onSubmit={onSubmit} className="absolute z-50 left-0 top-1">
        <div className=" bg-stone-800/70 backdrop-blur p-4 rounded-sm flex flex-row gap-4 border border-stone-700">
          <div className="flex gap-4 items-center">
            <label htmlFor="column">Parámetro:</label>
            <select
              name="column"
              id="column-param"
              className="bg-stone-700 rounded-sm px-4 py-2 hover:cursor-pointer hover:opacity-80"
              onChange={handleOnChange}
            >
              {Object.entries(options).map(([value, text], index) => {
                return (
                  <option key={index} value={value}>
                    {text}
                  </option>
                );
              })}
            </select>
          </div>

          <div className="flex gap-4 items-center">
            <label htmlFor="type">Orden:</label>
            <select
              name="type"
              id="type-sort"
              className="bg-stone-700 rounded-sm px-4 py-2 hover:cursor-pointer hover:opacity-80"
            >
              <option value="asc">Ascendente</option>
              <option value="des">Descendente</option>
            </select>
          </div>
          <button
            className="w-full px-6 py-2 bg-emerald-700 rounded hover:opacity-80 disabled:opacity-20"
            disabled={isDefault}
          >
            Aplicar
          </button>
        </div>
      </form>
    </div>
  );
}
