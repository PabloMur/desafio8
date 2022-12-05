import React, { useState, useEffect } from "react";
import { SearchForm } from "../components/search-form/SearchForm";
import { SearchResultItem } from "../components/search-result-item";
import { LoginForm } from "../components/LoginForm";
import { ThankYou } from "../components/ThankYou";
import { Link } from "react-router-dom";
import { UserData } from "components/userdata";

function UserDataPage() {
  return (
    <div>
      <UserData />
    </div>
  );
}

export { UserDataPage };
