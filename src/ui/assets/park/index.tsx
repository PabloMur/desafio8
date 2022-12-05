import React from "react";
import css from "./styles.css";
import parque from "../img/park.jpg";

const ParkImg = () => {
  return (
    <div className={css.test}>
      <img src={parque} alt="" />
    </div>
  );
};

export { ParkImg };
