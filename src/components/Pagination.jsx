import ChevronLeft from "./Icons/ChevronLeft";
import DoubleChevLeft from "./Icons/DoubleChevLeft";
import ChevronRight from "./Icons/ChevronRight";
import DoubleChevRight from "./Icons/DoubleChevRight";

export default function Pagination({
  onChangeItems,
  totalPages,
  currentPage,
  onClickPage,
  onClickPageSelector,
}) {
  const options = ["5", "10", "15", "20"];

  const pagesArray = Array(totalPages)
    .fill()
    .map((_, index) => index + 1);

  const isFirstPage = currentPage === 1;
  const isLastPage = currentPage === totalPages;

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
        <ButtonPageSelector
          id="first-page"
          onClick={onClickPageSelector}
          isDisabled={isFirstPage}
        >
          <DoubleChevLeft className="size-5  flex flex-row gap-0 items-center " />
        </ButtonPageSelector>
        <ButtonPageSelector
          id="prev-page"
          onClick={onClickPageSelector}
          isDisabled={isFirstPage}
        >
          <ChevronLeft className="size-5  flex flex-row gap-0 items-center" />
        </ButtonPageSelector>
        {pagesArray.map((pageNum, index) => {
          const isCurrentPage = pageNum === currentPage;

          return (
            <ButtonPage
              key={index}
              isSelected={isCurrentPage}
              onClick={onClickPage}
            >
              {pageNum}
            </ButtonPage>
          );
        })}
        <ButtonPageSelector
          id="next-page"
          onClick={onClickPageSelector}
          isDisabled={isLastPage}
        >
          <ChevronRight className="size-5  flex flex-row gap-0 items-center" />
        </ButtonPageSelector>
        <ButtonPageSelector
          id="last-page"
          onClick={onClickPageSelector}
          isDisabled={isLastPage}
        >
          <DoubleChevRight className="size-5  flex flex-row gap-0 items-center" />
        </ButtonPageSelector>
      </div>
    </div>
  );
}

function ButtonPageSelector({ id, children, onClick, isDisabled }) {
  return (
    <button
      id={id}
      className=" size-fit p-1 fill-white hover:fill-emerald-700 disabled:opacity-20 disabled:hover:fill-white"
      onClick={onClick}
      disabled={isDisabled}
    >
      {children}
    </button>
  );
}

function ButtonPage({ isSelected, onClick, children }) {
  return (
    <button
      data-selected={isSelected}
      className="py-2  rounded-full px-4 bg-stone-800 data-[selected=true]:bg-emerald-900 hover:bg-stone-700"
      onClick={onClick}
    >
      {children}
    </button>
  );
}
