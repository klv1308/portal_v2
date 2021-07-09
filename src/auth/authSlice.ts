import { createSlice, PayloadAction } from "@reduxjs/toolkit"

const initialState: User | null = null;

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setUser: (state, action: PayloadAction<User>) => { },
    },
})

export default authSlice.reducer