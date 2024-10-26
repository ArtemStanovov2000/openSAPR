import { StoreParams } from "../../../models/StoreParams"
import { createDottetElements } from "./createDottedElement/createDottetElements"

type MouseClickCoordinates = {
    x: number,
    y: number
}

export type MouseClickCoordinatesArray = MouseClickCoordinates[]

export const createAuxiliaryElements = (mouseClickCoordinatesArray: MouseClickCoordinatesArray, storeParams: StoreParams) => {
    createDottetElements(mouseClickCoordinatesArray, storeParams)
}