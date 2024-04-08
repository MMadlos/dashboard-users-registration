import "@/App.css";

import UserList from "@/components/UserList";
import BarChart from "./components/BarChart";

//TODO -> Fetch instead of mockUserList

function App() {
  return (
    <main className="container mx-auto my-10">
      <section className="flex flex-col gap-4 ">
        <h2 className="text-3xl  text-emerald-400">Gráfico</h2>
        <BarChart />
      </section>
      <section className="flex flex-col gap-4 mt-20">
        <h2 className="text-3xl font-medium text-emerald-400">Listado</h2>
        <UserList />
      </section>
    </main>
  );
}

export default App;
