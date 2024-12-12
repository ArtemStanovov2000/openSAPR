import { AuxiliaryElements } from "../../../data/data"
import { EndPointCoordinates } from "./auxiliaryDrawingElements"

export const createText = (data: AuxiliaryElements, EndPointCoordinates: EndPointCoordinates, xEnd: number, yEnd: number, fontSize: number) => {

    const fixedXCoord = Number(xEnd.toFixed(7))
    const fixedYCoord = Number(yEnd.toFixed(7))

    data.Text[0] = {
        fontSize: fontSize,
        text: `${fixedXCoord},   ${fixedYCoord}`,
        xStart: EndPointCoordinates.xEnd + 15,
        yStart: EndPointCoordinates.yEnd - 15,
        color: "white"
    }
}