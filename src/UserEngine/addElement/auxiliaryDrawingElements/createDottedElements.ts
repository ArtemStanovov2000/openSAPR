import { createDottedLine } from "./createDottedLine"
import { EndPointCoordinates } from "./auxiliaryDrawingElements"
import { AuxiliaryElements } from "../../../data/data"
import { createOrtoLineCoordinates } from "./createOrtoLineCoordinates"
import { createParallelLineCoordinates } from "./createParallelLineCoordinates"
import { createHorizontalLineCoordinates } from "./createHorizontalLineCoordinates"
import { createCurvedDottedElement } from "./createCurvedDottedElement"

export const createDottedElements = (distanceFromPoint: number, dottedSize: number, dottedGap: number, endPointCoordinates: EndPointCoordinates, data: AuxiliaryElements) => {
    const firstOrtoLine = createOrtoLineCoordinates(endPointCoordinates, "start", distanceFromPoint)
    const secondOrtoLine = createOrtoLineCoordinates(endPointCoordinates, "end", distanceFromPoint)
    const parallelLine = createParallelLineCoordinates(endPointCoordinates, distanceFromPoint)
    const horizontalLine = createHorizontalLineCoordinates(endPointCoordinates)
    const curvedLine = createCurvedDottedElement(dottedSize, dottedGap, endPointCoordinates, "#ff3232")

    const firstOrtoLineDotted = createDottedLine(dottedSize, dottedGap, firstOrtoLine, "#ff3232")
    const secondOrtoLineDotted = createDottedLine(dottedSize, dottedGap, secondOrtoLine, "#ff3232")
    const parallelLineDotted = createDottedLine(dottedSize, dottedGap, parallelLine, "#ff0000", true)
    const horizontalLineDotted = createDottedLine(dottedSize, dottedGap, horizontalLine, "#cc0000", true)

    const allElements = firstOrtoLineDotted.concat(secondOrtoLineDotted).concat(parallelLineDotted).concat(horizontalLineDotted).concat(curvedLine)

    for (let i = data.Lines.length; i > allElements.length; i--) {
        data.Lines.pop()
    }

    for (let i = 0; i < allElements.length; i++) {
        data.Lines[i] = {
            color: allElements[i].color,
            width: 1.5,
            coords: {
                xStart: allElements[i].xStart,
                yStart: allElements[i].yStart,
                xEnd: allElements[i].xEnd,
                yEnd: allElements[i].yEnd,
            },
        }
    }
}