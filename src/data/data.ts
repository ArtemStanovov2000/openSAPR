import { Line, AuxiliaryLine } from "../models/ElementsType/Line"
import { Text } from "../models/ElementsType/Text"
import { createAxes } from "./createAxes"
import { createCursor } from "./createCursor"

export type Elements = {
    Lines: Line[]
}

export type AuxiliaryElements = {
    Lines: AuxiliaryLine[],
    Text: Text[]
    Pole: AuxiliaryLine[]
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
        Lines: [],
        Text: [],
        Pole: []
    },
    centerAxes: [],
    cursor: []
}

createAxes(data)
createCursor(data)
