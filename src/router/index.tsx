import React from "react";
import { Route, Routes } from "react-router-dom";
import { Home } from "pages/Home";
import { UserDataPage } from "pages/UserData";
import { Search } from "pages/Search";
import { Layout } from "components/layout/Layout";
import { SearchResults } from "pages/SearchResults";
import { MapboxPage } from "pages/Mapbox";
import { ReportPage } from "pages/Report";
import { PetAroundPage } from "pages/PetsAround";
import { LoginPage } from "pages/LoginPage";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="userdata" element={<UserDataPage />}></Route>
        <Route path="mapbox" element={<MapboxPage />}></Route>
        <Route path="report" element={<ReportPage />}></Route>
        <Route path="pets-around" element={<PetAroundPage />}></Route>
        <Route path="login" element={<LoginPage />}></Route>
        <Route path="search/:query" element={<SearchResults />}></Route>
      </Route>
    </Routes>
  );
}

export { AppRoutes };
