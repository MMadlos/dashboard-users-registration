import { useState } from "react";

import Button from "./Button";

export default function SortPanel() {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div className="flex flex-col justify-start gap-2 ">
      <Button text="Sort" onClick={() => setIsVisible(!isVisible)} />
      {isVisible && <SortOptions />}
    </div>
  );
}

function SortOptions() {
  const options = {
    default: "Selecciona columna",
    firstName: "Nombre",
    lastName: "Apellido",
    country: "País",
    date: "Fecha registro",
  };

  function handleSubmitSort(e) {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);
    const formJson = Object.fromEntries(formData.entries());

    console.log(formJson);

    const { column: option } = formJson;

    if (option === "default")
      console.log("No se ha seleccionado ningún parámetro");

    if (option !== "default") {
      console.log(`Se ha ordenado la columna "${options[option]}"`);
    }
  }

  return (
    <form onSubmit={handleSubmitSort}>
      <div className=" bg-stone-800 p-4 rounded-sm flex flex-row gap-4">
        <div className="flex gap-4 items-center">
          <label htmlFor="column">Parámetro:</label>
          <select
            name="column"
            id="column-param"
            className="bg-stone-700 rounded-sm px-4 py-2 hover:cursor-pointer"
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
            className="bg-stone-700 rounded-sm px-4 py-2 hover:cursor-pointer"
          >
            <option value="asc">Ascendente</option>
            <option value="des">Descendente</option>
          </select>
        </div>
        <button className="w-full px-6 py-2 bg-emerald-700 rounded">
          Aplicar
        </button>
      </div>
    </form>
  );
}
