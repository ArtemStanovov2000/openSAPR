import { drawLine } from "./elementType/drawLine";
import { drawNoStaticLine } from "./elementType/drawNoStaticLine";
import { StoreParams } from "../../models/StoreParams";
import { Data } from "../../data/data";
import { Line, AuxiliaryLine } from "../../models/ElementsType/Line";

export const renderElement = (context: any, data: Data, storeParams: StoreParams, storeDispatch: any) => {
    data.elements.Lines.forEach((line: Line) => {
        drawLine(context, line)
    })
    data.temporaryStorageElements.Lines.forEach((line: Line) => {
        drawLine(context, line)
    })
    data.auxiliaryElements.Lines.forEach((line: AuxiliaryLine) => {
        drawNoStaticLine(context, line)
    })
    data.centerAxes.forEach((line: Line) => {
        drawLine(context, line)
    })
    data.cursor.forEach((line: Line) => {
        drawLine(context, line)
    })
}