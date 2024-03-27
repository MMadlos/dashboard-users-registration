export default function UserList({ userList }) {
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
        {userList.map((userData, index) => {
          const { picture, name, email, location, registered } = userData;
          return (
            <tr key={index}>
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
                <button className="bg-stone-700 rounded-sm py-1 px-8 hover:opacity-80">
                  Test
                </button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
