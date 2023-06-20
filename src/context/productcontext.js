import axios from "axios";
import { createContext,useContext, useEffect, useReducer } from "react";
import reducer from "../reducer/productReducer";

//create a context
const AppContext = createContext();

const API = "https://api.pujakaitem.com/api/products";

//initial data
const initialState = {
    isLoading: false,
    isError  : false,
    products: [],
    featureProducts : [],
    isSingleLoading: false,
    singleProduct : {},
}



//provider
const AppProvider = ({children}) =>{

    const [state,dispatch] = useReducer(reducer, initialState);

// dispatch will call the action method of reducer function

    const getProducts = async (url) => {
        dispatch({type:"SET_LOADING"})
        try {
            const response = await axios.get(url);
            const products = await response.data;
            dispatch({ type:"SET_API_DATA",payload: products});
        } catch (error) {
            dispatch({type:"API_ERROR"})
        }
    };

    //1. now i am again going to call a function so that i will get data
    const getSingleProduct = async (url) => {
        dispatch({ type: "SET_SINGLE_LOADING" });
         try {
           const res = await axios.get(url);
           const singleProduct = await res.data;
           dispatch({ type: "SET_SINGLE_PRODUCT", payload: singleProduct });
        } catch (error) {
          dispatch({ type: "SET_SINGLE_ERROR" });
        }
      };

    //with the help of useEffect we can get render anything
    // at the time of loading the page at starting

    //so here with this we are going to fetch data from api
    useEffect(() => {
       getProducts(API);
    } , [])

    return (
    <AppContext.Provider value={{ ...state ,getSingleProduct}}>
       {children}
    </AppContext.Provider>);
};


//custom hook
const useProductContext = () => {
    return useContext(AppContext);
};


export {AppProvider,AppContext,useProductContext};
