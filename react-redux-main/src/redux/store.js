import { configureStore } from '@reduxjs/toolkit'
import articlesReducer from "../features/articleslice"
import scategoriesReducer from "../features/scategorieslice"
import cartsliceReducer from "../features/cartslice"

import {persistReducer, FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER} from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const persistConfig = {
  key: 'root',
  version: 1,
  storage,
}

const persistedReducer = persistReducer(persistConfig, cartsliceReducer)

const store = configureStore({
reducer: {
storearticles:articlesReducer,
storescategories: scategoriesReducer,
storecart:persistedReducer,
},
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    })
})
export default store
/*
import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { combineReducers } from '@reduxjs/toolkit'

import articlesReducer from "../features/articleslice"
import scategoriesReducer from "../features/scategorieslice"
import cartsliceReducer from "../features/cartslice"
import storage from 'redux-persist/lib/storage'
import {
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'
const persistConfig = {
  key: 'root',
  storage: storage,
  blacklist: ['apiProductSlice'],
}
export const rootReducers = combineReducers({
    storecart: cartsliceReducer,
  
})
const persistedReducer = persistReducer(persistConfig, rootReducers)
const store = configureStore({
  reducer:{
    storecart:persistedReducer,  
    storearticles:articlesReducer,
    storescategories: scategoriesReducer,
  } ,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    })
})
setupListeners(store.dispatch)
export default store
*/