import { useState, useEffect } from "react";
import { mockUserList } from "@/mockUserList";
import { mapUsers } from "@/utils/mapUsers";

import Button from "@/components/Button";
import Table from "@/components/Table";
import SortPanel from "./SortPanel";

const mappedUsers = mapUsers(mockUserList.results);

export default function UserList() {
  const [userList, setUserList] = useState(mappedUsers);
  const [sortedList, setSortedList] = useState(userList);

  useEffect(() => {
    setSortedList(userList);
  }, [userList]);

  function removeUser(uuid) {
    const newUserList = userList.filter(({ login }) => login.uuid !== uuid);
    setUserList(newUserList);
  }

  const sortOption = {
    asc: "asc",
    des: "des",
  };

  function sortName(type, dataToSort) {
    const newUserList = sortedList.toSorted(compareNameFN);
    setSortedList(newUserList);

    function compareNameFN(a, b) {
      const A = a.name.first.toUpperCase();
      const B = b.name.first.toUpperCase();

      if (type === sortOption.asc) {
        if (A < B) return -1;
        if (A > B) return 1;
      }

      if (type === sortOption.des) {
        if (A < B) return 1;
        if (A > B) return -1;
      }

      return 0;
    }
  }

  function handleSubmitSort(e) {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);
    const formJson = Object.fromEntries(formData.entries());

    console.log(formJson);
  }

  return (
    <>
      <Button text="Reset data" onClick={() => setUserList(mappedUsers)} />
      <SortPanel onSubmit={handleSubmitSort} />
      <Table sortedList={sortedList} onClickDelete={removeUser} />
    </>
  );
}
