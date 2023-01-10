import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    isLoading: false
}

const spinnerSlice = createSlice({
    name: "spinnerSlice",
    initialState,
    reducers: {
        setLoadingOn: (state, payload) => {
            state.payload = true;
        },
        setLoadingOff: (state, payload) => {
            state.payload = false;
        }
    }
});

export const { setLoadingOff, setLoadingOn } = spinnerSlice.actions

export default spinnerSlice.reducer