import React, { useEffect, useRef, useCallback } from "react";
import css from "./styles.css";
import { TextField } from "ui/text-field";
import { CustomButton } from "ui/buttons";
import Dropzone from "dropzone";
import { useDropzone } from "react-dropzone";

const ReportMaker = () => {
  const inputRef = useRef<HTMLDivElement>(null);
  const otraRef = React.createRef<HTMLDivElement>();

  function Mostrar() {
    console.log("mostrar algo");
  }

  useEffect(() => {
    console.log(inputRef.current);
    console.log(otraRef.current);
  }, []);

  return (
    <div className={css.root}>
      <form className={css.form}>
        <label htmlFor="petname">
          <p>El nombre de tu mascota</p>
          <TextField name="petname"></TextField>
        </label>
        <label htmlFor="petname">
          <p>Imagen de tu mascota</p>
          <div ref={inputRef}>Arrastra una imagen</div>
          <div ref={otraRef}>Test</div>
        </label>
        <CustomButton onClick={Mostrar}>Roportar Mascota</CustomButton>
        <CustomButton onClick={Mostrar}>Cancelar Reporte</CustomButton>
      </form>
    </div>
  );
};

export { ReportMaker };
