import { desplegarMenuAtom } from "atoms/uiAtoms";
import { useNavigate } from "react-router-dom";

export function desplegarMenu() {
  //aca tengo que hacer una funcion que interprete el estado y en base a eso lo cambie co
  // un click...
}

export const useGoTo = () => {
  const goTo = useNavigate();
  return goTo;
};
