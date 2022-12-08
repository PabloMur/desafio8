import React, { useState, useEffect } from "react";
import css from "./styles.css";
import { CustomText } from "ui/custom-text";
import { CustomButton } from "ui/buttons";
import { PopupPermissionBanner } from "components/popupPermission";
import { Link } from "react-router-dom";
import { useUserPosition } from "hooks";

const Banner = () => {
  const [mostrado, setMostrado] = useState({
    mostrado: false,
  });

  const findPets = () => {
    useUserPosition();
  };

  return (
    <div className={css.root}>
      <div className={css.text}>
        <CustomText variant="title">Mascotas Perdidas Cerca Tuyo</CustomText>
        <CustomText variant="paraph">
          Con esta app vas a poder ayudar a mascotas a reencontrarse con su
          familia. echa un vistazo!
        </CustomText>
        <Link to="pets-around">
          <CustomButton onClick={useUserPosition}>Buscar Mascotas</CustomButton>
        </Link>
      </div>
      <div className={css.bannerImage}></div>
    </div>
  );
};

export { Banner };
