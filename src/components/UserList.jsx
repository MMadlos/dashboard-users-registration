import { useState, useEffect } from "react";
import { mockUserList } from "@/mockUserList";

import Button from "@/components/Button";

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
      <table className="w-full">
        <thead>
          <tr className="border-b border-stone-600">
            <th className="py-2">Foto</th>
            <th>Nombre</th>
            <th>Apellido</th>
            <th>Email</th>
            <th>País</th>
            <th>Fecha registro</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {sortedList.map((userData) => {
            const { picture, name, email, location, registered, login } =
              userData;
            const { uuid } = login;

            return (
              <tr key={uuid}>
                <td className="py-2">
                  <img
                    src={picture.thumbnail}
                    alt=""
                    className="mx-auto rounded-full "
                  />
                </td>
                <td>{name.first}</td>
                <td>{name.last}</td>
                <td>{email}</td>
                <td>{location.country}</td>
                <td>{registered.date}</td>
                <td>
                  <Button text="Delete" onClick={() => removeUser(uuid)} />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}
