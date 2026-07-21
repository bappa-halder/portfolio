import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../api/api";

export const signup = createAsyncThunk(
    "user/signup", async (data, { rejectWithValue }) => {
        try {
            const response = await api.post("user/register", data)
            return response.data
        } catch (error) {
            return rejectWithValue(
                error.response?.data?.message || "Registration failed"
            )
        }
    }
)

export const login = createAsyncThunk(
    "user/login", async (data, { rejectWithValue }) => {
        try {
            const response = await api.post("/user/login", data)

            localStorage.setItem("token", response.accessToken)
            localStorage.setItem("userName", response.userName)
            localStorage.setItem("email", response.email)
            return response.data
        } catch (error) {
            return rejectWithValue(
                error.response?.data?.message || "Login failed"
            )
        }
    }
)

export const logout = createAsyncThunk(
    "user/logout", async (_, { rejectWithValue }) => {
        try {
            await api.post("/user/logout")

            localStorage.clear()
            return true
        } catch (error) {
            return rejectWithValue(
                error.response?.data?.message || "Logout failed"
            )
        }
    }
)

const initialState = {
    user: null,
    isAuthenticated: !!localStorage.getItem("token"),
    loading: false,
    error: null,
    success: null
}

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder

            .addCase(signup.pending, (state) => {
                state.loading = true
                state.error = null
            })
            .addCase(signup.fulfilled, (state, action) => {
                state.loading = false
                state.success = action.payload.message
            })
            .addCase(signup.rejected, (state, action) => {
                state.loading = false
                state.error = action.payload
            })

            .addCase(login.pending, (state) => {
                state.loading = true
                state.error = null
            })
            .addCase(login.fulfilled, (state, action) => {
                state.loading = false
                state.user = action.payload.user
                state.isAuthenticated = true
                state.success = action.payload.message
            })
            .addCase(login.rejected, (state, action) => {
                state.loading = false
                state.error = action.payload
                state.isAuthenticated = false
            })

            .addCase(logout.pending, (state) => {
                state.loading = true
            })
            .addCase(logout.fulfilled, (state, action) => {
                state.loading = false
                state.user = null
                state.isAuthenticated = false
                state.success = action.payload.message
            })
            .addCase(logout.rejected, (state, action) => {
                state.loading = false
                state.error = action.payload
            })
    }
})
export default userSlice.reducer