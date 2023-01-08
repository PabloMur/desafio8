import React, { useEffect } from "react";
import css from "./styles.css";
import { CustomText } from "ui/custom-text";
import { CustomButton } from "ui/buttons";
import { popupPermissionCardState } from "atoms/uiAtoms";
import { useRecoilState } from "recoil";
import { useUserLogged, useUserPosition } from "hooks";

const Banner = () => {
  const [value, setValue] = useRecoilState(popupPermissionCardState);

  const dataFromHook = useUserLogged();
  const position = useUserPosition();

  useEffect(() => {}, []);

  const MostrarPopup = () => {
    setValue({ mostrado: true });
  };

  return (
    <div className={css.root}>
      <div className={css.text}>
        <CustomText variant="title">Mascotas Perdidas Cerca Tuyo</CustomText>
        <div className={css.pcontainer}>
          <CustomText variant="paraph">
            Con esta app vas a poder ayudar a mascotas a reencontrarse con su
            familia. echa un vistazo!
          </CustomText>
        </div>
        <CustomButton onClick={MostrarPopup}>Buscar Mascotas</CustomButton>
      </div>
      <div className={css.bannerImage}></div>
    </div>
  );
};

export { Banner };
