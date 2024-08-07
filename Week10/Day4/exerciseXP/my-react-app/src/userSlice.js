import {createSlice,createAsyncThunk} from '@reduxjs/toolkit';

const initialState = {
    userData: [],
    loading: false,
    error: null,
}

export const fetchUserData = createAsyncThunk(
    'user/fetchUserData',
    async (arg, {rejectWithValue}) => {
        return new Promise(async(res,rej) => {
            try{
                const response = await fetch('https://jsonplaceholder.typicode.com/users')
                if (!response.ok){
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                console.log('Fetched data:', data); // Log the fetched data
                const formattedData = data.map(user => ({
                    id: user.id,
                    name: user.name,
                    email: user.email
                }));
                console.log('Formatted data:', formattedData); // Log the formatted data

                res(formattedData);
            }catch(error){
                rejectWithValue(error.message);
                rej(error);
            }
        })
        
    }
)

const userSlice = createSlice(({
    name: 'user',
    initialState,
    reducers: {
        
    },
    extraReducers: (builder) => {
        builder
        .addCase(fetchUserData.pending, (state) => {
            state.loading = true;
            state.error = null;
        })
        .addCase(fetchUserData.fulfilled, (state,action) => {
            console.log('Action payload:', action.payload); // Log the action payload

            state.loading = false;
            state.userData = action.payload;
        })
        .addCase(fetchUserData.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        });
    },
}));



export default userSlice.reducer;