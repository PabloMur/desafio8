import { desplegarMenuAtom, loaderAtom, routeAtom } from "atoms/uiAtoms";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";

export function desplegarMenu() {
  //aca tengo que hacer una funcion que interprete el estado y en base a eso lo cambie co
  // un click...
}

export function useRoute() {
  const [routeValue, setRouteValue] = useRecoilState(routeAtom);
  return setRouteValue;
}

export const useGoTo = () => {
  const goTo = useNavigate();
  return goTo;
};

export const useLoader = () => {
  const [value, setValue] = useRecoilState(loaderAtom);
  return setValue;
};
