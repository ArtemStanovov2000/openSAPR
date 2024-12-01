import { createSlice } from "@reduxjs/toolkit";

export type ZoomClicks = {
  x: number,
  y: number
}

const zoomClick: ZoomClicks[] = []

const zoomClickSlice = createSlice({
  name: "zoomClick",
  initialState: {
    zoomClick: zoomClick
  },
  reducers: {
    addZoomClickHistory(state, action) {
        state.zoomClick.unshift(action.payload)
    },
    dropZoomClick(state, action) {
      for (let i = state.zoomClick.length; i > action.payload; i--) {
        state.zoomClick.pop()
      }
    }
  }
})

export const { addZoomClickHistory, dropZoomClick } = zoomClickSlice.actions
export default zoomClickSlice.reducer