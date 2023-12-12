import { configureStore } from '@reduxjs/toolkit';

import articlesReducer from '../features/articleslice';
import scategoriesReducer from '../features/scategorieslice';

import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import cartsliceReducer from '../features/cartslice';

const persistConfig = {
  key: 'root',
  version: 1,
  storage,
};

const persistedReducer = persistReducer(persistConfig, cartsliceReducer);

const store = configureStore({
  reducer: {
    storearticles: articlesReducer,
    storescategories: scategoriesReducer,
    storecart: persistedReducer,
  },
});

export default store;
