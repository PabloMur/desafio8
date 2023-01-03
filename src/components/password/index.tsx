import React from "react";
import css from "./styles.css";
import { TextField } from "ui/text-field";
import { MainButton } from "ui/buttons";
import { CustomText } from "ui/custom-text";

const PasswordFormComp = () => {
  return (
    <div className={css.root}>
      <form className={css.form}>
        <label>
          <CustomText variant="">Ingresa tu contraseña</CustomText>
          <TextField name="password"></TextField>
          <MainButton>Ingresar</MainButton>
        </label>
      </form>
    </div>
  );
};

export { PasswordFormComp };
