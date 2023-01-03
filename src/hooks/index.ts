import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
  useSetRecoilState,
} from "recoil";

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

export function userLogged() {}

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
