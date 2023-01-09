import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
  useSetRecoilState,
} from "recoil";

import { userLogged } from "atoms/userAtoms";
import { APICheckEmail, APIGetToken } from "lib/api";

// export function useSearchResults() {
//   const params = useParams();
//   const setQueryValue = useSetRecoilState(queryState);
//   const query = params.query;
//   const results = useRecoilValue(resultsState);

//   useEffect(() => {
//     if (query) setQueryValue(query);
//   }, [query]);

//   return results;
// }

export function useUserLogged() {
  const value = useRecoilValue(userLogged);
  return value.logged;
}

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

export const useGetUserToken = (params) => {
  return APIGetToken(params);
};
