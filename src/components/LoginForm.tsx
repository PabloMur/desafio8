import React from "react";
import { TextField } from "./TextField";

type FormProps = {
  onLogin: (params: { email: string; password: string }) => any;
};

function LoginForm(props: FormProps) {
  function onSubmitHandler(e) {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    props.onLogin({
      email,
      password,
    });
  }
  return (
    <form onSubmit={onSubmitHandler}>
      <TextField type="email" name="email" label="email"></TextField>
      <TextField type="password" name="password"></TextField>
      <button>Ingresar</button>
    </form>
  );
}

export { LoginForm };
