import React, { createContext, useContext, useReducer } from "react";

//THIS IS THE DATA LAYER
export const StateContext = createContext();

//BUILD A PROVIDER

export const StateProvider = ({ reducer, initialState, children }) => {
  return (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
      {children}
    </StateContext.Provider>
  );
};

//THIS IS HOW WE USE INSIDE A COMPONENT
export const useStateValue = () => useContext(StateContext);
