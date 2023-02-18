import React from "react";
import { MapboxPetsAround } from "components/mapbox";
import { PetsAround } from "components/pets-around";

const MapboxPage = () => {
  return (
    <>
      <MapboxPetsAround variant="finder"></MapboxPetsAround>
      <PetsAround></PetsAround>
    </>
  );
};

export { MapboxPage };
