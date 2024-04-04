import "@/App.css";

import UserList from "@/components/UserList";
import Chart from "./components/Chart";

//TODO -> Fetch instead of mockUserList

function App() {
  return (
    <div className="container flex flex-col gap-8">
      <h2 className="text-3xl">Gráfico</h2>
      <Chart />
      <h2 className="text-3xl">Listado</h2>
      <UserList />
    </div>
  );
}

export default App;
