import { createSlice } from "@reduxjs/toolkit";

export type KeyCode = {
    keyCode: null | string
}

const initialState: KeyCode = {
    keyCode: null
}

const keyCodeSlice = createSlice({
    name: "keyCode",
    initialState,
    reducers: {
        setKeyCode(state, action) {
            state.keyCode = action.payload;
        },
    }
})

export const { setKeyCode } = keyCodeSlice.actions
export default keyCodeSlice.reducer