import { StoreParams } from "../../../../models/StoreParams"
import { data } from "../../../../data/data"
import { createDottedLines } from "./createDottedLines"
import { createCurveDotted } from "./createCurveDotted"
import { MouseClickCoordinatesArray } from "../createAuxiliaryElements"

const cleanExcessiveElements = (prevData: any, data: any) => {
    for (let i = 0; i < prevData.length - data.length; i++) {
        prevData.pop()
    }
}

const addCurrentElementsInRAM = (RAM: any, data: any) => {
    for (let i = 0; i < data.length; i++) {
        RAM[i] = {
            type: 'Line',
            coords: {
                xStart: data[i].xStart,
                yStart: data[i].yStart,
                xEnd: data[i].xEnd,
                yEnd: data[i].yEnd,
            },
            color: "red",
            width: 2
        }
    }
}

export const createDottetElements = (mouseClickCoordinatesArray: MouseClickCoordinatesArray, storeParams: StoreParams) => {
    const dottedLines = createDottedLines(mouseClickCoordinatesArray, storeParams)
    const dottedCurves = createCurveDotted(mouseClickCoordinatesArray, storeParams)
    const dottedElements = dottedLines.concat(dottedCurves)
    cleanExcessiveElements(data.auxiliaryElements, dottedElements)
    addCurrentElementsInRAM(data.auxiliaryElements, dottedElements)
}