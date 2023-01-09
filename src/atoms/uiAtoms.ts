import { atom } from "recoil";

export const popupPermissionCardState = atom({
  key: "popupPermissionCard", // unique ID (with respect to other atoms/selectors)
  default: {
    mostrado: false,
  },
});

export const desplegarMenuAtom = atom({
  key: "desplegarMenu", // unique ID (with respect to other atoms/selectors)
  default: {
    mostrado: false,
  },
});

export const loaderAtom = atom({
  key: "activarDesactivarLoader",
  default: {
    mostrado: false,
  },
});

export const routeAtom = atom({
  key: "selectedRoute",
  default: {
    route: "/",
  },
});
