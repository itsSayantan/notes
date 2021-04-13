import { StateType, ActionType } from "../types/reducer";
import { Actions } from "../constants/actions";

const createInitialState = (initialState: StateType) => {
  return initialState;
};

const reducer = (state: StateType, action: ActionType): StateType => {
  switch (action?.type) {
    case Actions.SET_LOADING: {
      return {
        ...state,
        isLoading: action.payload.isLoading,
      };
    }
    case Actions.FETCH_NOTES: {
      return {
        ...state,
        notes: action.payload.notes,
      };
    }
    default: {
      return state;
    }
  }
};

export { reducer, createInitialState };
