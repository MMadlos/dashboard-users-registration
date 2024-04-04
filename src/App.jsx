import "@/App.css";

import UserList from "@/components/UserList";
import BarChart from "./components/Chart";

//TODO -> Fetch instead of mockUserList

function App() {
  return (
    <div className="container flex flex-col gap-12">
      <section className="flex flex-col gap-4 ">
        <h2 className="text-3xl">Gráfico</h2>
        <BarChart />
      </section>
      <section className="flex flex-col gap-4">
        <h2 className="text-3xl">Listado</h2>
        <UserList />
      </section>
    </div>
  );
}

export default App;
