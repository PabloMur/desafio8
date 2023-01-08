import { atom } from "recoil";

export const userLogged = atom({
  key: "userLogged",
  default: {
    logged: false,
  },
});

export const userLocation = atom({
  key: "useLocation",
  default: {
    lat: -38.0106565,
    lng: -57.5556473,
  },
});
