import { createAsyncThunk, createEntityAdapter, createSlice } from "@reduxjs/toolkit"
import axios from 'axios'

export const getSessions = createAsyncThunk('conveymap/getSessions', async param => {
    axios.defaults.baseURL = 'https://manage-uat.clsdata.io'
    const response = await axios.post('conveymap/action/GetSessions', {
        archived: false
    });
    const data = await response.data;
    return data;
});

const sessionAdapter = createEntityAdapter<Session>()

const conveymapSlice = createSlice({
    name: 'conveymap',
    initialState: sessionAdapter.getInitialState(),

    reducers: {
        addSession: sessionAdapter.addOne,
    },
    extraReducers: (builder) => {
        builder.addCase(getSessions.fulfilled, (state, action) => {
            sessionAdapter.setAll(state, action.payload.sessions);
            // both `state` and `action` are now correctly typed
            // based on the slice state and the `pending` action creator
        })
    },
    // extraReducers: {
    // 	[getSessions.fulfilled]: (state, action) => {			
    // 		sessionAdapter.setAll(state, action.payload.data);
    // 	},
})

export default conveymapSlice.reducer