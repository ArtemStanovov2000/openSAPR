import { createSlice } from "@reduxjs/toolkit";

export type Zoom = {
  current: number,
  prev: number
}

const zoom: Zoom = {
  current: 1,
  prev: 1
}

const zoomSlice = createSlice({
  name: "zoom",
  initialState: {
    zoom: {
      current: 1,
      prev: 1
    }
  },
  reducers: {
    setZoom(state, action) {
      if (action.payload === "mouseMove") {
        state.zoom.prev = state.zoom.current
      } else {
        state.zoom.prev = state.zoom.current
        state.zoom.current = state.zoom.current * (1 - action.payload / 2000)
      }
    },
  }
})

export const { setZoom } = zoomSlice.actions
export default zoomSlice.reducer