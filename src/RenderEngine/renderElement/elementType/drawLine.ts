import { Line } from "../../../models/ElementsType/Line"
import { StoreParams } from "../../../models/StoreParams"

export const drawLine = (context: any, line: Line, storeParams: StoreParams) => {
    context.beginPath()
    if (line.coords !== undefined) {
        const coords = {
            xStart: line.coords.xStart * storeParams.zoom.zoom,
            yStart: line.coords.yStart * storeParams.zoom.zoom,
            xEnd: line.coords.xEnd * storeParams.zoom.zoom,
            yEnd: line.coords.yEnd * storeParams.zoom.zoom,
        }
        context.moveTo(coords.xStart, coords.yStart)
        context.lineTo(coords.xEnd, coords.yEnd)
    } 
    context.strokeStyle = line.color
    context.lineWidth = line.width
    context.stroke()
}