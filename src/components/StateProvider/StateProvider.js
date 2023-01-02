import React, { createContext, useContext, useReducer } from "react";

// prepare the data layer
export const StateContext = createContext();

//wrap our app and provide the data layer to each children
export const StateProvider = ({ reducer, initialState, children }) => {
  return (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
      {children}
    </StateContext.Provider>
  );
};

//push and  pull information from datalayer
export const useStateValue = () => useContext(StateContext);
// export const useStateValue = () => return {useContext(StateContext)};
// if iuse {} i have to use return but if i use ( ) no return required
