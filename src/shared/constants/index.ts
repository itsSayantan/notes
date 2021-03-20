import { ThemeObject } from "../types/others";

export const SELECTED_THEME: number = 1;
export const THEMES: Array<ThemeObject> = [
  {
    color: "#222222",
    backgroundColor: "#d0d8dc",
    background: "#d0d8dc",
    boxShadow: "inset 15px 15px 30px #b1b8bb, inset -15px -15px 30px #eff8fd",
    githubLogoName: "github-dark.png",
  },
];
export const THEME = THEMES[SELECTED_THEME - 1];
