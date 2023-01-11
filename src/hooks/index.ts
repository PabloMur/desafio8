import { useRecoilValue, useSetRecoilState } from "recoil";
import { userEmail, userLogged, userName, userToken } from "atoms/userAtoms";
import { APICheckEmail, APIGetMe, APIGetToken } from "lib/api";

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

//setter y getter de Name
export function useUserName() {
  const username = useRecoilValue(userName);
  return username;
}

export function useSetUserName() {
  const userNameSetter = useSetRecoilState(userName);
  return userNameSetter;
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

export const useCheckUserEmail = (email: string) => {
  localStorage.setItem("test", "test");
  return APICheckEmail(email);
};

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
export function useUserME() {
  return APIGetMe();
}
