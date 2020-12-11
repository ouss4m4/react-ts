import React, { ReactElement } from "react";

interface Props {
  pages: number;
  changePage: Function;
  dataPerPage: number;
  changeDataPerPage: Function;
}

export default function Paginator({
  changePage,
  pages,
  dataPerPage,
  changeDataPerPage,
}: Props): ReactElement {
  const buildButtons = (pages: number): ReactElement[] => {
    let res = [];
    for (let i = 0; i < pages; i++) {
      res.push(
        <button key={i} onClick={() => changePage(i)}>
          {i + 1}
        </button>
      );
    }
    return res;
  };
  return (
    <>
      <div className="data-select">
        <select
          value={dataPerPage}
          onChange={(e) => changeDataPerPage(e.target.value)}
        >
          <option value={10}>10</option>
          <option value={15}>15</option>
          <option value={20}>20</option>
        </select>
        <label style={{fontSize: '14px'}}>Per Page</label>
      </div>
      <div className="paginator">{buildButtons(pages)}</div>
    </>
  );
}
