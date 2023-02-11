import React from "react";
import css from "./styles.css";
import { ReportNameField, TextField } from "ui/text-field";
import { CustomButton } from "ui/buttons";
import { CustomText } from "ui/custom-text";
import { MapboxPetsAround } from "components/mapbox";
import { ReportButton } from "ui/buttons";
import { DropzoneComp } from "components/dropzone";
import { reportPetName } from "atoms/userAtoms";
import { useRecoilValue } from "recoil";
import { useGetterImageDataURL, useReportNewPet, useUserEmail } from "hooks";

const ReportMaker = () => {
  const createPetFunction = useReportNewPet();
  const userEmail = useUserEmail();
  const petname = useRecoilValue(reportPetName);
  const imageDataUrl = useGetterImageDataURL();
  let mascota = {
    fullname: petname,
    ownerEmail: userEmail,
    zone: "Mar del Plata",
    lat: -38.00594,
    lng: -57.545172,
    state: "perdido",
    image: imageDataUrl,
  };
  function onSubmit(e) {
    e.preventDefault();
    createPetFunction(mascota);
  }

  function Mostrar() {
    console.log("mostrar algo");
  }

  return (
    <div className={css.root}>
      <CustomText variant="title">Reportar Mascota</CustomText>
      <form className={css.form} onSubmit={onSubmit}>
        <label className={css.label}>
          <CustomText variant="p">El nombre de tu mascota</CustomText>
          <ReportNameField></ReportNameField>
        </label>
        <label className={css.label}>
          <CustomText variant="p">Imagen de tu mascota</CustomText>
          <DropzoneComp></DropzoneComp>
        </label>
        <label className={css.label}>
          <CustomText variant="p">Zona en la que se perdio</CustomText>
          <div>
            <MapboxPetsAround variant="report" />
          </div>
        </label>
        <ReportButton variant="makeReport" onClick={Mostrar}></ReportButton>
        <ReportButton variant="cancelReport" onClick={Mostrar}></ReportButton>
      </form>
    </div>
  );
};

export { ReportMaker };
