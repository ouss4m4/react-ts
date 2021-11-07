import React from "react";
import { IUser } from "./typings/typings";
import UserList from "./components/UserList/UserList";
import useObservable from "./hooks/useObservable";
import {
  getUsersOnChange$,
  maxPages$,
  changePageNumber,
  changeDataPerPage,
  dataPerPage$,
  isLoading$,
  errorMsg$,
} from "./facade/userFacade";
import logo from "./logo.svg";
import Paginator from "./components/Paginator/Paginator";
import "./App.css";

function App() {
  const list = useObservable<IUser[]>(getUsersOnChange$) || [];
  const maxPage = useObservable<number>(maxPages$);
  const dataPerPage = useObservable<number>(dataPerPage$);
  const errorMsg = useObservable<string>(errorMsg$);
  const isLoading = useObservable<boolean>(isLoading$);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 style={{ fontSize: "2rem" }}>RxJS with React</h1>
        {maxPage && dataPerPage && (
          <Paginator
            dataPerPage={dataPerPage}
            changeDataPerPage={changeDataPerPage}
            pages={maxPage}
            changePage={changePageNumber}
          />
        )}
        {isLoading ? <p> Loading ... </p> : <UserList list={list} />}
        {errorMsg && <p>{errorMsg}</p>}
      </header>
    </div>
  );
}

export default App;
