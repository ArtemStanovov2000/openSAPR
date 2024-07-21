import { createSlice } from "@reduxjs/toolkit";

const toolSlice = createSlice({
    name: "Tool",
    initialState: {
        tool: "noTool"
    },
    reducers: {
      setTool(state, action) {
        state.tool = action.payload
      },
    }
})

export const { setTool } = toolSlice.actions
export default toolSlice.reducer