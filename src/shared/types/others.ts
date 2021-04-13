import { StateType, ActionType } from "./reducer";

export type AppContextType = {
  state: StateType;
  dispatch: React.Dispatch<ActionType>;
};

export type ThemeObject = {
  color: string;
  secondaryColor: string;
  backgroundColor: string;
  background: string;
  borderColor: string;
  boxShadow: string;
  flippedBoxShadow: string;
  githubLogoName: string;
};

export type NoteType = {
  id: string;
  content: string;
  createdOn: string;
  createdBy: string;
};
