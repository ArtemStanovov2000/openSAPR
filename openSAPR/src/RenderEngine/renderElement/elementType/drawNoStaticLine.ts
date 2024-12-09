import { AuxiliaryLine } from "../../../models/ElementsType/Line"

export const drawNoStaticLine = (context: any, line: AuxiliaryLine) => {
    context.beginPath()
    context.moveTo(line.coords.xStart, line.coords.yStart)
    context.lineTo(line.coords.xEnd, line.coords.yEnd)
    context.strokeStyle = line.color
    context.lineWidth = line.width
    context.stroke()
}