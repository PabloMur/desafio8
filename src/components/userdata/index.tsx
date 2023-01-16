import React from "react";
import css from "./styles.css";
import { UserNameForm } from "components/user-name-form";
import { UserPasswordForm } from "components/user-password-form";
import { CustomText } from "ui/custom-text";
import { useGetMeName } from "hooks";
import { APIUpdateMeName } from "lib/api";

const UserData = () => {
  useGetMeName();
  APIUpdateMeName();
  return (
    <div className={css.root}>
      <CustomText variant="title">Mis Datos</CustomText>
      <UserNameForm />
      <UserPasswordForm />
    </div>
  );
};

export { UserData };
