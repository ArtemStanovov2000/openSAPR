import { StoreParams } from "../../../../models/StoreParams"
import { calculateGeometricLineParams } from "./calculateGeometricLineParams"
import { MouseClickCoordinatesArray } from "../createAuxiliaryElements"

const countDottedElements = (angle: number, lineLength: number) => {
    const DOTTED_PERIOD = 5
    const TAY = 3.14159 * 2
    return Number(((angle / 360) * (lineLength * TAY) / DOTTED_PERIOD).toFixed(0))
}

const createAnglesDottedElement = (totalAngle: number, lineLength: number, isRiseLine: boolean) => {
    const count = countDottedElements(totalAngle, lineLength)
    const angles = []
    if (isRiseLine === false) {
        for (let i = 0; i < count; i++) {
            angles.push(Number((totalAngle * (i / count)).toFixed(3)))
        }
    } else {
        for (let i = 0; i < count; i++) {
            angles.push(Number((totalAngle * (i / -count)).toFixed(3)))
        }
    }
    return angles
}

const calculateXYDeltaLine = (totalAngle: number, lineLength: number, isRiseLine: boolean) => {
    const anglesDottedElementArray = createAnglesDottedElement(totalAngle, lineLength, isRiseLine)

    const XYDelta = []
    for (let i = 0; i < anglesDottedElementArray.length; i++) {
        const YDelta = Number((Math.sin(anglesDottedElementArray[i] / 57.333) * lineLength).toFixed(1))
        const XDelta = Number((Math.cos(anglesDottedElementArray[i] / 57.333) * lineLength).toFixed(1))
        XYDelta.push({
            x: XDelta,
            y: YDelta
        })
    }
    return XYDelta
}

const calculateCoordsLine = (totalAngle: number, lineLength: number, startCoord: any, isRiseLine: boolean) => {
    const XYDelta = calculateXYDeltaLine(totalAngle, lineLength, isRiseLine)
    const coordinatesLines = []
    for (let i = 0; i < XYDelta.length; i++) {
        coordinatesLines.push({
            xStart: startCoord.xStart + XYDelta[i].x - 1.5,
            yStart: startCoord.yStart + XYDelta[i].y - 1.5,
            xEnd: startCoord.xStart + XYDelta[i].x,
            yEnd: startCoord.yStart + XYDelta[i].y
        },
        )
    }
    return coordinatesLines
}

export const createCurveDotted = (mouseClickCoordinatesArray: MouseClickCoordinatesArray, storeParams: StoreParams) => {
    const lineGeometricParams = calculateGeometricLineParams(
        mouseClickCoordinatesArray[0].x,
        mouseClickCoordinatesArray[0].y,
        storeParams.coords.x,
        storeParams.coords.y,
    )

    const startCoord = {
        xStart: mouseClickCoordinatesArray[0].x,
        yStart: mouseClickCoordinatesArray[0].y,
    }

    let isRiseLine
    storeParams.coords.y - mouseClickCoordinatesArray[0].y < 0 ? isRiseLine = true : isRiseLine = false

    const angleInDegrees = Math.atan(Math.abs(lineGeometricParams.deltaY) / lineGeometricParams.deltaX) * 57.333
    if (angleInDegrees < 0) {
        const fullAngle = Number((angleInDegrees + 180).toFixed(2))
        return calculateCoordsLine(fullAngle, lineGeometricParams.length, startCoord, isRiseLine)
    } else {
        const fullAngle = Number(angleInDegrees.toFixed(2))
        return calculateCoordsLine(fullAngle, lineGeometricParams.length, startCoord, isRiseLine)
    }
}