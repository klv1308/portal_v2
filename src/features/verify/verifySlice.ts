import { createSlice, PayloadAction } from "@reduxjs/toolkit"

const verifySlice = createSlice({
    name: 'verify',
    initialState: 0,
    reducers: {
        increment: (state, action: PayloadAction<number>) => state + action.payload,
    },
})

export default verifySlice.reducer