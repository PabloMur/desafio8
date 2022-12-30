import React, { useEffect, useRef } from "react";
import css from "./styles.css";
import { TextField } from "ui/text-field";
import { CustomButton } from "ui/buttons";
import { CustomText } from "ui/custom-text";
import { initDropzone } from "lib/dropzone";
import { MapboxPetsAround } from "components/mapbox";

const ReportMaker = () => {
  function Mostrar() {
    console.log("mostrar algo");
  }

  const dropzoneRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    initDropzone(dropzoneRef.current);
  }, []);

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
          <div className={css.dropzone} ref={dropzoneRef}></div>
        </label>
        <label>
          <CustomText variant="p">Zona en la que se perdio</CustomText>
          <div>
            <MapboxPetsAround />
          </div>
        </label>
        <CustomButton onClick={Mostrar}>Roportar Mascota</CustomButton>
        <CustomButton onClick={Mostrar}>Cancelar Reporte</CustomButton>
      </form>
    </div>
  );
};

export { ReportMaker };
