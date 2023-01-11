import React from "react";
import { NameTextField, TextField } from "ui/text-field";
import { CustomButton, MainButton } from "ui/buttons";
import css from "./styles.css";
import { CustomText } from "ui/custom-text";
import { useUserName } from "hooks";

const UserNameForm = () => {
  let userName = useUserName();

  function handleSubmit(e) {
    e.preventDefault();
    console.log(e.target);
  }
  return (
    <form className={css.root} onSubmit={handleSubmit}>
      <CustomText variant="p">Nombre</CustomText>
      <NameTextField name="username" placeholder={userName}></NameTextField>
      <MainButton>Guardar Nombre</MainButton>
    </form>
  );
};

export { UserNameForm };
