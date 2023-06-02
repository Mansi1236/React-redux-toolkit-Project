import { createSlice } from "@reduxjs/toolkit";


const userValue = ''

export const userSlice = createSlice({
name: 'theme',
initialState: {value: userValue},
reducers : {
    theme : (state, action) => {
        state.value = action.payload
    }
},

});
export const {theme} = userSlice.actions;
export default  userSlice.reducer


