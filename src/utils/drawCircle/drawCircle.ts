import store from "../../store"
import { data } from "../rerender/rerender"
import { setTool } from "../../store/toolSlise"
import { dropClick } from "../../store/clickSlice"
import { createCircle } from "./createCircle"

export const drawCircle = (context: any) => {
    // Вместо стора брать из параметров
    const clickCoords = store.getState().click.click
    const mouseCoords = store.getState().coords.coords
    const radius = Math.sqrt(Math.pow(mouseCoords.x - clickCoords[0].x, 2) + Math.pow(mouseCoords.y - clickCoords[0].y, 2))
    const tool = store.getState().tool.tool
    
    if(tool === "circle" && clickCoords[0].x !== 0 && clickCoords[0].y !== 0) {
        createCircle(context, clickCoords[0].x, clickCoords[0].y, radius)
    }

    if(tool === "circle" && clickCoords[0].x !== 0 && clickCoords[0].y !== 0 && clickCoords[1].x !== 0 && clickCoords[1].y !== 0) {
        data.push({
            type: "circle",
            xStart: clickCoords[1].x,
            yStart: clickCoords[1].y,
            radius: Math.sqrt(Math.pow(mouseCoords.x - clickCoords[1].x, 2) + Math.pow(mouseCoords.y - clickCoords[1].y, 2)),
        })
        store.dispatch(setTool("noTool"))
        store.dispatch(dropClick(""))
    }
}