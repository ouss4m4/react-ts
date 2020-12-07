import React, { useEffect, useState } from "react";
import axios from "axios";
import logo from "./logo.svg";
import "./App.css";
import { IUser } from "./typings/typings";
import UserProfile from "./components/UserProfile/UserProfile";
import UserList from "./components/UserList/UserList";

const APP_ID = "5fce783f75d63ad04da2c30b";
const BASE_URL = "https://dummyapi.io/data/api";

function App() {
  const [loading, setLoading] = useState(false);
  const [list, setList] = useState<IUser[]>([]);
  const [page, setPage] = useState<number>(1);
  const [limit, setLimit] = useState<number>(1);

  useEffect(() => {
    setLoading(true);
    axios
      .get<{ data: IUser[] }>(`${BASE_URL}/user?page=${page}&limit=${limit}`, {
        headers: { "app-id": APP_ID },
      })
      .then(({ data }) => {
        console.log("raw data", data.data);
        setList(data.data);
      })
      .catch(console.error)
      .finally(() => setLoading(false));
  }, [limit, page]);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>RxJS with React</h1>
        <form>
          <input
            type="number"
            value={page}
            onChange={(e) => setPage(parseInt(e.target.value))}
          />
        </form>
        <form>
          <input
            type="number"
            value={limit}
            onChange={(e) => setLimit(parseInt(e.target.value))}
          />
        </form>
        <UserList list={list} />
      </header>
    </div>
  );
}

export default App;
