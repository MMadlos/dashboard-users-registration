import "@/App.css";

import UserList from "@/components/UserList";
import Button from "@/components/Button";

//TODO -> Fetch instead of mockUserList

function App() {
  return (
    <div className="container flex flex-col gap-8">
      <h1 className="text-3xl">Listado</h1>
      <Button text="Reset data" />
      <UserList />
    </div>
  );
}

export default App;
