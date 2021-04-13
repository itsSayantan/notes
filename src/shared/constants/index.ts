import { ThemeObject } from "../types/others";

export const SELECTED_THEME: number = 1;
export const THEMES: Array<ThemeObject> = [
  {
    color: "rgb(27, 38, 44)",
    secondaryColor: "rgba(27, 38, 44, 0.6)",
    backgroundColor: "#f2f3f7",
    background: "#f2f3f7",
    borderColor: "#cdcdcd",
    boxShadow: "-6px -6px 8px hsla(0,0%,100%,.9), 5px 5px 8px rgba(0,0,0,.1)",
    flippedBoxShadow: "inset 3px 3px 5px #cbcbcb, inset -3px -3px 5px #fff",
    githubLogoName: "github-dark.png",
  },
];
export const THEME = THEMES[SELECTED_THEME - 1];
export const CREATE_NOTE_DEFAULT_TEXT = "Enter note here...";
export const DEFAULT_LOADING_TEXT = "Loading...";
export const Z_INDICES = {
  Loading: 2,
};
