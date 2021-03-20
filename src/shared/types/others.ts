import { StateType, ActionType } from "./reducer";

export type AppContextType = {
  state: StateType;
  dispatch: React.Dispatch<ActionType>;
};

export type ThemeObject = {
  color: string;
  backgroundColor: string;
  background: string;
  boxShadow: string;
  githubLogoName: string;
};
