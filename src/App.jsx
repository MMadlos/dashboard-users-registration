import "@/App.css";

import UserList from "@/components/UserList";
import BarChart from "./components/Chart";

//TODO -> Fetch instead of mockUserList

function App() {
  return (
    <div className="container flex flex-col gap-8">
      <h2 className="text-3xl">Gráfico</h2>
      <BarChart />
      <h2 className="text-3xl">Listado</h2>
      <UserList />
    </div>
  );
}

export default App;
