import React from "react";
import { AppContextType } from "../types/others";
import { getInitialStateValues } from "../reducers/factory";

export const AppContext = React.createContext<AppContextType>({
  state: getInitialStateValues(),
  dispatch: () => {},
});
