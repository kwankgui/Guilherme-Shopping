import { createStore, combineReducers } from "react-redux";
import productsReducer from "./Products/products.reducer";

const rootReducer = combineReducers ({
    products: productsReducer
})