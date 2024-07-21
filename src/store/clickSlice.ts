import { createSlice } from "@reduxjs/toolkit";

const clickSlice = createSlice({
  name: "click",
  initialState: {
    click: [{ x: 0, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 0 }]
  },
  reducers: {
    setClick(state, action) {
      state.click[2] = state.click[1]
      state.click[1] = state.click[0]
      state.click[0] = action.payload
    },
    dropClick(state, action) {
      state.click[2] = { x: 0, y: 0 }
      state.click[1] = { x: 0, y: 0 }
      state.click[0] = { x: 0, y: 0 }
    }
  }
})

export const { setClick, dropClick } = clickSlice.actions
export default clickSlice.reducer