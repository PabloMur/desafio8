import React from "react";
import css from "./styles.css";
import { TextField } from "ui/text-field";
import { MainButton } from "ui/buttons";
import { CustomText } from "ui/custom-text";
import { useGetUserToken } from "hooks";
import { useLoader } from "hooks/uiHooks";
import { useGoTo } from "hooks/uiHooks";
import { useSetUserLogged } from "hooks";

const PasswordFormComp = () => {
  let seterLoaderState = useLoader();
  let goTo = useGoTo();
  let setLogedin = useSetUserLogged();
  let userToken;

  const handleSubmit = async (e) => {
    e.preventDefault();
    seterLoaderState({ mostrado: true });
    userToken = await useGetUserToken({
      email: "jueves@gmail.com",
      password: e.target.password.value,
    });
    seterLoaderState({ mostrado: false });
    setLogedin({ logged: true });
    userToken ? goTo("/") : alert("contraseña incorrecta");
  };

  return (
    <div className={css.root}>
      <form className={css.form} onSubmit={handleSubmit}>
        <label>
          <CustomText variant="">Ingresa tu contraseña</CustomText>
          <TextField type="password" name="password"></TextField>
          <MainButton>Ingresar</MainButton>
        </label>
      </form>
    </div>
  );
};

export { PasswordFormComp };
