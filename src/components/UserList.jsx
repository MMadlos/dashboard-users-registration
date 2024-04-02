import { useState, useEffect } from "react";
import { mockUserList } from "@/mockUserList";
import { mapUserList } from "@/utils/mapUsers";

import Button from "@/components/Button";
import Table from "@/components/Table";
import SortPanel from "./SortPanel";
import Pagination from "./Pagination";

const mappedUsers = mapUserList(mockUserList.results);

const DEFAULT_ITEMS_PER_PAGE = 5;

export default function UserList() {
  const [userList, setUserList] = useState(mappedUsers);
  const [sortedList, setSortedList] = useState(userList);

  const [itemsPerPage, setItemsPerPage] = useState(DEFAULT_ITEMS_PER_PAGE);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    setSortedList(userList);
  }, [userList]);

  function removeUser(userID) {
    const newUserList = sortedList.filter(({ id }) => id !== userID);
    setUserList(newUserList);
  }

  function resetData() {
    setUserList(mappedUsers);
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
    setItemsPerPage(e.target.value);
  }

  const totalPages = Math.ceil(sortedList.length / itemsPerPage);

  function handleClickPageNum(e) {
    const pageNum = e.target.textContent;
    setCurrentPage(Number(pageNum));
  }

  return (
    <>
      <Button text="Reset data" onClick={resetData} />
      <SortPanel onSubmit={handleSort} />
      <Pagination
        onChangeItems={handleViewItems}
        totalPages={totalPages}
        currentPage={currentPage}
        onClickPage={handleClickPageNum}
      />
      <Table
        userList={sortedList}
        onClickDelete={removeUser}
        itemsPerPage={itemsPerPage}
        currentPage={currentPage}
      />
    </>
  );
}
