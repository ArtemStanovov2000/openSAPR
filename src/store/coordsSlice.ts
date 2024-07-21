import { createSlice } from "@reduxjs/toolkit";

const coordsSlice = createSlice({
    name: "coords",
    initialState: {
        coords: {x: 0, y: 0}
    },
    reducers: {
      setCoord(state, action) {
        state.coords = action.payload
      },
    }
})

export const { setCoord } = coordsSlice.actions
export default coordsSlice.reducer