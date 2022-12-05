import React from "react";
import css from "./styles.css";
import { CustomText } from "ui/custom-text";
import { ParkImg } from "ui/assets/park";

const Banner = () => {
  return (
    <div className={css.root}>
      <div>
        <CustomText variant="title">Mascotas Perdidas Cerca Tuyo</CustomText>
        <CustomText variant="paraph">
          Con esta app vas a poder ayudar a mascotas a reencontrarse con su
          familia. echa un vistazo!
        </CustomText>
      </div>
      <div className={css.bannerImage}>
        aca deberia estar la imagen de fondo
        <ParkImg></ParkImg>
      </div>
    </div>
  );
};

export { Banner };
