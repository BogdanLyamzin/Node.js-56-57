import { createAsyncThunk } from "@reduxjs/toolkit";

import * as api from "../../shared/api/auth";

export const register = createAsyncThunk(
    "auth/register",
    async (data, { rejectWithValue }) => {
        try {
            const result = await api.register(data);
            return result;
        }
        catch ({ response }) {
            return rejectWithValue(response.data);
        }
    }
)

export const login = createAsyncThunk(
    "auth/login",
    async (data, { rejectWithValue }) => {
        try {
            const result = await api.login(data);
            return result;
        }
        catch ({ response }) {
            return rejectWithValue(response.data);
        }
    }
)

export const logout = createAsyncThunk(
    "auth/logout",
    async (_, { rejectWithValue }) => {
        try {
            const result = await api.logout();
            return result;
        }
        catch ({ response }) {
            return rejectWithValue(response.data);
        }
    }
)

export const current = createAsyncThunk(
    "auth/current",
    async (_, { rejectWithValue, getState }) => {
        try {
            const { auth } = getState();
            const result = await api.getCurrent(auth.token);
            return result;
        }
        catch ({ response }) {
            return rejectWithValue(response.data);
        }
    },
    {
        condition: (_, { getState }) => {
            const {auth} = getState();
            if(!auth.token) {
                return false;
            }
        }
    }
)