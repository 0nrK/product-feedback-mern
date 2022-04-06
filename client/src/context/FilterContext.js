import React, { useState, createContext, useReducer } from 'react';
import { filterReducer } from "./FilterReducer"


const INITIAL_STATE = "ALL"

export const FilterContext = createContext(INITIAL_STATE)




const FilterProvider = ({ children }) => {

    const [state, dispatch] = useReducer(filterReducer, INITIAL_STATE);


    return (
        <FilterContext.Provider value={{ state, dispatch }}>
            {children}
        </FilterContext.Provider>
    )
}

export { FilterProvider };
