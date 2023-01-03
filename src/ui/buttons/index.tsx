import React from "react";
import css from "./index.css";
import { Link } from "react-router-dom";
import { CustomText } from "ui/custom-text";

const MainButton = ({ children }) => {
  return <button className={css.MainButton}>{children}</button>;
};

const CustomButton = ({ children, onClick }) => {
  return (
    <button className={css.customButton} onClick={onClick}>
      {children}
    </button>
  );
};

export const ReportButton = ({ onClick, variant }) => {
  const MakeReportButton = () => {
    return <button className={css.makeReport}>Reportar Mascota</button>;
  };

  const CancelReport = () => {
    return <button className={css.cancelReport}>Cancelar Reporte</button>;
  };

  return variant == "makeReport" ? <MakeReportButton /> : <CancelReport />;
};

export const LoginButton = ({ children, route }) => {
  return (
    <Link className={css.linkLogin} to={route}>
      <button className={css.login}>
        <CustomText variant="p">{children}</CustomText>
      </button>
    </Link>
  );
};

export const SignupButton = ({ children, route }) => {
  return (
    <button className={css.signup}>
      <Link className={css.link} to={route}>
        <CustomText variant="p">{children}</CustomText>
      </Link>
    </button>
  );
};

const MenuButton = ({ children, route }) => {
  return (
    <button className={css.root}>
      <Link className={css.link} to={route}>
        {children}
      </Link>
    </button>
  );
};

const LocationPermissionButton = () => {
  return <button>Aceptar y continuar!</button>;
};
export { MenuButton, CustomButton, LocationPermissionButton, MainButton };
