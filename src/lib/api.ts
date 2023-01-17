import { updateName, userName } from "atoms/userAtoms";
import { useSetUpdateName, useUserToken } from "hooks";
import { useRecoilValue, useSetRecoilState, useRecoilState } from "recoil";

type pet = {
  fullname: string;
  zone: string;
  lat: number;
  lng: number;
  status: string;
  image: string;
  token: string;
};

type msg = {
  to: any;
  from: string;
  subject: string;
  text: string;
  html: string;
};

// chekear el mail -> https://desafio7.onrender.com/auth/email-check

export const APICheckEmail = async (email) => {
  try {
    const fetching = await fetch(
      "https://desafio7.onrender.com/auth/email-check",
      {
        method: "POST",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      }
    );
    const response = await fetching.json();
    return response;
  } catch (error) {
    console.error(error);
  }
};

// obtener el Token del usuario -> https://desafio7.onrender.com/auth/token
export const APIGetToken = async (params: {
  email: string;
  password: string;
}) => {
  try {
    const { email, password } = params;

    const fetching = await fetch("https://desafio7.onrender.com/auth/token", {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });
    const response = await fetching.json();
    return response;
  } catch (error) {
    console.error(error);
  }
};

//obtener el ME del user
export const APIGetMeName = async (token) => {
  try {
    //const nameSetterState = useSetRecoilState(userName);
    const userToken = token;
    const fetching = await fetch("https://desafio7.onrender.com/auth/me", {
      method: "GET",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
        Authorization: `bearer ${userToken}`,
      },
    });
    const response = await fetching.json();
    console.log("traje el nombre");
    //nameSetterState(response.fullname);
    return response;
  } catch (error) {
    console.error(error);
  }
};

export const APIUpdateMeName = async (params: { token; fullname }) => {
  try {
    const { fullname, token } = params;

    if (fullname !== "") {
      const fetching = await fetch("https://desafio7.onrender.com/auth/me", {
        method: "PUT",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
          Authorization: `bearer ${token}`,
        },
        body: JSON.stringify({ fullname }),
      });
      console.log("Se actualizo el nombre");
      const response = await fetching.json();
      return response;
    } else {
      alert("El Nombre esta vacío");
      return;
    }
  } catch (error) {
    console.error(error);
  }
};

export const APIUpdatePassword = async (params: { password; token }) => {
  //auth/password
  try {
    const { password, token } = params;

    if (password !== "") {
      const fetching = await fetch(
        "https://desafio7.onrender.com/auth/password",
        {
          method: "PUT",
          mode: "cors",
          headers: {
            "Content-Type": "application/json",
            Authorization: `bearer ${token}`,
          },
          body: JSON.stringify({ password }),
        }
      );
      const response = await fetching.json();
      return response;
    }
  } catch (error) {
    console.error(error);
  }
};

//crear user -> https://desafio7.onrender.com/auth

export const APICreateUser = async (params: {
  fullname: string;
  email: string;
  password: string;
}) => {
  try {
    const { fullname, email, password } = params;

    const fetching = await fetch("https://desafio7.onrender.com/auth", {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ fullname, email, password }),
    });
    const response = await fetching.json();
    console.log(response);
    return response;
  } catch (error) {
    console.error(error);
  }
};

//crear user -> https://desafio7.onrender.com/pet

export const APIGetMePets = async (token) => {
  try {
    const userToken = token;
    const fetching = await fetch("https://desafio7.onrender.com/me/pets", {
      method: "GET",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
        Authorization: `bearer ${userToken}`,
      },
    });
    const response = await fetching.json();
    console.log("traje las mascotas de este usuario");
    return response;
  } catch (error) {
    console.error(error);
  }
};

export const APICreatePet = async (params: pet) => {
  try {
    const { fullname, zone, lat, lng, status, image, token } = params;

    const fetching = await fetch("https://desafio7.onrender.com/auth", {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
        Authorization: `bearer ${token}`,
      },
      body: JSON.stringify({ fullname, zone, lat, lng, status, image }),
    });
    const response = await fetching.json();
    console.log(response);
    return response;
  } catch (error) {
    console.error(error);
  }
};

export const APIUpdatePetData = async (dataForUpdate) => {
  try {
    const userToken = useUserToken();
    const fetching = await fetch("https://desafio7.onrender.com/me/pets/20", {
      method: "PUT",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
        Authorization: `bearer ${userToken}`,
      },
      body: JSON.stringify(dataForUpdate),
    });
    const response = await fetching.json();
    console.log(response);
    return response;
  } catch (error) {
    console.error(error);
  }
};

// me quede en crear report send mail
export const APISendInfoToPetOwner = async (mensaje: msg) => {
  try {
    const emailFetch = await fetch("https://desafio7.onrender.com/send-email", {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        msg: mensaje,
      }),
    });
    const response = await emailFetch.json();
    return response;
  } catch (error) {
    console.error(error);
  }
};
