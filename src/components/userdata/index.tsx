import React from "react";
import css from "./styles.css";
import { UserNameForm } from "components/user-name-form";
import { UserPasswordForm } from "components/user-password-form";

const UserData = () => {
  return (
    <div className={css.root}>
      <UserNameForm />
      <UserPasswordForm />
    </div>
  );
};

export { UserData };
