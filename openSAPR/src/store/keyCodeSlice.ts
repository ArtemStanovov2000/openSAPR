import { createSlice } from "@reduxjs/toolkit";

export type KeyCode = null | string

type State = {
    keyCode: KeyCode
}

const initialState: State = {
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