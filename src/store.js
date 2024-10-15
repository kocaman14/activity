import { configureStore } from "@reduxjs/toolkit";
import activityReducer from "./features/fetchSlice"



export const store=configureStore({
reducer:{
activity:activityReducer,


}

})