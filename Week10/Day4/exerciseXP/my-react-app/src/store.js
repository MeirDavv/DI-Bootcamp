import {configureStore} from '@reduxjs/toolkit';
import {thunk} from 'redux-thunk';
import userReducer from './userSlice'

const store = configureStore({
    reducer:{
        user: userReducer,
    },
    middleware: (getDefaultMiddleware) => [...getDefaultMiddleware(), thunk]
});

export default store;