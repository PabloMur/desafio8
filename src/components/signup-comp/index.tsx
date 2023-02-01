import React from "react";
import css from "./styles.css";
import { MainButton } from "ui/buttons";
import { CustomText } from "ui/custom-text";
import { TextField } from "ui/text-field";
import { useCreateUser } from "hooks";

const SignupForm = () => {
  const funcionCreadora = useCreateUser();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form en funcionamiento");
    funcionCreadora({
      fullname: "zapatilla",
      email: "zapatilla@gmail.com",
      password: "123",
    });
  };

  return (
    <div className={css.root}>
      <form className={css.form} onSubmit={handleSubmit}>
        <label>
          <CustomText variant="p">Email</CustomText>
          <TextField type="text" name="email"></TextField>
        </label>
        <label>
          <CustomText variant="p">Contraseña</CustomText>
          <TextField type="password" name="contUno"></TextField>
        </label>
        <label>
          <CustomText variant="p">Repite la Contraseña</CustomText>
          <TextField type="password" name="contDos"></TextField>
        </label>
        <MainButton>Crear cuenta</MainButton>
      </form>
    </div>
  );
};

export { SignupForm };
