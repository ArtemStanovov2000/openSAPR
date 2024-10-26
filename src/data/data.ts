import { CanvasElement } from "../models/ElementsType/CanvasElement"

type Data = {
    elements: CanvasElement[],
    temporaryStorageElements: CanvasElement[],
    auxiliaryElements: CanvasElement[],
}

export const data: Data = {
    elements: [],
    temporaryStorageElements: [],
    auxiliaryElements: [],
}
