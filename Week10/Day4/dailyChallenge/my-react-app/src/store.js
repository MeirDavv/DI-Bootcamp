import { configureStore } from "@reduxjs/toolkit";
import ageReducer from './ageSlice';
import { applyMiddleware } from "@reduxjs/toolkit";
import {thunk} from 'redux-thunk'

const store = configureStore({
    reducer: {
        age: ageReducer,
    },
    middleware: (getDefaultMiddleware)=> [...getDefaultMiddleware(), thunk]
});

export default store;