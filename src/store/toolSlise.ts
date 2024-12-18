import { createSlice } from "@reduxjs/toolkit";

export type Tool =
  null |
  "Line";

type State = {
  tool: Tool;
}

const initialState: State = {
  tool: null,
}

const toolSlice = createSlice({
  name: "Tool",
  initialState,
  reducers: {
    setTool(state, action) {
      state.tool = action.payload;
    },
  }
})

export const { setTool } = toolSlice.actions
export default toolSlice.reducer