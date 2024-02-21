import { createSlice } from "@reduxjs/toolkit";
import { LoginUserAction } from "../Actions/AsyncUserReducer";

const userSlice = createSlice({
    name: 'user',
    initialState: {
        user: null
    },
    reducers: {
        login: (state,action) => {
            console.log('login ', action.payload)
            state.user = action.payload;
        },
        logout: (state) => {
            console.log('out')
            state.user = null;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(LoginUserAction.pending, (state, action) => {
        });
        builder.addCase(LoginUserAction.fulfilled, (state, action) => {
            state.user = action.payload.user;
        });
        builder.addCase(LoginUserAction.rejected, (state, action) => {
            console.log('rej')
        });
        
    }
})

export const { logout, login } = userSlice.actions;
export default userSlice.reducer;
export const selectedUser = (state) => state.user.user;