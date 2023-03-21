import { combineReducers } from "@reduxjs/toolkit";
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import authReducer from "./auth/auth-slice";
import booksReducer from "./books/books-slice";
import filterReducer from "./filter/filter-reducer";

const persistConfig = {
    key: 'auth',
    storage,
    whitelist: ["token"]
};

const persistedAuthReducer = persistReducer(persistConfig, authReducer);

const rootReducer = combineReducers({
    auth: persistedAuthReducer,
    books: booksReducer,
    filter: filterReducer,
})

export default rootReducer;