import { createSlice } from "@reduxjs/toolkit";

type Coordinates = {
  x: number,
  y: number
}

export type Coords = {
  windowMouseCoords: Coordinates
  zoomMouseCoords: Coordinates
}

const coords: Coords = {
  windowMouseCoords: {
    x: 0,
    y: 0
  },
  zoomMouseCoords:
  {
    x: 0,
    y: 0
  }
}

const coordsSlice = createSlice({
  name: "coords",
  initialState: {
    coords: coords
  },
  reducers: {
    setCoord(state, action) {
      state.coords.windowMouseCoords = action.payload
    },
    setZoomCoords(state, action) {
      state.coords.zoomMouseCoords.x = action.payload
    }
  }
})

export const { setCoord, setZoomCoords } = coordsSlice.actions
export default coordsSlice.reducer