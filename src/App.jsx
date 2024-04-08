import "@/App.css";

import UserList from "@/components/UserList";
import BarChart from "./components/BarChart";

//TODO -> Fetch instead of mockUserList

function App() {
  return (
    <main className="container mx-auto my-10">
      <section className="flex flex-col gap-4 ">
        <h2 className="text-3xl">Gráfico</h2>
        <BarChart />
      </section>
      <section className="flex flex-col gap-4 mt-12">
        <h2 className="text-3xl">Listado</h2>
        <UserList />
      </section>
    </main>
  );
}

export default App;
