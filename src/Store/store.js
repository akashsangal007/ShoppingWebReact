import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../Features/userSlice";
import cartReducer from "../Features/cartSlice"

export default configureStore({
    reducer :{
        user : userReducer,
        cart : cartReducer
    }
    
},window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())