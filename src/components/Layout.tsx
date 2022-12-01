import React, { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import { SearchForm } from "components/SearchForm";
import css from "./layout.css";

function Layout() {
  console.log(css);
  return (
    <div className={css.root}>
      <header style={{ border: "solid 1px" }}>
        <SearchForm />
      </header>
      <Outlet />
      <footer>Footer</footer>
    </div>
  );
}

export { Layout };
