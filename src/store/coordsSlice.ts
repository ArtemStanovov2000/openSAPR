import { createSlice } from "@reduxjs/toolkit";

export type Coords = {
  x: number,
  y: number
}

const coords: Coords = {
  x: 0,
  y: 0
}

const coordsSlice = createSlice({
  name: "coords",
  initialState: {
    coords: coords
  },
  reducers: {
    setCoord(state, action) {
      state.coords = action.payload
    },
  }
})

export const { setCoord } = coordsSlice.actions
export default coordsSlice.reducer