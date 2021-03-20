import { StateType, ActionType } from "./reducer";

export type AppContextType = {
  state: StateType;
  dispatch: React.Dispatch<ActionType>;
};
