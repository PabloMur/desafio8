import React, { useState, useEffect } from "react";
import css from "./styles.css";
import { CustomText } from "ui/custom-text";
import { CustomButton } from "ui/buttons";
import { PopupPermissionBanner } from "components/popupPermission";
import { Link } from "react-router-dom";

const Banner = () => {
  const [mostrado, setMostrado] = useState({
    mostrado: false,
  });

  const findPets = () => {
    if (mostrado.mostrado) setMostrado({ mostrado: false });
    else setMostrado({ mostrado: true });
  };

  useEffect(() => {
    console.log("useEffect");
  }, [mostrado]);

  return (
    <div className={css.root}>
      <div>{JSON.stringify(mostrado.mostrado)}</div>
      <div className={css.text}>
        <CustomText variant="title">Mascotas Perdidas Cerca Tuyo</CustomText>
        <CustomText variant="paraph">
          Con esta app vas a poder ayudar a mascotas a reencontrarse con su
          familia. echa un vistazo!
        </CustomText>
        <CustomButton onClick={findPets}>Buscar Mascotas</CustomButton>
      </div>
      <div className={css.bannerImage}></div>
    </div>
  );
};

export { Banner };
