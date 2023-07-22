import { atom } from "recoil";
import { PROFILE_TAB } from "../../enums";

export const emailInputAtom = atom({
  key: "emailInputAtom",
  default: "",
});

export const pwdInputAtom = atom({
  key: "pwdInputAtom",
  default: "",
});

export const activeProfileTabAtom = atom({
  key: "activeProfileTabAtom",
  default: PROFILE_TAB.POST,
});
