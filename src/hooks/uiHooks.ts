import { desplegarMenuAtom, loaderAtom } from "atoms/uiAtoms";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";

export function desplegarMenu() {
  //aca tengo que hacer una funcion que interprete el estado y en base a eso lo cambie co
  // un click...
}

export const useGoTo = () => {
  localStorage.setItem("test", "test");
  const goTo = useNavigate();
  return goTo;
};

export const useLoader = () => {
  localStorage.setItem("test", "test");
  const [value, setValue] = useRecoilState(loaderAtom);
  return value.mostrado;
};
