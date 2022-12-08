import React, { useState } from "react";
import css from "./index.css";
import { Line, LeftLine, RightLine } from "ui/line";

const Cross = () => {
  return (
    <div className={css.crosslineContainer}>
      <LeftLine></LeftLine>
      <RightLine></RightLine>
    </div>
  );
};

const Triline = () => {
  return (
    <div className={css.trilineContainer}>
      <Line></Line>
      <Line></Line>
      <Line></Line>
    </div>
  );
};

const BurgerButton = () => {
  const [clicked, setClicked] = useState(false);

  function handleClick() {
    setClicked(!clicked);
  }

  return (
    <div onClick={handleClick} className={css.root}>
      {clicked ? <Cross /> : <Triline />}
    </div>
  );
};

export { BurgerButton };
