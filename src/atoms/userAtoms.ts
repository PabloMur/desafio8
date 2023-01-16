import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist();

export const userLogged = atom({
  key: "userLogged",
  default: {
    logged: false,
  },
  effects_UNSTABLE: [persistAtom],
});

export const userEmail = atom({
  key: "userEmail",
  default: "example@gmail.com",
  effects_UNSTABLE: [persistAtom],
});

export const userName = atom({
  key: "userName",
  default: "User Name",
  effects_UNSTABLE: [persistAtom],
});

export const updateName = atom({
  key: "updateName",
  default: "",
});

export const userToken = atom({
  key: "userToken",
  default: "token",
  effects_UNSTABLE: [persistAtom],
});

export const userId = atom({
  key: "userId",
  default: "",
  effects_UNSTABLE: [persistAtom],
});

export const userLocation = atom({
  key: "useLocation",
  default: {
    lat: -38.0106565,
    lng: -57.5556473,
  },
  effects_UNSTABLE: [persistAtom],
});

export const userPets = atom({
  key: "userPets",
  default: [],
  effects_UNSTABLE: [persistAtom],
});

export const userReport = atom({
  key: "userReport",
  default: [],
  effects_UNSTABLE: [persistAtom],
});

export const userEdit = atom({
  key: "userEdit",
  default: [],
  effects_UNSTABLE: [persistAtom],
});
