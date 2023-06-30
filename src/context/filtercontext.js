import { createContext, useReducer,useContext, useEffect } from "react";
import { useProductContext } from "./productcontext";
import reducer from "../reducer/fliterReducer";

const FilterContext = createContext();

const initialState = {
  filter_products : [],
  all_products:[],
  grid_view: true,
  sorting_value:"lowest",
  filters:{
    text:"",
    category: "all",
    company: "all",
    color:"all",
    maxPrice:0,
    price:0,
    minPrice:0,
  }
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

  //sorting
  const sorting = (event) => {
    let userValue = event.target.value;
    dispatch({type:"GET_SORT_VALUE", payload:userValue})
  }
  
  //filter section
  const updateFilterValue = (event) => {
    let name = event.target.name;
    let value= event.target.value;
    return dispatch({ type: "UPDATE_FILTERS_VALUE",payload: {name,value}})
  } 

  const clearFilters = () => {
    dispatch({type:"CLEAR"});
  }

  useEffect( () => {
    dispatch({type:"FILTER_PRODUCTS"})
    dispatch({ type:"SORTING_PPRODUCTS"})
  },[products,state.sorting_value, state.filters])


// to load all the products for grid and list view
  useEffect( ()=> {
        dispatch({type:"LOAD_FILTER_PRODUCTS", payload:products })
  },[products])


  return (
  <FilterContext.Provider 
  value={{
    ...state, 
    setListView,
    setGridView, 
    sorting, 
    updateFilterValue,
    clearFilters,
    }}>
    {children}
  </FilterContext.Provider>
  );
};


export const useFilterContext = () => {
  return useContext(FilterContext);
}