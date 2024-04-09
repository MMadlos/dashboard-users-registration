import Button from "./Button";

export default function Table({
  userList,
  itemsPerPage = 5,
  onClickDelete,
  currentPage,
}) {
  const firstItemIndex =
    currentPage === 1 ? 0 : itemsPerPage * (currentPage - 1);
  const lastItemIndex = itemsPerPage * currentPage - 1;

  const filteredList = userList.filter((userData, index) => {
    if (index >= firstItemIndex && index <= lastItemIndex) return userData;
  });

  return (
    <table className=" table-fixed h-full mx-auto w-full">
      <thead>
        <tr className="border-b border-stone-600 [&>*]:py-2 ">
          <th className="w-[100px] text-center">Foto</th>
          <th className="pl-4 text-left">Nombre</th>
          <th className="text-left">Apellido</th>
          <th className="w-[300px] text-left">Email</th>
          <th className="pl-4 text-left">País</th>
          <th className="w-[213px] text-left">Fecha registro</th>
          <th className="w-[130px] text-center">Acciones</th>
        </tr>
      </thead>
      <tbody>
        {filteredList.map((userData) => {
          const { id, picture, firstName, lastName, country, date, email } =
            userData;

          return (
            <tr key={id}>
              <TD className="text-center">
                <img src={picture} alt="" className="mx-auto rounded-full " />
              </TD>
              <TD className="pl-4">{firstName}</TD>
              <TD>{lastName}</TD>
              <TD>{email}</TD>
              <TD className="pl-4">{country}</TD>
              <TD>{date}</TD>
              <TD className="text-center">
                <Button text="Eliminar" onClick={() => onClickDelete(id)} />
              </TD>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

function TD({ children, className = "" }) {
  return <td className={`py-2 ${className}`}>{children}</td>;
}
