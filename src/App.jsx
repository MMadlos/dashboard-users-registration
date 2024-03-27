import { useEffect, useState } from "react";
import { mockUserList } from "./mockUserList";
import UserList from "./components/UserList";
import "./App.css";

//TODO -> Fetch instead of mockUserList

function App() {
  const [userList, setUserList] = useState(mockUserList.results);

  return (
    <div className="container flex flex-col gap-8">
      <h1 className="text-3xl">Listado</h1>
      <UserList userList={userList} />
    </div>
  );
}

export default App;
