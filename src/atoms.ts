import { atom, selector } from "recoil";

export const popupPermissionCardState = atom({
  key: "popupPermissionCard", // unique ID (with respect to other atoms/selectors)
  default: {
    mostrado: false,
  },
});

export const userLogged = atom({
  key: "userLoigged",
  default: false,
});

export const userLocation = atom({
  key: "useLocation",
  default: {
    lat: -38.0106565,
    lng: -57.5556473,
  },
});
