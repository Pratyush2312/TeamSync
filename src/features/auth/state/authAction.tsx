import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosInstance } from "./../../../config/axiosInstance";
import type { LoginFormData, RegisterFormData } from "./type";


export const loginEmployee = createAsyncThunk(
  "auth/login",
  async (credentials:LoginFormData, thunkApi) => {
    try {
        let response = await axiosInstance.post("/auth/login", credentials);
        console.log(response);
        return response.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    }
  },
);

export const registerEmployee = createAsyncThunk("auth/register",
    async (credentials:RegisterFormData, thunkApi) => { 
        try {
            const response = await axiosInstance.post('/auth/register', credentials);
            console.log(response);
            return response.data;
        }
        catch (error) { 
            return thunkApi.rejectWithValue(error);
        }
    }
)
