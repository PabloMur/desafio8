import React from "react";

type TextFieldProps = {
  label?: string;
  type: string;
  name: string;
};

function TextField(props: TextFieldProps) {
  const label = props.label || props.name;
  return (
    <label>
      <h3>{label}</h3>
      <input type={props.type} name={props.name} />
    </label>
  );
}

export { TextField };
