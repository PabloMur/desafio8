import React from "react";
import { MapboxPetsAround } from "components/mapbox";
import { PetsAround } from "components/pets-around";
import { PetResults } from "components/petResults";

const MapboxPage = () => {
  return (
    <>
      <MapboxPetsAround variant="finder"></MapboxPetsAround>
      <PetsAround></PetsAround>
    </>
  );
};

export { MapboxPage };
