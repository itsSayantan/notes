import { NoteType } from "./others";

export type StateType = {
  isLoading: boolean;
  notes: Array<NoteType>;
};
export type ActionType = {
  type: string;
  payload?: any;
};
