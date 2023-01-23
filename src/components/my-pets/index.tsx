import React, { useEffect } from "react";
import css from "./styles.css";
import { CustomText } from "ui/custom-text";
import { useGetMePets, useUserPets } from "hooks";
import { MyPetCardComp } from "components/myPetCardComp";

const MyPetsContainer = () => {
  const traerMascotas = useGetMePets();
  const pets = useUserPets();

  async function getAndRender() {
    await traerMascotas();
  }

  function PetList() {
    const petsList = pets.pets;
    return (
      petsList && (
        <ul>
          {petsList.map((pet) => (
            <li key={pet.fullname} className={css.li}>
              <MyPetCardComp
                nombre={pet.fullname}
                zona={pet.zone}
                image={pet.image}
              ></MyPetCardComp>
            </li>
          ))}
        </ul>
      )
    );
  }

  useEffect(() => {
    getAndRender();
  }, []);

  return (
    <div className={css.root}>
      <CustomText variant="title">Mis Mascotas</CustomText>
      <div className={css.petsContainer}>
        <PetList />
      </div>
    </div>
  );
};

export { MyPetsContainer };
