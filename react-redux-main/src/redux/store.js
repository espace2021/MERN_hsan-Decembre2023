import { configureStore } from '@reduxjs/toolkit'
import articlesReducer from "../features/articleslice"
import cartsliceReducer from "../features/cartslice"
import scategoriesReducer from "../features/scategorieslice"
const store = configureStore({
reducer: {
storearticles:articlesReducer,
storecart:cartsliceReducer,
storescategories: scategoriesReducer,
}
})
export default store
