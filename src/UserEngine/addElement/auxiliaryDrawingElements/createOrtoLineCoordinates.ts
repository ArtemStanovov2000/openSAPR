import { EndPointCoordinates } from "./auxiliaryDrawingElements"

type Point = "start" | "end"
type StartPoint = {
    x: number,
    y: number
}

export const createOrtoLineCoordinates = (endPointCoordinates: EndPointCoordinates, point: Point, distanceFromPoint: number) => {
    const lengthLine = Math.sqrt(Math.pow(endPointCoordinates.xEnd - endPointCoordinates.xStart, 2) + Math.pow(endPointCoordinates.yEnd - endPointCoordinates.yStart, 2))
    const cos = (endPointCoordinates.xEnd - endPointCoordinates.xStart) / lengthLine
    const sin = (endPointCoordinates.yEnd - endPointCoordinates.yStart) / lengthLine

    let startPoint: StartPoint = {
        x: 0,
        y: 0
    }

    if (point === "start") {
        startPoint.x = endPointCoordinates.xStart
        startPoint.y = endPointCoordinates.yStart
    } else {
        startPoint.x = endPointCoordinates.xEnd
        startPoint.y = endPointCoordinates.yEnd
    }

    if (sin < 0) {
        const endPointCoords = {
            xStart: startPoint.x,
            yStart: startPoint.y,
            xEnd: startPoint.x + distanceFromPoint * sin,
            yEnd: startPoint.y - distanceFromPoint * cos,
        }
        return endPointCoords
    } else {
        const endPointCoords = {
            xStart: startPoint.x,
            yStart: startPoint.y,
            xEnd: startPoint.x - distanceFromPoint * sin,
            yEnd: startPoint.y + distanceFromPoint * cos,
        }
        return endPointCoords
    }
}