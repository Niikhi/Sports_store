import { createContext, useReducer,useContext, useEffect } from "react";
import { useProductContext } from "./productcontext";
import reducer from "../reducer/fliterReducer";

const FilterContext = createContext();

const initialState = {
  filter_products : [],
  all_products:[],
}

export const FilterProvider = ({children}) => {

  const {products} = useProductContext();
  const [state,dispatch] = useReducer(reducer, initialState);

  useEffect( ()=> {
        dispatch({type:"LOAD_FILTER_PRODUCTS",payload:products})
  },[products])

  return <FilterContext.Provider value={{...state}}>
    {children}
  </FilterContext.Provider>
};


export const useFilterContext = () => {
  return useContext(FilterContext);
}