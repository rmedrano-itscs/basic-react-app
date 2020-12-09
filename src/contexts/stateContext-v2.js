import React, {createContext, useContext, useReducer} from 'react';

export const StateContext = createContext();

export const StateProvider = ({reducer, initialState, children,}) =>(
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);
export const useStateValue = () => useContext(StateContext);



// import React from 'react'
// import * as domo from 'ryuu.js'; 

// const DataSetsContext = React.createContext()

// export const DataSetsProvider = DataSetsContext.Provider
// export const DataSetsConsumer = DataSetsContext.Consumer

// export default DataSetsContext;


