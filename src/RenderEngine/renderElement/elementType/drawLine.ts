import { Line } from "../../../models/ElementsType/Line"

export const drawLine = (context: any, line: Line) => {
    context.beginPath()
    context.moveTo(line.zoomCoords.xStart, line.zoomCoords.yStart)
    context.lineTo(line.zoomCoords.xEnd, line.zoomCoords.yEnd)
    context.strokeStyle = line.color
    context.lineWidth = line.width
    context.stroke()
}