import { createContext, useReducer,useContext, useEffect } from "react";
import { useProductContext } from "./productcontext";
import reducer from "../reducer/fliterReducer";

const FilterContext = createContext();

const initialState = {
  filter_products : [],
  all_products:[],
  grid_view: false,
}

export const FilterProvider = ({children}) => {

  const {products} = useProductContext();
  const [state,dispatch] = useReducer(reducer, initialState);

  //to set grid view
  const setGridView = () => {
    dispatch({type:"SET_GRID_VIEW"})
  };

  const setListView = () => {
    return dispatch({ type: "SET_LIST_VIEW" });
  };

  useEffect( ()=> {
        dispatch({type:"LOAD_FILTER_PRODUCTS",payload:products})
  },[products])

  return <FilterContext.Provider value={{...state, setListView,setGridView}}>
    {children}
  </FilterContext.Provider>
};


export const useFilterContext = () => {
  return useContext(FilterContext);
}