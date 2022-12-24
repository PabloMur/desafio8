import React, { useState, useEffect } from "react";
import { SearchForm } from "../components/search-form/SearchForm";
import { SearchResultItem } from "../components/search-result-item";
import { LoginForm } from "components/login-comp";
import { ThankYou } from "../components/ThankYou";
import { Link } from "react-router-dom";
import { UserData } from "components/userdata";
import { CustomText } from "ui/custom-text";

function UserDataPage() {
  return (
    <div>
      <UserData />
    </div>
  );
}

export { UserDataPage };
