import { configureStore } from "@reduxjs/toolkit";
import utilsReducer from './slices/utilsSlice'

export default configureStore({
    reducer:{
        utilsReducer
        
    }
})