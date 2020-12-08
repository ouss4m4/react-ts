import React, { useState, useEffect } from "react";
import { IUser } from "./typings/typings";
import UserList from "./components/UserList/UserList";
import useObservable from "./hooks/useObservable";
import { getUsers, userList$ } from "./facade/userFacade";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const list = useObservable<IUser[]>(userList$) || [];
  const [page, setPage] = useState<string>("1");
  const [limit, setLimit] = useState<string>("1");

  useEffect(() => {
    getUsers(page, limit);
  }, [page, limit]);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>RxJS with React</h1>
        <form
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <label>page </label>
          <input
            name="Page"
            type="number"
            value={page}
            onChange={(e) => setPage(e.target.value)}
          />
        </form>
        <form
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <label>limit</label>
          <input
            type="number"
            value={limit}
            onChange={(e) => setLimit(e.target.value)}
          />
        </form>
        <UserList list={list} />
      </header>
    </div>
  );
}

export default App;
