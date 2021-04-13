import React from "react";

import { AppContext } from "../../shared/contexts/AppContext";
import { AppContextType } from "../../shared/types/others";
import { reducer, createInitialState } from "../../shared/reducers/AppReducer";
import { getInitialStateValues } from "../../shared/reducers/factory";

import Home from "../../pages/Home";
import Footer from "../Footer";
import Loading from "../Loading";

const App = () => {
  const [state, dispatch] = React.useReducer(
    reducer,
    getInitialStateValues(),
    createInitialState
  );

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      <AppContext.Consumer>
        {(val: AppContextType) => {
          return (
            <>
              <Home />
              <Footer />
              {val.state.isLoading ? <Loading /> : <></>}
            </>
          );
        }}
      </AppContext.Consumer>
    </AppContext.Provider>
  );
};

export default App;
