import React, { useEffect, useRef } from "react";
import css from "./styles.css";
import { TextField } from "ui/text-field";
import { CustomButton } from "ui/buttons";
import { CustomText } from "ui/custom-text";
import { initDropzone } from "lib/dropzone";
import { MapboxPetsAround } from "components/mapbox";
import { ReportButton } from "ui/buttons";

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
        <label className={css.label}>
          <CustomText variant="p">El nombre de tu mascota</CustomText>
          <TextField name="petname"></TextField>
        </label>
        <label className={css.label}>
          <CustomText variant="p">Imagen de tu mascota</CustomText>
          <div className={css.dropzone} ref={dropzoneRef}></div>
        </label>
        <label className={css.label}>
          <CustomText variant="p">Zona en la que se perdio</CustomText>
          <div>
            <MapboxPetsAround />
          </div>
        </label>
        <ReportButton variant="makeReport" onClick={Mostrar}></ReportButton>
        <ReportButton variant="cancelReport" onClick={Mostrar}></ReportButton>
      </form>
    </div>
  );
};

export { ReportMaker };
