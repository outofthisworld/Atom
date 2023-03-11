import { atom } from "recoil";

export const loggedInState = atom({
  key: "LoggedInState",
  default: false
});
