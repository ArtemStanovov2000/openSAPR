import { Line, AuxiliaryLine } from "../models/ElementsType/Line"
import { createAxes } from "./createAxes"
import { createCursor } from "./createCursor"

export type Elements = {
    Lines: Line[]
}

export type AuxiliaryElements = {
    Lines: AuxiliaryLine[]
}

export type Data = {
    elements: Elements,
    temporaryStorageElements: Elements,
    auxiliaryElements: AuxiliaryElements,
    centerAxes: Line[],
    cursor: Line[]
}

export const data: Data = {
    elements: {
        Lines: []
    },
    temporaryStorageElements: {
        Lines: []
    },
    auxiliaryElements: {
        Lines: []
    },
    centerAxes: [],
    cursor: []
}

createAxes(data)
createCursor(data)
