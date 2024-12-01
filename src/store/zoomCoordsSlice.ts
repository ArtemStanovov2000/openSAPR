import { createSlice } from "@reduxjs/toolkit";

export type ZoomCoords = {
  x: number,
  y: number
}

const zoomCoords: ZoomCoords = {
  x: 0,
  y: 0
}

const zoomCoordsSlice = createSlice({
  name: "zoomCoords",
  initialState: {
    zoomCoords: zoomCoords
  },
  reducers: {
    setZoomCoords(state, action) {
      state.zoomCoords = action.payload
    }
  }
})

export const { setZoomCoords } = zoomCoordsSlice.actions
export default zoomCoordsSlice.reducer