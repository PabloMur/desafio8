import React from "react";
import { Route, Routes } from "react-router-dom";
import { Home } from "pages/Home";
import { Page2 } from "pages/page2";
import { Search } from "pages/Search";
import { Layout } from "components/Layout";
import { SearchResults } from "pages/SearchResults";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="page2" element={<Page2 />}></Route>
        <Route path="search/:query" element={<SearchResults />}></Route>
      </Route>
    </Routes>
  );
}

export { AppRoutes };
