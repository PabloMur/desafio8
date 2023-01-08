import React from "react";
import css from "./styles.css";
import { TextField } from "ui/text-field";
import { MainButton } from "ui/buttons";
import { CustomText } from "ui/custom-text";
import { useCheckUserEmail } from "hooks";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const goTo = useNavigate();

  const checkEmailFromField = async (e) => {
    e.preventDefault();
    console.log("prendido");
    const check = await useCheckUserEmail(e.target.email.value);
    console.log("apagado");
    check ? goTo("/password") : goTo("/signup");
  };

  return (
    <div className={css.root}>
      <form className={css.form} onSubmit={checkEmailFromField}>
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
