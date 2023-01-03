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

// BORRAR ESTO ANTES DE ENTREGAR
// export const test = atom({
//   key: "test",
//   default: "mostrado",
// });
