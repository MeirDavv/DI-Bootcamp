import {createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = { 
    age: 0,
    loading: false,
};

export const ageUpAsync = createAsyncThunk(
    'age/ageUpAsync',
    async (arg, {rejectwithValue}) => {
        return new Promise((resolve,reject)=>{
            setTimeout(()=>{
                resolve(arg);
            }, 2000);
        });
    }
);

export const ageDownAsync = createAsyncThunk(
    'age/ageDownAsync',
    async (arg, {rejectwithValue}) => {
        return new Promise((resolve,reject)=>{
            setTimeout(()=>{
                resolve(arg);
            }, 2000);
        });
    }
);

const ageSlice = createSlice({
    name: 'age',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(ageUpAsync.pending, (state) =>{
            state.loading = true;
        })
        .addCase(ageUpAsync.fulfilled, (state,action) => {
            state.loading = false;
            state.age += action.payload;
        })
        .addCase(ageUpAsync.rejected, (state)=>{
            state.loading = false;
        })
        .addCase(ageDownAsync.pending, (state) =>{
            state.loading = true;
        })
        .addCase(ageDownAsync.fulfilled, (state,action) => {
            state.loading = false;
            state.age -= action.payload;
        })
        .addCase(ageDownAsync.rejected, (state)=>{
            state.loading = false;
        })
    }
})

export default ageSlice.reducer;