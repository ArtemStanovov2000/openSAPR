import { EndPointCoordinates } from "./auxiliaryDrawingElements"

export const createDottedLine = (dottedSize: number, dottedGap: number, endPointCoordinates: EndPointCoordinates, color: string, isCut?: boolean) => {
    const lengthLine = Math.sqrt(Math.pow(endPointCoordinates.xEnd - endPointCoordinates.xStart, 2) + Math.pow(endPointCoordinates.yEnd - endPointCoordinates.yStart, 2))
    const cos = (endPointCoordinates.xEnd - endPointCoordinates.xStart) / lengthLine
    const sin = (endPointCoordinates.yEnd - endPointCoordinates.yStart) / lengthLine
    const dottedCount = Number((lengthLine / (dottedSize + dottedGap)).toFixed(0))
    const MAX_VALUE_DOTTED_COUNT = 500
    const dottedLine = []

    if (isCut === false || dottedCount < MAX_VALUE_DOTTED_COUNT ) {
        for (let i = 0; i < dottedCount - 1; i++) {

            dottedLine.push({
                xStart: endPointCoordinates.xStart + (dottedGap + dottedSize) * cos * (i + 1) - dottedSize * cos,
                yStart: endPointCoordinates.yStart + (dottedGap + dottedSize) * sin * (i + 1) + dottedSize * sin,
                xEnd: endPointCoordinates.xStart + (dottedGap + dottedSize) * cos * (i + 1),
                yEnd: endPointCoordinates.yStart + (dottedGap + dottedSize) * sin * (i + 1),
                color: color
            })
        }
    } else {
        for (let i = dottedCount - MAX_VALUE_DOTTED_COUNT; i < dottedCount - 1; i++) {

            dottedLine.push({
                xStart: endPointCoordinates.xStart + (dottedGap + dottedSize) * cos * (i + 1) - dottedSize * cos,
                yStart: endPointCoordinates.yStart + (dottedGap + dottedSize) * sin * (i + 1) + dottedSize * sin,
                xEnd: endPointCoordinates.xStart + (dottedGap + dottedSize) * cos * (i + 1),
                yEnd: endPointCoordinates.yStart + (dottedGap + dottedSize) * sin * (i + 1),
                color: color
            })
        }
    }
    
    return dottedLine
}