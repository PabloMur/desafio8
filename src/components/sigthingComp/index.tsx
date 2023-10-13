import { petOwnerEmail, sigthingPetNameAtom } from "atoms/userAtoms";
import { useSendPetOwnerEmail } from "hooks";
import React from "react";
import { useRecoilValue } from "recoil";
import { MainButton } from "ui/buttons";
import { CustomText } from "ui/custom-text";
import css from "./styles.css";

function SigthingComp() {
  const petName = useRecoilValue(sigthingPetNameAtom);
  const ownerEmail = useRecoilValue(petOwnerEmail);
  const sendInformation = useSendPetOwnerEmail();

  function handleSubmit(e) {
    e.preventDefault();
    const mensaje = {
      to: ownerEmail,
      from: "pablomurillo.sp@gmail.com",
      subject: `Avistamiento de tu mascota: ${petName}!`,
      text: "and",
      html: `<strong>Hola! Quizas tengamos buenas noticias acerca de ${petName}!!
              <br>Ya que ${e.target.nombre.value}, tiene informacion de tu mascota.
              <br>Te ha dejado este mensaje: "...${e.target.detalles.value}...".
              <br>Y aqui esta su telefono para que puedas comunicarte: ${e.target.telefono.value} 
              </strong>`,
    };
    sendInformation(mensaje);
  }
  return (
    <div className={css.root}>
      <CustomText variant="title">
        Obtener informacion del reporte {petName}
      </CustomText>
      <form onSubmit={handleSubmit} className={css.form}>
        <label>
          <CustomText variant="p">Telefono de la organizacion</CustomText>
          <input type="text" name="telefono" className={css.input}></input>
        </label>
        <label>
          <CustomText variant="p">Detalles de donde lo viste:</CustomText>
          <textarea name="detalles" className={css.textArea}></textarea>
        </label>
        <MainButton>Enviar informacion al reportante</MainButton>
      </form>
    </div>
  );
}

export { SigthingComp };
