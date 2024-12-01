import { EndPointCoordinates } from "./auxiliaryDrawingElements"

export const createParallelLineCoordinates = (endPointCoordinates: EndPointCoordinates, distanceFromPoint: number) => {
    const lengthLine = Math.sqrt(Math.pow(endPointCoordinates.xEnd - endPointCoordinates.xStart, 2) + Math.pow(endPointCoordinates.yEnd - endPointCoordinates.yStart, 2))
    const cos = (endPointCoordinates.xEnd - endPointCoordinates.xStart) / lengthLine
    const sin = (endPointCoordinates.yEnd - endPointCoordinates.yStart) / lengthLine

    if (sin < 0) {
        const endPointCoords = {
            xStart: endPointCoordinates.xStart + distanceFromPoint * sin,
            yStart: endPointCoordinates.yStart - distanceFromPoint * cos,
            xEnd: endPointCoordinates.xStart + distanceFromPoint * sin + lengthLine * cos,
            yEnd: endPointCoordinates.yStart - distanceFromPoint * cos + lengthLine * sin,
        }
        return endPointCoords
    } else {
        const endPointCoords = {
            xStart: endPointCoordinates.xStart - distanceFromPoint * sin,
            yStart: endPointCoordinates.yStart + distanceFromPoint * cos,
            xEnd: endPointCoordinates.xStart - distanceFromPoint * sin + lengthLine * cos,
            yEnd: endPointCoordinates.yStart + distanceFromPoint * cos + lengthLine * sin,
        }
        return endPointCoords
    }

}