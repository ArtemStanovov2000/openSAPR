import { createSlice } from "@reduxjs/toolkit";

export type FullClicks = {
  x: number,
  y: number
}

const fullClick: FullClicks[] = []

const fullClickSlice = createSlice({
  name: "fullClick",
  initialState: {
    fullClick: fullClick
  },
  reducers: {
    addFullClickHistory(state, action) {
        state.fullClick.unshift(action.payload)
    },
    dropFullClick(state, action) {
      for (let i = state.fullClick.length; i > 0; i--) {
        state.fullClick.pop()
      }
    },
  }
})

export const { addFullClickHistory, dropFullClick } = fullClickSlice.actions
export default fullClickSlice.reducer