import Button from "./Button";

export default function Pagination({ onChangeItems }) {
  const options = ["5", "10", "15", "20"];

  return (
    <div className="flex flex-row justify-between">
      <div className="flex gap-4 items-center text-sm">
        <p>Ver</p>
        <select
          name="items"
          className="bg-inherit  rounded-sm px-4 py-2 hover:cursor-pointer hover:opacity-80 border-2 border-stone-700"
          onChange={onChangeItems}
        >
          {options.map((value, index) => {
            return (
              <option
                key={index}
                value={value}
                className="bg-stone-900 hover:bg-emerald-900 "
              >
                {value}
              </option>
            );
          })}
        </select>
        <p>usuarios</p>
      </div>

      <div className="flex flex-row gap-4 items-center">
        <Button text="First" />
        <Button text="Prev" />
        <button className="p-2 bg-emerald-800 rounded-full px-4 ">1</button>
        <button className="p-2 bg-stone-800 rounded-full px-4 ">2</button>
        <Button text="Next" />
        <Button text="Last" />
      </div>
    </div>
  );
}
