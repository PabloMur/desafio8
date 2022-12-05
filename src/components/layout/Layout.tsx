import React, { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import { SearchForm } from "../search-form/SearchForm";
import css from "./layout.css";
import { Header } from "components/header";
import { Footer } from "components/footer";

/* <header style={{ border: "solid 1px" }}>
        <SearchForm />
      </header> */

function Layout() {
  console.log(css);
  return (
    <div className={css.root}>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

export { Layout };
