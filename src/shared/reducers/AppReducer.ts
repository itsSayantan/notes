import { StateType, ActionType } from "../types/reducer";
import { Actions } from "../constants/actions";

const createInitialState = (initialState: StateType) => {
  return initialState;
};

const reducer = (state: StateType, action: ActionType): StateType => {
  switch (action?.type) {
    // case Actions.setLoader: {
    //   return {
    //     ...state,
    //     loader: action.payload,
    //   };
    // }
    default: {
      return state;
    }
  }
};

export { reducer, createInitialState };
