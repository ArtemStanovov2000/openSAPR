import { createSlice } from "@reduxjs/toolkit";

const zoomSlice = createSlice({
  name: "zoom",
  initialState: {
    zoom: 1
  },
  reducers: {
    setZoom(state, action) {
      state.zoom = state.zoom * (1 - action.payload / 2000)
    },
  }
})

export const { setZoom } = zoomSlice.actions
export default zoomSlice.reducer