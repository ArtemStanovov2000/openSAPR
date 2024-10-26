import { StoreParams } from "../../../../models/StoreParams"
import { createDottedElementsArray } from "./createDottedElementsArray"
import { calculateGeometricLineParams } from "./calculateGeometricLineParams"
import { MouseClickCoordinatesArray } from "../createAuxiliaryElements"

const createLineEndPointCoords = (xStart: number, yStart: number, xEnd: number, yEnd: number) => {
    const endPointCoords = {
        xStart: xStart,
        yStart: yStart,
        xEnd: xEnd,
        yEnd: yEnd,
    }
    return endPointCoords
}

export const createDottedLines = (mouseClickCoordinatesArray: MouseClickCoordinatesArray, storeParams: StoreParams) => {
    const NORMAL_LENGTH = 40 / storeParams.zoom.zoom
    const lineGeometricParams = calculateGeometricLineParams(
        mouseClickCoordinatesArray[0].x,
        mouseClickCoordinatesArray[0].y,
        storeParams.coords.x,
        storeParams.coords.y,
    )
    const deltaX = lineGeometricParams.deltaX / lineGeometricParams.length * NORMAL_LENGTH
    const deltaY = lineGeometricParams.deltaY / lineGeometricParams.length * NORMAL_LENGTH

    //координаты перпендикулярного пунктирного отрезка в начале линии
    const startPointPerpendicularDottedLineEndPoints = createLineEndPointCoords(
        mouseClickCoordinatesArray[0].x + deltaY,
        mouseClickCoordinatesArray[0].y - deltaX,
        mouseClickCoordinatesArray[0].x,
        mouseClickCoordinatesArray[0].y
    )
    //создание пунктира перпендикулярного отрезка в начале линии
    const startPointLineDotted = createDottedElementsArray(
        startPointPerpendicularDottedLineEndPoints.xStart,
        startPointPerpendicularDottedLineEndPoints.yStart,
        startPointPerpendicularDottedLineEndPoints.xEnd,
        startPointPerpendicularDottedLineEndPoints.yEnd,
        NORMAL_LENGTH
    )

    //координаты перпендикулярного пунктирного отрезка в конце линии
    const endPointPerpendicularDottedLineEndPoints = createLineEndPointCoords(
        mouseClickCoordinatesArray[0].x + deltaY + lineGeometricParams.deltaX,
        mouseClickCoordinatesArray[0].y - deltaX + lineGeometricParams.deltaY,
        storeParams.coords.x,
        storeParams.coords.y
    )
    //создание пунктира перпендикулярного отрезка в конце линии
    const endPointLineDotted = createDottedElementsArray(
        endPointPerpendicularDottedLineEndPoints.xStart,
        endPointPerpendicularDottedLineEndPoints.yStart,
        endPointPerpendicularDottedLineEndPoints.xEnd,
        endPointPerpendicularDottedLineEndPoints.yEnd,
        NORMAL_LENGTH
    )

    //генерация отрезков пунктира параллельного пунктирного отрезка
    const parallelDottedLineEndPoints = createDottedElementsArray(
        startPointPerpendicularDottedLineEndPoints.xStart,
        startPointPerpendicularDottedLineEndPoints.yStart,
        endPointPerpendicularDottedLineEndPoints.xStart,
        endPointPerpendicularDottedLineEndPoints.yStart,
    )

    //координаты пунктирного ортогонального отрезка направленный вправо
    const ortoLineEndPoints = createLineEndPointCoords(
        mouseClickCoordinatesArray[0].x,
        mouseClickCoordinatesArray[0].y,
        mouseClickCoordinatesArray[0].x + lineGeometricParams.length,
        mouseClickCoordinatesArray[0].y,
    )
    //генерация отрезков пунктира ортогонального отрезка направленный вправо
    const ortoLineDotted = createDottedElementsArray(
        ortoLineEndPoints.xStart,
        ortoLineEndPoints.yStart,
        ortoLineEndPoints.xEnd,
        ortoLineEndPoints.yEnd,
    )

    const dottedLines = startPointLineDotted.concat(endPointLineDotted).concat(parallelDottedLineEndPoints).concat(ortoLineDotted)
    return dottedLines
}
