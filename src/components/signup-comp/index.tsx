import React from "react";
import css from "./styles.css";
import { MainButton } from "ui/buttons";
import { CustomText } from "ui/custom-text";
import { EmailField, TextField } from "ui/text-field";
import { useCreateUser, useUserEmail } from "hooks";

const SignupForm = () => {
  const createNewUser = useCreateUser();
  const userEmail = useUserEmail();

  const handleSubmit = (e) => {
    e.preventDefault();

    const passOne = e.target.contUno.value;
    const passTwo = e.target.contDos.value;
    const passEven = passOne === passTwo;

    const newUser = {
      fullname: "User",
      email: userEmail,
      password: passOne,
    };

    if (passEven) {
      createNewUser(newUser);
    } else alert("Las contrasenias deben ser iguales");
  };

  return (
    <div className={css.root}>
      <form className={css.form} onSubmit={handleSubmit}>
        <label>
          <CustomText variant="p">Email</CustomText>
          <EmailField></EmailField>
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
