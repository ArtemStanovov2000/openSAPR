import { data } from "./rerender/rerender"
import store from "../store"
import { setTool } from "../store/toolSlise"
import { dropClick } from "../store/clickSlice"
import { createLine } from "./createLine"

export const drawLine = (context: any) => {
    const clickCoords = store.getState().click.click
    const mouseCoords = store.getState().coords.coords
    const tool = store.getState().tool.tool
    if(tool === "line" && clickCoords[0].x !== 0 && clickCoords[0].y !== 0) {
        createLine(context, clickCoords[0].x, clickCoords[0].y, mouseCoords.x, mouseCoords.y, "white", 1,)
    }

    if(tool === "line" && clickCoords[0].x !== 0 && clickCoords[0].y !== 0 && clickCoords[1].x !== 0 && clickCoords[1].y !== 0) {
        data.push({
            type: "line",
            xStart: clickCoords[0].x,
            yStart: clickCoords[0].y,
            xEnd: clickCoords[1].x,
            yEnd: clickCoords[1].y,
            color: "white",
            width: 1
        })
        store.dispatch(setTool("noTool"))
        store.dispatch(dropClick(""))
    }

    for (let i = 0; i < data.length; i++) {
        createLine(context, data[i].xStart, data[i].yStart, data[i].xEnd, data[i].yEnd, data[i].color, data[i].width,)
    }
}