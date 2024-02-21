import { createAsyncThunk } from "@reduxjs/toolkit";
import UserService from "../Services/UserService";

export const LoginUserAction =  createAsyncThunk(
    "LoginUserAction",
    async (data) => {
        console.log(data)
        console.log('user reducer')
        var apiUserService = UserService.getInstance();
        const response = await apiUserService.loginUser(data.email, data.password);
        return {
            user: response,
        };
    }
);

