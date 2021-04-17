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
    case Actions.SAVE_NOTE: {
      return {
        ...state,
        notes: [...state.notes, action.payload],
      };
    }
    case Actions.DELETE_NOTE: {
      const id = action.payload;
      const finalNotes = [];

      for (let i = 0; i < state.notes.length; i++) {
        if (state.notes[i].id !== id) {
          finalNotes.push(state.notes[i]);
        }
      }

      return {
        ...state,
        notes: finalNotes,
      };
    }
    default: {
      return state;
    }
  }
};

export { reducer, createInitialState };
