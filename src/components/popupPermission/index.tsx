import React, { useEffect } from "react";
import { CustomButton, MainButton } from "ui/buttons";
import css from "./styles.css";
import { popupPermissionCardState } from "atoms/uiAtoms";
import { useRecoilState, useSetRecoilState } from "recoil";
import { EquisComp } from "ui/equis";
import { Link } from "react-router-dom";
import { CustomText } from "ui/custom-text";
import { useUserPosition } from "hooks";

const NonComp = () => {
  return <div className={css.none}></div>;
};

const PopupCartel = () => {
  const setPopupAtom = useSetRecoilState(popupPermissionCardState);
  const position = useUserPosition();
  function cerrarPopUp() {
    position();
    setPopupAtom({ mostrado: false });
  }

  return (
    <div className={css.root}>
      <div className={css.cartel}>
        <div className={css.cartelEquisContainer}>
          <EquisComp onClick={cerrarPopUp}></EquisComp>
        </div>
        <div className={css.textAndButtonContainer}>
          <div className={css.textContainer}>
            <CustomText variant="p">
              Para continuar necesitamos que nos des tu consentimiento para
              obtener tu ubicacion
            </CustomText>
          </div>
          <Link to="mapbox">
            <CustomButton onClick={cerrarPopUp}>
              Aceptar y continuar
            </CustomButton>
          </Link>
        </div>
      </div>
    </div>
  );
};

const PopupPermissionBanner = () => {
  const [value, setValue] = useRecoilState(popupPermissionCardState);
  return (
    <div>
      {value.mostrado ? <PopupCartel></PopupCartel> : <NonComp></NonComp>}
    </div>
  );
};

export { PopupPermissionBanner };
