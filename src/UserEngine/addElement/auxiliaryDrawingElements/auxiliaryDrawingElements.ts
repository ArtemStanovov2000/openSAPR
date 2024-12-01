import { createDottedElements } from "./createDottedElements"
import { AuxiliaryElements } from "../../../data/data"

export type EndPointCoordinates = {
    xStart: number,
    yStart: number,
    xEnd: number,
    yEnd: number,
}


export const auxiliaryDrawingElements = (EndPointCoordinates: EndPointCoordinates, data: AuxiliaryElements) => {
    const DISTANCE_FROM_POINT = 50
    const DOTTED_SIZE = 2
    const DOTTED_GAP = 3
    const FONT_SIZE = 14
    createDottedElements(DISTANCE_FROM_POINT, DOTTED_SIZE, DOTTED_GAP, EndPointCoordinates, data)
}