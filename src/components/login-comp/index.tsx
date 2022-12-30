import React from "react";
import css from "./styles.css";
import { TextField } from "ui/text-field";
import { MainButton } from "ui/buttons";
import { CustomText } from "ui/custom-text";

const LoginForm = () => {
  return (
    <div className={css.root}>
      <form className={css.form}>
        <label>
          <CustomText variant="p">Ingresa Tu Email:</CustomText>
          <TextField name="email"></TextField>
          <MainButton>Comenzar</MainButton>
        </label>
      </form>
    </div>
  );
};

export { LoginForm };
