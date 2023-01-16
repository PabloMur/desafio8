import { useRecoilValue, useSetRecoilState, useRecoilState } from "recoil";
import {
  updateName,
  userEmail,
  userLogged,
  userName,
  userToken,
} from "atoms/userAtoms";
import {
  APICheckEmail,
  APIGetMeName,
  APIGetToken,
  APIUpdateMeName,
} from "lib/api";
import { useEffect } from "react";

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

//setter y getter de Name
export function useGetMeName() {
  return APIGetMeName();
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
