import { data } from "./rerender"
import { createLine } from "../drawLine/createLine"
import { createCircle } from "../drawCircle/createCircle"

export const drawFigure = (context: any) => {
    for (let i = 0; i < data.length; i++) {
        if(data[i].type === "line") {
            createLine(context, data[i].xStart, data[i].yStart, data[i].xEnd, data[i].yEnd, data[i].color, data[i].width)
        } else if (data[i].type === "circle") {
            createCircle(context, data[i].xStart, data[i].yStart, data[i].radius)
        }
    }
}