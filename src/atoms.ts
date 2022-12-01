import { atom, selector } from "recoil";

export const userState = atom({
  key: "textState", // unique ID (with respect to other atoms/selectors)
  default: {
    username: "Pablo",
    id: 1234,
  }, // default value (aka initial value)
});

export const userNameState = selector({
  key: "charCountState", // unique ID (with respect to other atoms/selectors)
  get: async ({ get }) => {
    const fetching = await fetch(
      "https://jsonplaceholder.typicode.com/users/2"
    );
    const res = await fetching.json();
    return res.name;
  },
});
