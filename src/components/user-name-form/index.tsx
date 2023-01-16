import React, { useEffect } from "react";
import { NameTextField } from "ui/text-field";
import { MainButton } from "ui/buttons";
import css from "./styles.css";
import { CustomText } from "ui/custom-text";
import { useGetMeName, useUserName, useSetUpdateName } from "hooks";
import { APIUpdateMeName } from "lib/api";

const UserNameForm = () => {
  let userName = useUserName();
  let updateNameSetter = useSetUpdateName();

  const handleSubmit = (e) => {
    e.preventDefault();
    updateNameSetter(e.target.username.value);
  };

  return (
    <form className={css.root} onSubmit={handleSubmit}>
      <CustomText variant="p">Nombre</CustomText>
      <NameTextField name="username" placeholder={userName}></NameTextField>
      <MainButton>Guardar Nombre</MainButton>
    </form>
  );
};

export { UserNameForm };
