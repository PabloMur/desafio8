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
    console.log(response);
    return response;
  } catch (error) {
    console.error(error);
  }
};

// method: "put",
// mode: "cors",
// headers: {
//   Authorization: `bearer ${token}`,
//   "Content-Type": "application/json",
// },
// body: JSON.stringify({
//   password: password,
// }),
