import { useState, useEffect } from "react";
import { mockUserList } from "@/mockUserList";
import { mapUserList } from "@/utils/mapUsers";

import Button from "@/components/Button";
import Table from "@/components/Table";
import SortPanel from "./SortPanel";

const mappedUsers = mapUserList(mockUserList.results);

export default function UserList() {
  const [userList, setUserList] = useState(mappedUsers);
  const [sortedList, setSortedList] = useState(userList);

  useEffect(() => {
    setSortedList(userList);
  }, [userList]);

  function removeUser(userID) {
    const newUserList = userList.filter(({ id }) => id !== userID);
    setUserList(newUserList);
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

  return (
    <>
      <Button text="Reset data" onClick={() => setUserList(mappedUsers)} />
      <SortPanel onSubmit={handleSort} />
      <Table sortedList={sortedList} onClickDelete={removeUser} />
    </>
  );
}
