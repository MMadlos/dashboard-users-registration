import "@/App.css";

import { useState, useEffect } from "react";

import { mockUserList } from "./mockUserList";
import { mapUserList } from "./utils/mapUsers";

import UserList from "@/components/UserList";
import BarChart from "./components/BarChart";
import ThemeToggle from "./components/ToggleTheme";
import { ThemeProvider } from "./components/Theme";

const FALLBACK_USER_LIST = mapUserList(mockUserList.results);
const NUMBER_OF_RESULTS = 50;
const API_URL = "https://randomuser.me/api";

function App() {
  const [userList, setUserList] = useState(FALLBACK_USER_LIST);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(
      `${API_URL}?seed=test&results=${NUMBER_OF_RESULTS}&inc=login,picture,name,location,registered,email`,
      {
        mode: "cors",
      }
    )
      .then((response) => {
        if (response.status >= 400) {
          throw new Error("server error");
        }
        return response.json();
      })
      .then((response) => {
        const mappedUsers = mapUserList(response.results);
        setUserList(mappedUsers);
      })
      .catch((error) => setError(error))
      .finally(() => setLoading(false));
  }, []);

  return (
    <>
      <ThemeProvider>
        <header>
          <ThemeToggle />
        </header>
        <main className="container mx-auto my-10 p-4">
          <section className="flex flex-col gap-4 ">
            <h2 className="text-3xl text-emerald-400">Gráfico</h2>
            <BarChart userList={userList} />
          </section>
          <section className="flex flex-col gap-4 mt-20">
            <h2 className="text-3xl font-medium text-emerald-400">Listado</h2>
            <UserList userList={userList} error={error} loading={loading} />
          </section>
        </main>
      </ThemeProvider>
    </>
  );
}

export default App;
