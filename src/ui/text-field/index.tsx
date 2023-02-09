import { useSetReportPetName } from "hooks";
import React from "react";
import css from "./index.css";

export function TextField({ name, type }) {
  function NormalTextField() {
    return <input name={name} className={css.root} type="text"></input>;
  }
  function PasswordTextField() {
    return <input name={name} className={css.root} type="password"></input>;
  }

  return type === "text" ? <NormalTextField /> : <PasswordTextField />;
}

export function NameTextField({ name, placeholder }) {
  return (
    <input
      name={name}
      className={css.root}
      type="text"
      placeholder={placeholder}
    ></input>
  );
}

export function ReportNameField() {
  const nameSetter = useSetReportPetName();
  function handleChange(e) {
    const petName = e.target.value;
    nameSetter(petName);
  }
  return (
    <input
      className={css.root}
      type="reportname"
      onChange={handleChange}
    ></input>
  );
}
