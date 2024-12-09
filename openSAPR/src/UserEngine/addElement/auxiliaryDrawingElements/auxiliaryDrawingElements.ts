import { createDottedElements } from "./createDottedElements"
import { AuxiliaryElements } from "../../../data/data"
import { createText } from "./createText"

export type EndPointCoordinates = {
    xStart: number,
    yStart: number,
    xEnd: number,
    yEnd: number,
}


export const auxiliaryDrawingElements = (EndPointCoordinates: EndPointCoordinates, data: AuxiliaryElements, xEnd: number, yEnd: number) => {
    const DISTANCE_FROM_POINT = 50
    const DOTTED_SIZE = 2
    const DOTTED_GAP = 3
    const FONT_SIZE = 17
    if(EndPointCoordinates) {
        createDottedElements(DISTANCE_FROM_POINT, DOTTED_SIZE, DOTTED_GAP, EndPointCoordinates, data)
        createText(data, EndPointCoordinates, xEnd, yEnd, FONT_SIZE)
    }
}