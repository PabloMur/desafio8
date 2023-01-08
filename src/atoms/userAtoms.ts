import { atom } from "recoil";

export const userLogged = atom({
  key: "userLogged",
  default: {
    logged: false,
  },
});

export const userEmail = atom({
  key: "userEmail",
  default: "example@gmail.com",
});

export const userToken = atom({
  key: "userToken",
  default: "token",
});

export const userLocation = atom({
  key: "useLocation",
  default: {
    lat: -38.0106565,
    lng: -57.5556473,
  },
});
