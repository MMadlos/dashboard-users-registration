import Button from "./Button";

export default function Table({ sortedList, onClickDelete }) {
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
        {sortedList.map((userData) => {
          const { id, picture, firstName, lastName, country, date, email } =
            userData;

          return (
            <tr key={id}>
              <td className="py-2">
                <img src={picture} alt="" className="mx-auto rounded-full " />
              </td>
              <td>{firstName}</td>
              <td>{lastName}</td>
              <td>{email}</td>
              <td>{country}</td>
              <td>{date}</td>
              <td>
                <Button text="Delete" onClick={() => onClickDelete(id)} />
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
