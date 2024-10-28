import { createSlice } from "@reduxjs/toolkit";

export type Clicks = {
  x: number,
  y: number
}

const clicks: Clicks[] = []

const clickSlice = createSlice({
  name: "click",
  initialState: {
    click: clicks
  },
  reducers: {
    addClickHistory(state, action) {
        state.click.unshift(action.payload)
    },
    dropClick(state, action) {
      for (let i = state.click.length; i > 0; i--) {
        state.click.pop()
      }
    }
  }
})

export const { addClickHistory, dropClick } = clickSlice.actions
export default clickSlice.reducer