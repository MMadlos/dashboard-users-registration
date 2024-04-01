import { useState, useEffect } from "react";
import { mockUserList } from "@/mockUserList";

import Button from "@/components/Button";
import Table from "@/components/Table";

export default function UserList() {
  const [userList, setUserList] = useState(mockUserList.results);
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

  return (
    <>
      <Button
        text="Reset data"
        onClick={() => setUserList(mockUserList.results)}
      />
      <p>Sort name options</p>
      <div className="flex flex-row gap-4">
        <Button text="A to Z" onClick={() => sortName(sortOption.asc)} />
        <Button text="Z to A" onClick={() => sortName(sortOption.des)} />
        <Button text="Default" onClick={() => setSortedList(userList)} />
      </div>
      <div className="flex flex-col justify-start gap-2 ">
        <Button text="Sort" />
        <div className="flex flex-row gap-4 bg-stone-800 p-4 items-center rounded-sm">
          <p>Sort column</p>
          <Button text="Select column to sort" className="text-emerald-400" />
          <p>from</p>
          <Button text="Select sort type" />
        </div>
      </div>
      <Table sortedList={sortedList} onClickDelete={removeUser} />
    </>
  );
}
