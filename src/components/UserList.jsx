export default function UserList({ userList }) {
  return (
    <table className="w-full">
      <thead>
        <tr>
          <th>Foto</th>
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
              <td>
                <img src={picture.thumbnail} alt="" />
              </td>
              <td>{name.first}</td>
              <td>{name.last}</td>
              <td>{email}</td>
              <td>{location.country}</td>
              <td>{registered.date}</td>
              <td>
                <button>Test</button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
