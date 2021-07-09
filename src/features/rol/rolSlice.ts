import { createSlice, PayloadAction } from "@reduxjs/toolkit"


const rolSlice = createSlice({
    name: 'rol',
    initialState: 0,
    reducers: {
        increment: (state, action: PayloadAction<number>) => state + action.payload,
    },
})

export default rolSlice.reducer