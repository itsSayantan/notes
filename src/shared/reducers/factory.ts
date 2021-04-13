import { StateType } from "../types/reducer";

export function getInitialStateValues(): StateType {
  return {
    isLoading: false,
    notes: [],
  };
}
