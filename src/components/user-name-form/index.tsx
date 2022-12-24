import React from "react";
import { TextField } from "ui/text-field";
import { CustomButton, MainButton } from "ui/buttons";
import css from "./styles.css";
import { CustomText } from "ui/custom-text";

const UserNameForm = () => {
  function handleSubmit(e) {
    e.preventDefault();
    console.log(e.target);
  }
  return (
    <form className={css.root} onSubmit={handleSubmit}>
      <CustomText variant="p">Nombre</CustomText>
      <TextField name="username"></TextField>
      <MainButton>Guardar Nombre</MainButton>
    </form>
  );
};

export { UserNameForm };
