import { EndPointCoordinates } from "./auxiliaryDrawingElements"

export const createHorizontalLineCoordinates = (endPointCoordinates: EndPointCoordinates) => {
    const lengthLine = Math.sqrt(Math.pow(endPointCoordinates.xEnd - endPointCoordinates.xStart, 2) + Math.pow(endPointCoordinates.yEnd - endPointCoordinates.yStart, 2))

    const endPointCoords = {
        xStart: endPointCoordinates.xStart,
        yStart: endPointCoordinates.yStart,
        xEnd: endPointCoordinates.xStart + lengthLine,
        yEnd: endPointCoordinates.yStart,
    }

    return endPointCoords
}