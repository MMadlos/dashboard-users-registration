import { useState, useEffect } from "react";
import { mockUserList } from "@/mockUserList";
import { mapUserList } from "@/utils/mapUsers";

import Button from "@/components/Button";
import Table from "@/components/Table";
import SortPanel from "./SortPanel";
import Pagination from "./Pagination";

const MOCK_USER_LIST = mapUserList(mockUserList.results);

/*
PARÁMETROS A INCLUIR PARA EL FETCH
- login.id
- picture.thumnail
- name.first
- name.last
- location.country
- registered.date
https://randomuser.me/api?seed=test&results=5&inc=login,picture,name,location,registered
*/

const DEFAULT_ITEMS_PER_PAGE = 5;
const DEFAULT_CURRENT_PAGE = 1;

const NUMBER_OF_RESULTS = 50;
const API_URL = "https://randomuser.me/api";

export default function UserList() {
  const [userList, setUserList] = useState(MOCK_USER_LIST);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const [sortedList, setSortedList] = useState(userList);

  const [itemsPerPage, setItemsPerPage] = useState(DEFAULT_ITEMS_PER_PAGE);
  const [currentPage, setCurrentPage] = useState(DEFAULT_CURRENT_PAGE);

  useEffect(() => {
    fetch(
      `${API_URL}?seed=test&results=${NUMBER_OF_RESULTS}&inc=login,picture,name,location,registered`,
      {
        mode: "cors",
      }
    )
      .then((response) => {
        if (response.status >= 400) {
          throw new Error("server error");
        }
        return response.json();
      })
      .then((response) => {
        const mappedUsers = mapUserList(response.results);
        setUserList(mappedUsers);
      })
      .catch((error) => setError(error))
      .finally(() => setLoading(false));
  }, []);

  function removeUser(userID) {
    const newUserList = sortedList.filter(({ id }) => id !== userID);
    setSortedList(newUserList);
  }

  function resetData() {
    setSortedList(userList);
  }

  function handleSort(e) {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);
    const formJSON = Object.fromEntries(formData.entries());

    const { column, type } = formJSON;

    const newUserList = sortedList.toSorted(compareFN);
    setSortedList(newUserList);

    function compareFN(a, b) {
      const A = a[column].toUpperCase();
      const B = b[column].toUpperCase();

      if (A < B) return type === "asc" ? -1 : 1;
      if (A > B) return type === "asc" ? 1 : -1;

      return 0;
    }
  }

  function handleViewItems(e) {
    setCurrentPage(DEFAULT_CURRENT_PAGE);
    setItemsPerPage(e.target.value);
  }

  const totalPages = Math.ceil(sortedList.length / itemsPerPage);

  function handleClickPageNum(e) {
    const pageNum = e.target.textContent;
    setCurrentPage(Number(pageNum));
  }

  function handlePageSelector(e) {
    e.preventDefault();

    const $button = e.target.closest("button");
    const buttonID = $button.id;

    if (buttonID === "first-page") setCurrentPage(1);
    if (buttonID === "prev-page") setCurrentPage(currentPage - 1);
    if (buttonID === "next-page") setCurrentPage(currentPage + 1);
    if (buttonID === "last-page") setCurrentPage(totalPages);
  }

  if (error) return <p>A network error was encountered</p>;
  if (loading) return <p>Loading</p>;

  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-row justify-between">
        <SortPanel onSubmit={handleSort} />
        <Button text="Reiniciar tabla" onClick={resetData} />
      </div>
      <Pagination
        onChangeItems={handleViewItems}
        totalPages={totalPages}
        currentPage={currentPage}
        onClickPage={handleClickPageNum}
        onClickPageSelector={handlePageSelector}
      />
      <Table
        userList={sortedList}
        onClickDelete={removeUser}
        itemsPerPage={itemsPerPage}
        currentPage={currentPage}
      />
    </div>
  );
}
