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
