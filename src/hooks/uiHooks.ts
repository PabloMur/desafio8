import { desplegarMenuAtom, loaderAtom, routeAtom } from "atoms/uiAtoms";
import { useNavigate } from "react-router-dom";
import { useRecoilState, useSetRecoilState } from "recoil";

export function desplegarMenu() {}

export function useRoute() {
  const setRouteValue = useSetRecoilState(routeAtom);
  localStorage.setItem("route", "test");
  return setRouteValue;
}

export const useGoTo = () => {
  const goTo = useNavigate();
  return goTo;
};

export const useLoader = () => {
  const setValue = useSetRecoilState(loaderAtom);
  localStorage.setItem("loader", "test");
  return setValue;
};
