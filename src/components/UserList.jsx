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

  function handleSort(e) {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);
    const formJSON = Object.fromEntries(formData.entries());

    const { column, type } = formJSON;

    // Si la columna seleccionada es firstName, el valor a revisar es firstName
    //  Dentro de firstName, hay que ver si es ascendente o descendente

    console.log(formJSON);
  }

  return (
    <>
      <Button text="Reset data" onClick={() => setUserList(mappedUsers)} />
      <SortPanel onSubmit={handleSort} />
      <Table sortedList={sortedList} onClickDelete={removeUser} />
    </>
  );
}
