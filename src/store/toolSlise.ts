import { createSlice } from "@reduxjs/toolkit";

// В модели перенести
export type Tool = 
  null |
  "line" |
  "circle" |
  "rectangle" |
  "brush";

const drawTurin = (tool: Tool) => {
  if (tool === null) {
    throw new Error('Тюрина нельзя нарисовать ничем.');    
  }

  if (tool === "brush") {
    throw new Error("Тюрина нельзя нарисовать кистью.")
  }

  if (tool === "line") {
    //
  }

  if (tool === "circle" || tool === "rectangle") {

  }
}

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