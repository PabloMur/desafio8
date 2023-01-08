import React from "react";
import css from "./styles.css";
import { TextField } from "ui/text-field";
import { MainButton } from "ui/buttons";
import { CustomText } from "ui/custom-text";
import { useGetUserToken } from "hooks";
import { useLoader } from "hooks/uiHooks";

const PasswordFormComp = () => {
  const handleSubmit = async (e) => {
    e.preventDefault();
    await useGetUserToken({
      email: "jueves@gmail.com",
      password: e.target.password.value,
    });
  };

  return (
    <div className={css.root}>
      <form className={css.form} onSubmit={handleSubmit}>
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
