import React, { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import { SearchForm } from "../search-form/SearchForm";
import css from "./layout.css";
import { Header } from "components/header";
import { Footer } from "components/footer";

function Layout() {
  return (
    <div className={css.root}>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

export { Layout };
