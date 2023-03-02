import { useRecoilValue, useSetRecoilState, useRecoilState, useResetRecoilState } from "recoil";
import {
  editPetAtom,
  reportPetImageDataUrl,
  reportPetName,
  reportPetZone,
  updateName,
  userEmail,
  userLocation,
  userLogged,
  userName,
  userPets,
  userToken,
} from "atoms/userAtoms";
import {
  APICheckEmail,
  APICreatePet,
  APICreateUser,
  APIDeletePet,
  APIGetMeName,
  APIGetMePets,
  APIgetPetsAround,
  APIGetToken,
  APIUpdateMeName,
  APIUpdatePassword,
} from "lib/api";
import { useGoTo, useLoader } from "./uiHooks";

//Login, Logged y Logout
export function useUserLogged() {
  const value = useRecoilValue(userLogged);
  return value.logged;
}

export function useSetUserLogged() {
  const setUserLogged = useSetRecoilState(userLogged);
  return setUserLogged;
}

export function useUserLogout() {
  return localStorage.clear();
}

//setter y getter de Email
export function useUserEmail() {
  const value = useRecoilValue(userEmail);
  return value;
}

export function useSetUserEmail() {
  const setter = useSetRecoilState(userEmail);
  return setter;
}

export const useCheckUserEmail = (email: string) => {
  return APICheckEmail(email);
};

//create an user
export const useCreateUser = () => {
  const loader = useLoader();
  const createUser = async (params) => {
    loader({ mostrado: true });
    const user = await APICreateUser(params);
    loader({ mostrado: false });
    return user;
  };
  return createUser;
};

//setter y getter de Name
export function useGetMeName() {
  const setterLoader = useLoader();
  const nameSetterState = useSetRecoilState(userName);

  async function userNameFromApi(token: any) {
    setterLoader({ mostrado: true });
    const trajoElNombre = await APIGetMeName(token);
    if (trajoElNombre) {
      nameSetterState(trajoElNombre.fullname);
      setterLoader({ mostrado: false });
    }
  }

  return userNameFromApi;
}

export function useUserName() {
  const username = useRecoilValue(userName);
  return username;
}

export function useSetUserName() {
  return useSetRecoilState(userName);
}

export function useSetUpdateName() {
  return useSetRecoilState(updateName);
}

export function useUpdateNameFunction() {
  let updateNameSetter = useSetUpdateName();
  const setterLoader = useLoader();
  const token = useUserToken();

  const updateName = async (e) => {
    const fullname = e.target.username.value;
    setterLoader({ mostrado: true });
    updateNameSetter(fullname);
    const updated = await APIUpdateMeName({ fullname, token });
    if (updated) setterLoader({ mostrado: false });
  };

  return updateName;
}

export function useUpdatePasswordFunction() {
  const setterLoader = useLoader();
  const token = useUserToken();

  const updatePassword = async (password) => {
    setterLoader({ mostrado: true });
    const updated = await APIUpdatePassword({ password, token });
    if (updated) setterLoader({ mostrado: false });
  };

  return updatePassword;
}

//User Location
export function useUserLocation(){
  const currentUserLocation = useRecoilValue(userLocation)
  return currentUserLocation
}

//User position
export function useUserPosition() {
  try {
    const goTo = useGoTo()
    const userCordsSetter = useSetRecoilState(userLocation);
    const options = {
      enableHighAccuracy: true,
      timeout: 50000,
      maximumAge: 0,
    };

    function success(pos) {
      const crd = pos.coords;
      const cords = { lat: crd.latitude, lng: crd.longitude };
      console.log(crd.latitude, crd.longitude);
      userCordsSetter(cords);
      goTo("/mapbox")
    }

    function error(err) {
      console.warn(`ERROR(${err.code}): ${err.message}`);
    }

    function getUserPosition() {
      navigator.geolocation.getCurrentPosition(success, error, options);
    }
    return getUserPosition;
  } catch (error) {
    console.error(error);
  }
}

//setter y getter de token
export const useGetUserToken = (params) => {
  return APIGetToken(params);
};

export const useUserToken = () => {
  const token = useRecoilValue(userToken);
  return token;
};

export function useSetUserToken() {
  const tokenSetter = useSetRecoilState(userToken);
  return tokenSetter;
}

//getter de ME
export function useGetMePets() {
  const setterLoader = useLoader();
  const token = useUserToken();
  const setterPets = useSetUserPets();

  const getMePets = async () => {
    setterLoader({ mostrado: true });
    const pets = await APIGetMePets(token);
    if (pets) {
      setterPets(pets);
      setterLoader({ mostrado: false });
    }
  };

  return getMePets;
}

export function useSetUserPets() {
  return useSetRecoilState(userPets);
}

export function useUserPets() {
  return useRecoilValue(userPets);
}

export function useReportNewPet() {
  const token = useUserToken();
  const setterLoader = useLoader();

  const createPet = async (params) => {
    setterLoader({ mostrado: true });
    const createdPet = await APICreatePet(params, token);
    console.log(params, "desde el hook");

    if (createdPet) setterLoader({ mostrado: false });
  };

  return createPet;
}

export function useDeletePet() {
  const setterLoader = useLoader();
  const userToken = useUserToken();
  const deletePet = async (id) => {
    setterLoader({ mostrado: true });
    const mascotaEliminada = await APIDeletePet(id, userToken);
    if (mascotaEliminada) {
      setterLoader({ mostrado: false });
      location.reload();
    }
  };
  return deletePet;
}

export function useEditPet() {
  const [value, setValue] = useRecoilState(editPetAtom);
  const token = useUserToken();
  async function mostrarDataParaEditar() {
    console.log(value);
  }
  return mostrarDataParaEditar;
}

export function useSetReportPetName() {
  const setter = useSetRecoilState(reportPetName);
  return setter;
}

export function useSetImageDataUrl() {
  const setter = useSetRecoilState(reportPetImageDataUrl);
  return setter;
}

export function useGetterImageDataURL() {
  const value = useRecoilValue(reportPetImageDataUrl);
  return value;
}

export function useSetPetZone(){
  const petZoneSetter = useResetRecoilState(reportPetZone)
  return petZoneSetter
}

export function useGetPetZone(){
  const petZoneAtomCurrentValue = useRecoilValue(reportPetZone)
  return petZoneAtomCurrentValue
}

export async function useGetPetsAround(lat, lng) {
  const mostrar = async () => {
    const mascotas = await APIgetPetsAround(lat, lng);
    return mascotas;
  };
  return mostrar;
}
