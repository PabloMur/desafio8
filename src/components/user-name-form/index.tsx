import React from "react";
import { TextField } from "ui/text-field";
import { CustomButton } from "ui/buttons";
import css from "./styles.css";

const UserNameForm = () => {
  function handleSubmit(e) {
    e.preventDefault();
    console.log(e.target);
  }
  return (
    <form className={css.root} onSubmit={handleSubmit}>
      <TextField name="username"></TextField>
      <CustomButton
        onClick={() => {
          console.log("test");
        }}
      >
        Modificar Nombre
      </CustomButton>
    </form>
  );
};

export { UserNameForm };
