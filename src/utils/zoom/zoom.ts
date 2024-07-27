import { data } from "../rerender/rerender"
import store from "../../store"

export const zoom = () => {
    const zoomRate = store.getState().zoom.zoom
    for (let i = 0; i < data.length; i++) {
        if (data[i].type === "line") {
            data[i].xStart = data[i].xStart * zoomRate
            data[i].yStart = data[i].yStart * zoomRate
            data[i].xEnd = data[i].xEnd * zoomRate
            data[i].yEnd = data[i].yEnd * zoomRate
        } else if (data[i].type === "circle") {
            data[i].xStart = data[i].xStart * zoomRate
            data[i].yStart = data[i].yStart * zoomRate
            data[i].radius = data[i].radius * zoomRate
        }
    }
    console.log(zoomRate)
}