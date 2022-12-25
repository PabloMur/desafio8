import React, { useEffect, useRef } from "react";
import css from "./styles.css";
import { TextField } from "ui/text-field";
import { CustomButton } from "ui/buttons";
import { MyDropzone } from "components/testDropzone";
import { CustomText } from "ui/custom-text";

const ReportMaker = () => {
  function Mostrar() {
    console.log("mostrar algo");
  }

  return (
    <div className={css.root}>
      <CustomText variant="title">Reportar Mascota</CustomText>
      <form className={css.form}>
        <label>
          <CustomText variant="p">El nombre de tu mascota</CustomText>
          <TextField name="petname"></TextField>
        </label>
        <label className={css.test}>
          <CustomText variant="p">Imagen de tu mascota</CustomText>
          <MyDropzone />
        </label>
        <label>
          <CustomText variant="p">Zona en la que se perdio</CustomText>
        </label>
        <CustomButton onClick={Mostrar}>Roportar Mascota</CustomButton>
        <CustomButton onClick={Mostrar}>Cancelar Reporte</CustomButton>
      </form>
    </div>
  );
};

export { ReportMaker };
