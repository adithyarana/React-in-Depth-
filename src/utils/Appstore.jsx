import { configureStore } from "@reduxjs/toolkit"
import cartReducer from "./CardSlice"

const Appstote = configureStore({
   reducer:{
     cart:cartReducer
   }
})

export default Appstote