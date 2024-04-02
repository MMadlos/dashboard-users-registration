import Button from "./Button";
import ChevronLeft from "./Icons/ChevronLeft";
import DoubleChevLeft from "./Icons/DoubleChevLeft";
import ChevronRight from "./Icons/ChevronRight";
import DoubleChevRight from "./Icons/DoubleChevRight";

export default function Pagination({ onChangeItems, totalPages, currentPage }) {
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

      <div className="flex flex-row gap-2 items-center">
        <button className="size-fit p-1">
          <DoubleChevLeft className="size-5 fill-white flex flex-row gap-0 items-center" />
        </button>
        <button className="size-fit p-1">
          <ChevronLeft className="size-5 fill-white flex flex-row gap-0 items-center" />
        </button>
        {Array(totalPages)
          .fill("")
          .map((_, index) => {
            const pageNum = index + 1;
            const isCurrentPage = pageNum === currentPage;

            return (
              <button
                className={`py-2 bg-emerald-800 rounded-full px-4 ${
                  isCurrentPage ? "bg-emerald-800" : "bg-stone-800"
                }`}
              >
                {pageNum}
              </button>
            );
          })}
        <button className="size-fit p-1">
          <ChevronRight className="size-5 fill-white flex flex-row gap-0 items-center" />
        </button>
        <button className="size-fit p-1">
          <DoubleChevRight className="size-5 fill-white flex flex-row gap-0 items-center" />
        </button>
      </div>
    </div>
  );
}
