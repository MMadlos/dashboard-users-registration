import { useState } from "react";
import { mockUserList } from "@/mockUserList";

import Button from "@/components/Button";

export default function UserList() {
  const [userList, setUserList] = useState(mockUserList.results);

  function removeUser(uuid) {
    const newUserList = userList.filter(({ login }) => login.uuid !== uuid);
    setUserList(newUserList);
  }

  return (
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
        {userList.map((userData) => {
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
  );
}
