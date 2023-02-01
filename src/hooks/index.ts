import { useRecoilValue, useSetRecoilState, useRecoilState } from "recoil";
import {
  updateName,
  userEmail,
  userLogged,
  userName,
  userPets,
  userToken,
} from "atoms/userAtoms";
import {
  APICheckEmail,
  APICreateUser,
  APIGetMeName,
  APIGetMePets,
  APIGetToken,
  APIUpdateMeName,
  APIUpdatePassword,
} from "lib/api";
import { useLoader } from "./uiHooks";

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
    console.log(user);
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

//User position
export function useUserPosition() {
  try {
    const options = {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0,
    };

    function success(pos) {
      const crd = pos.coords;
      console.log(crd);
    }

    function error(err) {
      console.warn(`ERROR(${err.code}): ${err.message}`);
    }

    navigator.geolocation.getCurrentPosition(success, error, options);
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
