import { createSlice } from "@reduxjs/toolkit";


const userValue = {name: '', age: 0, email: ''}

export const userSlice = createSlice({
name: 'user',
initialState: {value: userValue},
reducers : {
    login : (state, action) => {
        state.value = action.payload
    }, 
    logout : (state, action) => {
        state.value = userValue
    }
},

});
export const {login, logout} = userSlice.actions;
export default  userSlice.reducer




// createSlice helps in creating reducers 
// Login is an action here that we can modify using useDispatch
// we have exported the action 'login' which we can access anywhere to modify the state
